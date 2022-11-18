import React from "react";
import { Footer } from "../Components/Footer";
import { Header2 } from "../Components/Header2";
import "../Pages/css/Products.css";
import { Profile } from "../Components/Profile";
import bigpic from "../Pages/pic/products/bigpic.png";
import { Profile2 } from "../Components/Profile2";
import profilepic2 from "../Pages/pic/products/profilepic2.png";
import { Comment } from "../Components/Comment";
import { useState } from "react";

export const Products = () => {
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([]);

  return (
    <div className="productsbigdiv">
      <Header2 />
      <div
        style={{ height: 50, background: "transparent", width: "100vw" }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h1 className="productstitle">
          10 Secrets for managing a remote team{" "}
        </h1>
        <Profile name="Shedrack eze" date="2nd January,2022" />
      </div>
      <img src={bigpic} style={{ width: 900, height: 450 }} alt="" />
      <div>
        <p className="productsdesc">
          If you’re thinking of starting a blog of your own, but just don’t have
          a clue on what to blog about, then fear not!
        </p>
        <p className="productsdesc">
          In this article, I have included a whole load of blog examples from a
          wide variety of different niches, all run on different blogging
          platforms like WordPress, Joomla! and Drupal.
        </p>
        <p className="productsdesc">
          Since the beginning of the internet, millions and millions and
          millions of blogs have been created. Many have died due to lost
          interest or their owners giving up on the idea, while others have
          thrived and continue to grow, making money and earning their owners a
          steady income. It’s a constant evolution of content that keeps people
          coming back for more, especially if these blogs contact highly
          resourceful material that people find useful and interesting.
        </p>
        <p className="productsdesc">
          Each example listed in this blog post are all different in some way
          and all bring something unique to their readers & subscribers. I want
          to show you what is possible and how you can take inspiration from
          them and create an awesome blog of your own.
        </p>
        <p className="productsdesc">
          Some of these blogs make over $100k a month, others are just a hobby
          for their owners, but all have the same purpose at their core… the
          love of writing and sharing information.
        </p>
      </div>
      <div style={{ gap: 50, display: "flex", flexDirection: "column" }}>
        <Profile2 name="Shedrack Eze" work="CEO Team App" />
        <div
          style={{
            width: 700,
            height: 2,
            background: "rgb(109, 125, 139, 0.22)",
          }}
        />
        <div>
          <p className="productsconversation">Join the conversation</p>
          <div style={{ display: "flex", gap: 20 }}>
            <img alt="" src={profilepic2} style={{ width: 56, height: 56 }} />
            <input
              className="productsinput"
              placeholder="Comments"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.code === "Enter") {
                  setComments([...comments, input]);
                  setInput("");
                  console.log(comments);
                }
              }}
            />
          </div>
        </div>
        <div
          style={{
            width: 700,
            height: 2,
            background: "rgb(109, 125, 139, 0.22)",
          }}
        />
      </div>
      {comments.map((e, index) => {
        return (
          <Comment
            commentText={e}
            removeComment={() => {
              setComments(comments.filter((_, ind) => ind !== index));
            }}
            key={index}
          />
        );
      })}
      <Footer />
    </div>
  );
};
