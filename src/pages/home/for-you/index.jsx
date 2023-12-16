import { posts as postData } from '~/mock/posts.js';
import Post from '~/components/post/index.jsx';
import { WVList } from 'virtua';
import { useState } from 'react';

export default function ForYou() {
  const [posts, setPost] = useState(postData);
  return (
    <WVList
      onRangeChange={(start, end) => {
        if (end + 1 === posts.length) {
          setPost((prev) => [...prev, ...postData]);
        }
      }}
    >
      {posts.map((post, key) => (
        <Post post={post} key={post.id + key} />
      ))}
    </WVList>
  );
}
