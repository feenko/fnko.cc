import { posts, slug } from "#lib/content/posts";
import { error } from "@sveltejs/kit";

export const entries = () => Object.keys(posts).map((path) => ({ slug: slug(path) }));

export const load = ({ params }) => {
  const path = `/src/content/posts/${params.slug}.md`;

  if (!Object.hasOwn(posts, path)) {
    throw error(404, "Post not found");
  }

  const post = posts[path];

  return {
    content: post.default,
    metadata: post.metadata,
  };
};
