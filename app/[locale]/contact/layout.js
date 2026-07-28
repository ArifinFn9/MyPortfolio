import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, '/contact', 'contact');
}

export default function ContactLayout({ children }) {
  return children;
}
