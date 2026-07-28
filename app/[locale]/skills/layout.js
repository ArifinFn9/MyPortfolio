import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, '/skills', 'skills');
}

export default function SkillsLayout({ children }) {
  return children;
}
