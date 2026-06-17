"use client";
import { useState } from "react";
import { Post } from "./types";
import { PostModal } from "@/src/components/PostModal"
import { POST_SIZE } from "./constants"
import { PostsGrid } from "@/src/components/PostsGrid"

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePost, setActivePost] = useState<Post>({id: 0, imageUrl: "", author: ""});

  const posts: Post[] = [
    { id: 1, imageUrl: "/dz_content/djspike.png", author: "dezeta" },
    { id: 2, imageUrl: "/dz_content/photo1.jpg", author: "dezeta" },
    { id: 3, imageUrl: "/dz_content/post1.jpg", author: "dezeta" },
    { id: 4, imageUrl: "/dz_content/post2.jpg", author: "dezeta" },
    { id: 5, imageUrl: "/dz_content/post3.jpg", author: "dezeta" },
    {
      id: 6,
      imageUrl: "/dz_content/lonsovilla_still_fire1.png",
      author: "dezeta",
    },
  ];

  const openPost = (postId: number) => {
    //check for post first
    const postConfig = posts.find((post) => post.id === postId)
    if(!postConfig){
      // nothing to open if the post is not found..
      // graceful result
      console.error(`ERROR: Post with ID ${postId} not found.`)
      return;
    }

    setIsOpen(true);
    setActivePost(postConfig);
    console.log("clicked post", posts.find((post) => post.id === postId)?.imageUrl)
  }

  const closePost = () => {
    setIsOpen(false);
    setActivePost({id: 0, imageUrl: "", author: ""});
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Creative Portfolio</h2>
      <p className="text-gray-600">Our featured work.</p>
      <PostsGrid posts={posts} postSize={POST_SIZE} onOpen={openPost} ></PostsGrid>
      {isOpen && activePost && (
        <PostModal
          post={activePost}
          postSize={POST_SIZE}
          onClose={closePost}
        ></PostModal>
      )}
    </div>
  );
}
