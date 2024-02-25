import React, { useState, useEffect } from "react";
import "./events.css";
import { img1 } from "../../Assets";
import { img2 } from "../../Assets";
import { img3 } from "../../Assets";
import { img4 } from "../../Assets";

function Events() {
  const carouselItems = [
    {
      image: img1,
      title: "OUR EVENTS",
      topic: "AD MAD SHOW",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    },
    {
      image: img2,
      title: "OUR EVENTS",
      topic: "BIZ-TANK",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    },
    {
      image: img3,
      title: "OUR EVENTS",
      topic: "BUILD-A-THON",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    },
    {
      image: img4,
      title: "OUR EVENTS",
      topic: "IDEATHON",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    },
  ];

  const thumbnailItems = [
    {
      image: img1,
      title: "OUR EVENTS",
      topic: "AD MAD SHOW",
    },
    {
      image: img2,
      title: "OUR EVENTS",
      topic: "BIZ TANK",
    },
    {
      image: img3,
      title: "OUR EVENTS",
      topic: "BUILD-A-THON",
    },
    {
      image: img4,
      title: "OUR EVENTS",
      topic: "IDEATHON",
    },
  ];
  useEffect(() => {
    let nextDom = document.getElementById("next");
    let prevDom = document.getElementById("prev");

    let carouselDom = document.querySelector(".carousel");
    let SliderDom = carouselDom.querySelector(".carousel .list");
    let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");

    // thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 1000;
    let timeAutoNext = 5000;

    nextDom.onclick = function () {
      showSlider("next");
    };

    prevDom.onclick = function () {
      showSlider("prev");
    };
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      next.click();
    }, timeAutoNext);
    function showSlider(type) {
      let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
      let thumbnailItemsDom = document.querySelectorAll(
        ".carousel .thumbnail .item"
      );

      if (type === "next") {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom.classList.add("prev");
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        next.click();
      }, timeAutoNext);
    }
  }, []);

  return (
    <body>
      <div className="carousel">
        <div className="list">
          {carouselItems.map((item, index) => (
            <div className={`item`} key={index}>
              <img src={item.image} alt={`Image ${index}`} />
              <div className="content">
                <div className="author">E-FEST 6.0</div>
                <div className="title">{item.title}</div>
                <div className="topic">{item.topic}</div>
                <div className="des">{item.description}</div>
                <div className="buttons">
                  <button>REGISTER NOW</button>
                  <button>VIEW DETAILS</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="thumbnail">
          {thumbnailItems.map((item, index) => (
            <div className={`item`} key={index}>
              <img src={item.image} alt={`Thumbnail ${index}`} />
              <div className="content">
                <div className="title">EFEST 6.0</div>
                <div className="description">{item.topic}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button id="prev">{`<`}</button>
          <button id="next">{`>`}</button>
        </div>
      </div>
    </body>
  );
}

export default SectionWrapper(Events, "events");
