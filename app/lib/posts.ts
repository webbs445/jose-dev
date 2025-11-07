import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

export interface PostMeta {
  slug: string;
  title?: string;
  date?: string;
  excerpt?: string;
  tags?: string[];
  featuredImage?: string;
}

const postsDir = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];

  const files = fs
    .readdirSync(postsDir)
    .filter((f) => f.toLowerCase().endsWith(".mdx"));

  return files
    .map((filename) => {
      const file = fs.readFileSync(path.join(postsDir, filename), "utf8");
      const { data } = matter(file);
      return { ...data, slug: filename.replace(/\.mdx$/i, "") } as PostMeta;
    })
    .sort(
      (a, b) =>
        new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
    );
}

export function getPost(slug: string) {
  const fullPath = path.join(postsDir, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    notFound();
  }
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);
  return { data, content };
}
