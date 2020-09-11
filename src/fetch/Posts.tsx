import React, { useEffect, useState } from "react";
import { Post } from "./Post";

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=10"
    );
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div
          style={{
            border: "1px solid #eee",
            width: "30%",
            display: "inline-block",
            padding: "10px",
            textAlign: "center",
          }}
          key={post.id}
        >
          <h5>{post.title}</h5>
          <img src={post.thumbnailUrl} alt="" />
        </div>
      ))}
    </div>
  );
};
