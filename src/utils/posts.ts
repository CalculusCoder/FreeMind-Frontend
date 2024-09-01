import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMetadata } from "@/types/PostMetadata";

export const getPostMetadata = (): PostMetadata[] => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const markdownPosts = filenames.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      author: matterResult.data.author,
      identifier: matterResult.data.identifier,
      description: matterResult.data.description,
      imagePath: matterResult.data.imagePath,
      slug: filename.replace(".md", ""),
    };
  });
  return posts;
};

export const getPostContent = (slug: string) => {
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);

  return {
    title: matterResult.data.title,
    date: matterResult.data.date,
    author: matterResult.data.author,
    content: matterResult.content,
    identifier: matterResult.data.identifier,
    description: matterResult.data.description,
    imagePath: matterResult.data.imagePath,
  };
};
