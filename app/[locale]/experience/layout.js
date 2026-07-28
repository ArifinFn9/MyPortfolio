import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, '/experience', 'experience');
}

export default function ExperienceLayout({ children }) {
  return children;
}
