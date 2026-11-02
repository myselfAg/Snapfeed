import { useEffect, useState } from "react";
import axios from "axios";
import "../css/FeedPage.css";

const FeedPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      axios
        .get("http://localhost:3000/posts")
        .then((response) => {
          console.log(response.data);
          setPosts(response.data.posts);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    getPosts();
  }, []);

  return (
    <div className="feed">
      {[...posts].reverse().map((post) => (
        <article className="post" key={post.id}>
          <img
            className="post-image"
            src={post.image}
            alt={post.caption}
          />

          <div className="post-content">
            <p>{post.caption}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default FeedPage;