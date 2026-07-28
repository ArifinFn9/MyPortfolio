import { getPageMetadata } from "@/lib/metadata";
import { projects } from "@/data/projects";
import { getMessages } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale, id } = await params;
  const project = projects.find((p) => p.id === id);
  const baseMeta = await getPageMetadata(locale, `/projects/${id}`, null);
  
  if (project) {
    const messages = await getMessages();
    const projectTitle = messages.projects?.items?.[id]?.title || project.title;
    
    baseMeta.title = `${projectTitle} | ${baseMeta.title}`;
    if (baseMeta.openGraph) {
      baseMeta.openGraph.title = baseMeta.title;
    }
  }
  return baseMeta;
}

export default function ProjectDetailLayout({ children }) {
  return children;
}
