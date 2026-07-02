"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { X, Download } from "lucide-react";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

const PreviewContext = createContext(null);

export function PreviewProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [metaType, setMetaType] = useState("");
  const [metaYear, setMetaYear] = useState("");
  const [isCv, setIsCv] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const locale = useLocale();

  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [containerHeight, setContainerHeight] = useState("100%");

  const openPreview = ({ url, title, type, year, isCv = false }) => {
    setUrl(url);
    setTitle(title);
    setMetaType(type);
    setMetaYear(year);
    setIsCv(isCv);
    setIsOpen(true);
  };

  const closePreview = () => {
    setIsOpen(false);
  };

  // Detect mobile screen width on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 640);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Lock body scroll when preview is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Detect if URL is PDF
  const isPdf = url.toLowerCase().endsWith(".pdf") || url.includes("export?format=pdf");

  // Format preview URL to prevent automatic downloads inside iframe
  let iframeUrl = url;
  if (url.includes("google.com/document") && url.includes("/export")) {
    iframeUrl = url.replace(/\/export\?format=pdf.*/, isMobile ? "/mobilebasic" : "/preview");
  }

  // Calculate dynamic scale factor to fit A4 page width (820px) on mobile and desktop
  useEffect(() => {
    if (!isOpen || !isPdf) return;

    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.getBoundingClientRect().width;
      
      // We scale the 820px wide iframe down to match the container's width
      if (width < 820) {
        const s = width / 820;
        setScale(s);
        // Height is scaled proportionally to maintain 820x1160 aspect ratio
        setContainerHeight(`${1160 * s}px`);
      } else {
        setScale(1);
        setContainerHeight("100%");
      }
    };

    const timer = setTimeout(handleResize, 100);

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, url, isPdf]);

  return (
    <PreviewContext.Provider value={{ openPreview, closePreview }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePreview}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm select-none cursor-pointer"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl h-[80vh] flex flex-col glass-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl cursor-default"
              style={{ backgroundColor: "rgba(7, 7, 8, 0.95)" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 shrink-0 bg-white/[0.02]">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  {isCv
                    ? locale === "id"
                      ? "Pratinjau CV / Resume"
                      : "CV / Resume Preview"
                    : locale === "id"
                      ? "Pratinjau Sertifikat"
                      : "Certificate Preview"}
                </h3>
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    closePreview();
                  }}
                  className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Preview Area */}
              <div className="flex-1 w-full bg-zinc-950/60 relative overflow-hidden flex items-center justify-center p-2 min-h-0">
                {isPdf ? (
                  <div 
                    ref={containerRef}
                    className="w-full relative overflow-hidden bg-zinc-950 border border-white/5 rounded-lg flex items-center justify-center"
                    style={{ height: containerHeight }}
                  >
                    {/* Fallback & Loading UI behind iframe */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-zinc-500 text-xs z-0">
                      <p className="mb-2 font-medium">{locale === "id" ? "Memuat dokumen..." : "Loading document..."}</p>
                      <p className="text-[10px] text-zinc-600 max-w-md">
                        {locale === "id" 
                          ? "Jika pratinjau tidak muncul otomatis di perangkat Anda, silakan gunakan tombol Unduh di bawah." 
                          : "If the preview does not appear automatically on your device, please use the Download button below."}
                      </p>
                    </div>
                    <iframe 
                      src={`${iframeUrl}#toolbar=0`} 
                      className="absolute top-0 left-0 border-0 bg-transparent z-10"
                      style={{
                        width: "820px",
                        height: "1160px",
                        transform: `scale(${scale})`,
                        transformOrigin: "top left"
                      }}
                      title={title}
                    />
                  </div>
                ) : (
                  <div className="w-full h-full relative flex items-center justify-center overflow-auto p-2">
                    <img 
                      src={url} 
                      alt={title}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-lg border border-white/5 select-none"
                    />
                  </div>
                )}
              </div>

              {/* Details Footer */}
              <div className="p-5 border-t border-white/10 bg-white/[0.01] shrink-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-bold text-white truncate mb-1">
                    {title}
                  </h4>
                  <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                    {metaType} {metaYear ? `— ${metaYear}` : ""}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      closePreview();
                    }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 text-white font-semibold text-sm active:scale-95 transition-all cursor-pointer"
                  >
                    <span>{locale === "id" ? "Tutup" : "Close"}</span>
                  </button>
                  <a
                    href={url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 active:scale-95 transition-all cursor-pointer shadow-md"
                  >
                    <Download className="w-4 h-4" />
                    <span>{locale === "id" ? "Unduh" : "Download"}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PreviewContext.Provider>
  );
}

export function usePreview() {
  const context = useContext(PreviewContext);
  if (!context) {
    throw new Error("usePreview must be used within a PreviewProvider");
  }
  return context;
}
