import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, '/about', 'about');
}

export default function AboutLayout({ children }) {
  return children;
}
