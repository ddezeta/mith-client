"use client";
import { useState } from "react";
import { Post } from "./types";
import { PostModal } from "@/src/components/PostModal"
import { POST_SIZE } from "./constants"
import { PostsGrid } from "@/src/components/PostsGrid"
import { POSTS } from "./data"

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePost, setActivePost] = useState<Post>({id: 0, imageUrl: "", author: ""});


  const openPost = (postId: number) => {
    console.log("clicked post", POSTS.find((post) => post.id === postId)?.imageUrl)
    
    const postConfig = POSTS.find((post) => post.id === postId)
    if (!postConfig) {
      console.error(`ERROR: Post with ID ${postId} not found.`)
      return;
    }

    setIsOpen(true);
    setActivePost(postConfig);
  }

  const closePost = () => {
    setIsOpen(false);
    setActivePost({ id: 0, imageUrl: "", author: "" });
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Creative Portfolio</h2>
      <p className="text-gray-600">Our featured work.</p>
      <PostsGrid posts={POSTS} postSize={POST_SIZE} onOpen={openPost} ></PostsGrid>
      {isOpen && activePost && activePost.id !== 0 && (
        <PostModal
          post={activePost}
          postSize={POST_SIZE}
          onClose={closePost}
        ></PostModal>
      )}
    </div>
  );
}
