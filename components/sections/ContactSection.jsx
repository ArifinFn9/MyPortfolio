"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import MiniCard from "@/components/ui/MiniCard";
import Button from "@/components/ui/Button";
import { Send, CheckCircle, Loader2, Mail, MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";
import { socials } from "@/data/socials";
import { SiGithub, SiLinkedin, SiTelegram, SiInstagram } from "react-icons/si";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ContactSection() {
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
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
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

  const platforms = [
    {
      name: "GitHub",
      icon: SiGithub,
      href: socials.github.url,
    },
    {
      name: "LinkedIn",
      icon: SiLinkedin,
      href: socials.linkedin.url,
    },
    {
      name: "Instagram",
      icon: SiInstagram,
      href: socials.instagram.url,
    },
    {
      name: "Telegram",
      icon: SiTelegram,
      href: socials.telegram.url,
    },
  ];

  const isFormValid = Boolean(
    formData.email?.trim() &&
    formData.name?.trim() &&
    formData.message?.trim()
  );

  return (
    <Section
      id="contact"
      className="scroll-mt-4 py-12 md:py-20 px-6 max-w-6xl mx-auto w-full"
    >
      {/* Centered Header */}
      <SectionHeader
        title={t("title")}
        subtitle={t("desc")}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Stacked Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full">
          {/* Card 1: Connect With Me */}
          <Card glow={false} hover={false} className="!p-6 md:!p-8 relative overflow-hidden flex-1 flex flex-col justify-between hover:border-white/30 transition-colors duration-300">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <MessageSquare className="w-5 h-5 text-white shrink-0" />
                <h3 className="text-xl font-bold text-white">
                  {t("connectTitle")}
                </h3>
              </div>
              <p className="text-xs md:text-sm text-zinc-400 mb-6">
                {t("connectSubtitle")}
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/item"
                  >
                    <MiniCard className="flex items-center gap-3 !p-3 sm:!p-3.5">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover/item:scale-110 transition-transform">
                        <platform.icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-zinc-300 group-hover/item:text-white transition-colors truncate">
                        {platform.name}
                      </span>
                    </MiniCard>
                  </a>
                ))}
              </div>
            </div>
          </Card>

          {/* Card 2: Prefer email? */}
          <Card glow={false} hover={false} className="!p-6 relative overflow-hidden hover:border-white/30 transition-colors duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <h4 className="text-sm font-bold text-white mb-0.5">
                  {t("preferEmailTitle")}
                </h4>
                <p className="text-xs text-gray-400 mb-1">
                  {t("preferEmailDesc")}
                </p>
                <a
                  href={`mailto:${socials.email.url}`}
                  className="text-xs font-semibold text-white hover:underline truncate block"
                >
                  {socials.email.handle}
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Send a Message Form Card */}
        <div className="lg:col-span-7 w-full flex">
          <Card glow={false} hover={false} className="!p-6 md:!p-8 relative overflow-hidden w-full flex flex-col justify-between hover:border-white/30 transition-colors duration-300">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-1">
                  <Send className="w-5 h-5 text-white shrink-0" />
                  <h3 className="text-xl font-bold text-white">
                    {t("sendTitle")}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-gray-400 mb-6">
                  {t("sendSubtitle")}
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-400">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {t("successTitle")}
                    </h3>
                    <p className="text-gray-400 text-sm max-w-sm mb-6">
                      {t("successDesc")}
                    </p>
                    <Button
                      variant="ghost"
                      onClick={() => setIsSuccess(false)}
                      className="text-purple-400 hover:text-purple-300 text-sm"
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
                    className="flex-1 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <input
                        type="checkbox"
                        name="botcheck"
                        className="hidden"
                        style={{ display: "none" }}
                        checked={formData.botcheck}
                        onChange={handleChange}
                      />

                      {/* Email & Name 2-Column Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-xs font-semibold text-gray-300 mb-2"
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
                            className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/30 outline-none transition-all placeholder:text-gray-600 text-white text-sm"
                            placeholder={t("emailPlaceholder")}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="name"
                            className="block text-xs font-semibold text-gray-300 mb-2"
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
                            className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/30 outline-none transition-all placeholder:text-gray-600 text-white text-sm"
                            placeholder={t("namePlaceholder")}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-xs font-semibold text-gray-300 mb-2"
                        >
                          {t("messageLabel")}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/30 outline-none transition-all placeholder:text-gray-600 text-white text-sm resize-none"
                          placeholder={t("messagePlaceholder")}
                        />
                      </div>
                    </div>

                    <div className="pt-6 flex justify-start">
                      <Button
                        type="submit"
                        variant="ghost"
                        disabled={isSubmitting || !isFormValid}
                        className="w-full sm:w-auto h-11 px-6 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 text-white font-medium transition-all duration-300 ease-out flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none text-sm shadow-sm"
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
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
