import type { Component } from "svelte";

export interface Post {
  title: string;
  description: string;
  authors?: string[];
}

export interface PostModule {
  default: Component;
  metadata: Post;
}

export interface PostPreview extends Post {
  slug: string;
}
