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
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct mailto link
    const subject = encodeURIComponent(`Contact Form: Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:${socials.email.url}?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Small delay to show loading state
    await new Promise((resolve) => setTimeout(resolve, 500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden">
      <Section className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 pb-2">
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
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-110 transition-transform">
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
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
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
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
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
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/30 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 shrink-0 group-hover:scale-110 transition-transform">
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
            <Card className="bg-white/5 border-white/10 p-8 md:p-10 relative overflow-hidden">
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
                        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all placeholder:text-gray-600 text-white"
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
                        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all placeholder:text-gray-600 text-white"
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
                        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all placeholder:text-gray-600 text-white resize-none"
                        placeholder={t("messagePlaceholder")}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
