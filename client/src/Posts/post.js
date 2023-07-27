import React, { useState, useEffect } from "react";
import NavBar from "../navbar";
import Fotter from "../footer";
import Styles from "./post.module.css";
import SinglePost from "./singlePost";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";
import Styles_2 from "../MembershipsComponents/members.module.css";
// importing all the css for loader
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Posts() {
  const location = useLocation();
  const [loading, isLoading] = useState(false);
  const [posts, setPosts] = useState({ singlePost: [] });
  // useEffect(() => {
  //   let data =
  //     location.category === undefined &&
  //     location.author === undefined &&
  //     location.tag === undefined &&
  //     location.name === undefined ? (
  //       axios
  //         .get("https://gymhut.herokuapp.com/posts")
  //         .then((response) => {
  //           setPosts({ singlePost: response.data });
  //           isLoading(true);
  //         })
  //         .catch((error) => {
  //           console.log("error is :", error);
  //         })
  //     ) : location.tag !== undefined ? (
  //       // retrieving the posts with same Tags
  //       axios
  //         .get(`https://gymhut.herokuapp.com/posts/tags/${location.tag}`)
  //         .then((response) => {
  //           setPosts({ singlePost: response.data });
  //           isLoading(true);
  //         })
  //         .catch((error) => {
  //           console.log("error is :", error);
  //         })
  //     ) : location.category !== undefined ? (
  //       // retrieving the posts with same Category
  //       axios
  //         .get(
  //           `https://gymhut.herokuapp.com/posts/category/${location.category}`
  //         )
  //         .then((response) => {
  //           setPosts({ singlePost: response.data });
  //           isLoading(true);
  //         })
  //         .catch((error) => {
  //           console.log("error is :", error);
  //         })
  //     ) : location.name !== undefined ? (
  //       // retrieving the posts with specific name
  //       axios
  //         .get(
  //           `https://gymhut.herokuapp.com/posts/findPost?findPost=${location.name}`
  //         )
  //         .then((response) => {
  //           setPosts({ singlePost: response.data });
  //           isLoading(true);
  //         })
  //         .catch((error) => {
  //           console.log("error is :", error);
  //         })
  //     ) : (
  //       <div></div>
  //     );
  // }, []);

  const singlePost = [
    {
      id: 12,
      name: "Nothing worse than a teen breakup, but lifting weights made me wanted by all",
      description: "Not to brag but how I look today was not the story back in high school, we all know what bullying is but I was never bullied to be honest, I hung out with the best crowd, but whenever a joke was made it was hard for me to always bounce back I will not lie it did get on my nerves but I was like whatever okay. Eventually the girl I had been seeing since 9th standard left me in 12th standard which was a shock not only to be but my friends too. Would you believe what she told me before our breakup? 'You are too skinny to look after me, and we are now in an age where we will get married, I don't wanna be called a matchsticks wife'. And I cannot tell you, how it boosted my way to the gym and obviously with a little help from my friends and family I now have 16 in biceps.",
      pubDate: "Nov, 2 2020",
      author: "Johne Doe",
      authorTitle:
        "Harper has worked as a personal trainer for celebrity clients, including Jennifer Jason Leigh.[1] In 1999",
      authorId: "1",
      tags: ["Sasf", "asf", "asf"],
      category: "asfsa",
      no: "1",
      quote: "You have to think about it before you can do it.",
      blogImage:
        "https://cdn.tinybuddha.com/wp-content/uploads/2016/05/Woman-letting-go.png",
      
    },
    {
      id: 13,
      name: "Depression made it impossible to live but exercising brought me back to life",
      description: "My work-life, social-life was all going to hell, eventually I had to find something to make myself feel worthy or let’s just call it a diversion. But eventually I did hear my friends talk about their 'sessh of workouts' and I thought I have got nothing to lose and I gave it a go. At first it was uncomfortable, felt weird and even I was at a place where I didn't feel like continuing but I have a habit of looking myself into the mirror, and I felt a change and I thought why not just continue to do something and I found my love and happiness in exercise. It wasn't as easy as this paragraph but I did find my way to it ",
      pubDate: "Nov, 2 2020",
      author: "Johne Doe",
      authorTitle:
        "Harper has worked as a personal trainer for celebrity clients, including Jennifer Jason Leigh.[1] In 1999",
      authorId: "1",
      tags: ["Sasf", "asf", "asf"],
      category: "asfsa",
      no: "1",
      quote: "You have to think about it before you can do it.",
      blogImage:
        "https://images.everydayhealth.com/images/great-exercises-to-ease-depression-00-1440x810.jpg?w=768",
    },
    {
      id: 14,
      name: "From Struggle to Strength: A Journey of Triumph",
      description: "In the depths of despair, Mark found solace in the gym. He was overweight, out of shape, and battling personal demons. Determined to change his life, he embarked on a transformative fitness journey. Every day, he faced grueling workouts, pushed his limits, and refused to give in to self-doubt. As the pounds melted away, so did his insecurities. With each rep and every drop of sweat, Mark grew stronger physically and mentally. He discovered a newfound passion for fitness and embraced a healthier lifestyle. Today, he stands as a symbol of perseverance, inspiring others to turn their struggles into strength.",
      pubDate: "Nov, 2 2020",
      author: "Johne Doe",
      authorTitle:
        "Harper has worked as a personal trainer for celebrity clients, including Jennifer Jason Leigh.[1] In 1999",
      authorId: "1",
      tags: ["Sasf", "asf", "asf"],
      category: "asfsa",
      no: "1",
      quote: "You have to think about it before you can do it.",
      blogImage:
        "https://w0.peakpx.com/wallpaper/902/64/HD-wallpaper-all-gym-motivation-thumbnail.jpg",
    },
    {
      id: 15,
      name: "Redefining Limits: A Story of Unbreakable Spirit",
      description: "In the face of adversity, Sarah defied all odds. Paralyzed from the waist down after a life-altering accident, she refused to let her dreams wither away. With unwavering determination, Sarah embarked on a remarkable fitness journey. Through countless hours of rehabilitation, she built strength where others saw weakness. Adaptation became her mantra as she pushed beyond her limitations, embracing new forms of exercise. Each milestone surpassed became a victory against her circumstances. Sarah's unbreakable spirit inspired everyone around her, reminding them that the power to conquer any obstacle lies within. Her story proves that with passion and resilience, true strength knows no bounds",
      pubDate: "Nov, 2 2020",
      author: "Johne Doe",
      authorTitle:
        "Harper has worked as a personal trainer for celebrity clients, including Jennifer Jason Leigh.[1] In 1999",
      authorId: "1",
      tags: ["Sasf", "asf", "asf"],
      category: "asfsa",
      no: "1",
      quote: "You have to think about it before you can do it.",
      blogImage:
        "https://miro.medium.com/v2/resize:fit:826/1*wKisR-9FsWEy1jsHtbWxaw.jpeg",
    },
  ];
  return loading === true ? (
    <div style={{ backgroundColor: " rgb(237, 237, 237)" }}>
      <div className={Styles.grid}>
        <NavBar />
        <div className={Styles.mainGrid}>
          <div style={{ gridRow: "1" }}></div>
          <div className={Styles.boxContent}>
            <h3
              style={{
                fontSize: "1.3vw",
                color: "maroon",
                fontFamily: '"Oswald", sans-serif',
              }}
            >
              Our Blogs
            </h3>
            <h3 style={{ fontFamily: '"Oswald", sans-serif' }}>
              Blog Articles
            </h3>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "3vw",
          textAlign: "center",
          fontSize: "2vw",
          fontWeight: "bold",
          marginBottom: "3vw",
        }}
      >
        Loading&nbsp;&nbsp;&nbsp;
        <span>
          <Loader
            style={{ marginTop: "1vw" }}
            type="Bars"
            color="#00BFFF"
            height={50}
            width={70}
            timeout={1000000} //1000 secs
          />
        </span>
      </div>
      <Fotter />
    </div>
  ) : (
    <div style={{ backgroundColor: " rgb(237, 237, 237)" }}>
      <div className={Styles.grid}>
        <NavBar />
        <div className={Styles.mainGrid}>
          <div style={{ gridRow: "1" }}></div>
          <div className={Styles.boxContent}>
            <h3
              style={{
                fontSize: "1.3vw",
                color: "maroon",
                fontFamily: '"Oswald", sans-serif',
              }}
            >
              Our Blogs
            </h3>
            <h3 style={{ fontFamily: '"Oswald", sans-serif' }}>
              Blog Articles
            </h3>
          </div>
        </div>
      </div>
      <div className={Styles_2.imageCatalog}>
        <div className={Styles_2.imageborderTop}>___</div>
        <div className={Styles_2.imageHeading}>Popular Blogs</div>
        <div className={Styles_2.imageSub_heading}>
          Get insights of our top most rated professionals
        </div>
      </div>
      <div className={Styles.posts}>
        {singlePost.map(
          ({
            id,
            name,
            quote,
            description,
            pubDate,
            author,
            tags,
            category,
            no,
            blogImage,
          }) => (
            <SinglePost
              key={id}
              date={pubDate}
              author={author}
              heading={name}
              description={description}
              post={no}
              tags={tags}
              quote={quote}
              category={category}
              blogImage={blogImage}
            ></SinglePost>
          )
        )}
      </div>

      <Fotter />
    </div>
  );
}
