import type { PostPreview } from "$lib/types/post";
import { posts, slug } from "$lib/content/posts";

export const load = () => {
  const previews: PostPreview[] = Object.entries(posts).map(([path, module]) => ({
    ...module.metadata,
    slug: slug(path),
  }));

  return { posts: previews };
};
