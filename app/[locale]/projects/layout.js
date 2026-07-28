import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, '/projects', 'projects');
}

export default function ProjectsLayout({ children }) {
  return children;
}
