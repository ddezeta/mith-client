"use client";
import Image from "next/image";
import { Post, PostSize } from "@/src/app/(main)/gallery/types"

interface PostsGridProps {
    posts: Post[];
    postSize: PostSize;
    onOpen: (postId: number) => void; 
}

export const PostsGrid = ({posts, postSize, onOpen}: PostsGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-1">
      {posts.map((post) => (
        <div
          key={post.id}
          className="cursor-pointer"
          onClick={() => onOpen(post.id)}
        >
          <Image
            key={post.id}
            src={post.imageUrl}
            alt={post.author}
            width={postSize.width}
            height={postSize.height}
          />
        </div>
      ))}
    </div>
  );
};
