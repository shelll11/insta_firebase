import React, { useState } from "react";
import Suggestions from "../suggestions/Suggestions";
import Post from "./posts/Post";
import "./Timeline.css";

// see https://youtu.be/SqcY0GlETPk?t=3148
export interface PostProps {
  user: string;
  image_url: string;
  image_alt: string;
  timestamp: string;
  likes: number;
}

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "shelbyarmor",
      image_url:
        "https://images-prod.anothermag.com/2320/azure/another-prod/360/0/360377.jpg",
      image_alt: "Midcentury modern Architecture in Palm Springs, California",
      likes: 272,
      timestamp: "1hr",
    },
    {
      user: "sydneyarmor",
      image_url:
        "https://images.ctfassets.net/r7p9m4b1iqbp/1HIXQ8KtpBvkuwp7G3piLG/f5791917fdfe45b9ccc98926e0b9c6f6/Stephen-Dagley-Austria-Hut-Hiking-Fieldmag-10.jpg?w=1000",
      image_alt: "Austrian Alps",
      likes: 86,
      timestamp: "7h",
    },
    {
      user: "johnarmor",
      image_url:
        "https://designwanted.com/wp-content/uploads/2022/02/Natuzzi-14-scaled.jpg",
      image_alt: "Natuzzi Living Room",
      likes: 1234,
      timestamp: "12hr",
    },

    {
      user: "mariokoppe",
      image_url:
        "https://i.pinimg.com/originals/a6/2b/46/a62b4654de0ad6111f3a02d8ad5a0226.png",
      image_alt: "Man Mountain Biking",
      likes: 104,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post: PostProps) => (
            <Post
              key={post.user} // o/w, warning that each child in list should have unique 'key' prop
              user={post.user}
              image_url={post.image_url}
              image_alt={post.image_alt}
              timestamp={post.timestamp}
              likes={post.likes}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
