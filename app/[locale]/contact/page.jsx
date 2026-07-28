"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Send, CheckCircle, Loader2, MessageSquare, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { socials } from "@/data/socials";
import { SiLinkedin, SiTelegram, SiInstagram } from "react-icons/si";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    botcheck: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "c092557e-e8d7-4cec-bd4c-c2c56955904f",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck: formData.botcheck ? "true" : "",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "", botcheck: false });
      } else {
        alert(result.message || "Gagal mengirim pesan. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Web3Forms error:", error);
      alert("Terjadi kesalahan koneksi. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-12 md:pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden">
      <Section className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500 pb-2">
            {t("title")}
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            {t("desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Connection Links */}
          <div className="md:col-span-5 space-y-4 w-full">
            <h2 className="text-xl font-bold text-white mb-4">
              {t("directTitle")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
              {/* Email Card */}
              <a
                href={`mailto:${socials.email.url}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 active:scale-[0.98] transition-all duration-150 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    {t("directEmail")}
                  </span>
                  <span className="block text-sm font-medium text-white truncate">
                    {socials.email.handle}
                  </span>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 active:scale-[0.98] transition-all duration-150 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <SiLinkedin className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    {t("directLinkedin")}
                  </span>
                  <span className="block text-sm font-medium text-white truncate">
                    {socials.linkedin.handle}
                  </span>
                </div>
              </a>

              {/* Telegram Card */}
              <a
                href={socials.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 active:scale-[0.98] transition-all duration-150 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <SiTelegram className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    {t("directTelegram")}
                  </span>
                  <span className="block text-sm font-medium text-white truncate">
                    {socials.telegram.handle}
                  </span>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href={socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 active:scale-[0.98] transition-all duration-150 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <SiInstagram className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    {t("directInstagram")}
                  </span>
                  <span className="block text-sm font-medium text-white truncate">
                    {socials.instagram.handle}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-7 w-full">
            <Card className="p-8 md:p-10 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-400">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {t("successTitle")}
                    </h3>
                    <p className="text-gray-400">
                      {t("successDesc")}
                    </p>
                    <Button
                      variant="ghost"
                      onClick={() => setIsSuccess(false)}
                      className="mt-6 text-purple-400 hover:text-purple-300"
                    >
                      {t("sendAnother")}
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: "none" }}
                      checked={formData.botcheck}
                      onChange={handleChange}
                    />
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        {t("nameLabel")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/30 outline-none transition-all placeholder:text-gray-600 text-white"
                        placeholder={t("namePlaceholder")}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        {t("emailLabel")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/30 outline-none transition-all placeholder:text-gray-600 text-white"
                        placeholder={t("emailPlaceholder")}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        {t("messageLabel")}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/30 outline-none transition-all placeholder:text-gray-600 text-white resize-none"
                        placeholder={t("messagePlaceholder")}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{t("sending")}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{t("sendButton")}</span>
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
}
