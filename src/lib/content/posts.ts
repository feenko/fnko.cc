import type { PostModule } from "$lib/types/post";

export const posts = import.meta.glob<PostModule>("/src/content/posts/*.md", {
  eager: true,
});

export function slug(path: string) {
  const filename = path.split("/").at(-1);

  if (!filename) {
    throw new Error(`Invalid post path: ${path}`);
  }

  return filename.replace(/\.md$/u, "");
}
