"use client";
import Image from "next/image";
import { useState } from "react";
import { Post } from "./types";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  const posts: Post[] = [
    { id: "1", imageUrl: "/dz_content/djspike.png", author: "dezeta" },
    { id: "2", imageUrl: "/dz_content/photo1.jpg", author: "dezeta" },
    { id: "3", imageUrl: "/dz_content/post1.jpg", author: "dezeta" },
    { id: "4", imageUrl: "/dz_content/post2.jpg", author: "dezeta" },
    { id: "5", imageUrl: "/dz_content/post3.jpg", author: "dezeta" },
    {
      id: "6",
      imageUrl: "/dz_content/lonsovilla_still_fire1.png",
      author: "dezeta",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
      <p className="text-gray-600">
        Your connected ad accounts and performance metrics will appear here.
      </p>
      <div className="grid grid-cols-3 gap-1" onClick={() => setIsOpen(true)}>
        {posts.map((post) => (
          <Image
            key={post.id}
            src={post.imageUrl}
            alt={post.author}
            width={300}
            height={300}
          />
        ))}
      </div>
    </div>
  );
}
