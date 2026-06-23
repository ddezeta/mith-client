"use client";
import Image from "next/image";
import { Post, PostSize } from "@/src/app/(main)/gallery/types"

interface PostModalProps {
  post: Post;
  postSize: PostSize;
  onClose: () => void;
}

export const PostModal = ({ post, postSize, onClose}: PostModalProps) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-slate-500/70 bg-opacity-80 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-2 right-2 text-white text-3xl"
          onClick={onClose}
        >
          &times;
        </button>
        <Image
          key={post.id}
          src={post.imageUrl}
          alt={post.author}
          width={postSize.width}
          height={postSize.height}
        />
        <div className="text-white text-center">
          <p>Author: {post.author}</p>
          <p>Contact: ...@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
