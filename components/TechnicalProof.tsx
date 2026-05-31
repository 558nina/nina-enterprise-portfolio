"use client";

import { useState } from "react";
import VideoCard from "./VideoCard";

const videos = [
  {
    category: "Cloud & DevOps",
    title: "How Modern CI/CD Pipelines Work",
    duration: "5 mins",
    level: "Beginner",
    description:
      "A beginner-friendly walkthrough of GitHub, build pipelines, deployment workflows and how modern teams release software safely.",
  },
  {
    category: "Cloud & DevOps",
    title: "Cloud Migration Fundamentals",
    duration: "7 mins",
    level: "Beginner",
    description:
      "Explaining cloud migration risks, planning, governance, stakeholder alignment and the delivery considerations behind successful transformation.",
  },
  {
    category: "AWS",
    title: "AWS Core Services Explained",
    duration: "8 mins",
    level: "Beginner",
    description:
      "A simple explanation of EC2, S3, IAM and monitoring concepts for delivery leaders working with cloud engineering teams.",
  },
  {
    category: "Cyber Security",
    title: "Understanding Identity & Access Management",
    duration: "6 mins",
    level: "Beginner",
    description:
      "An accessible introduction to authentication, authorisation, least privilege and governance in enterprise IAM programmes.",
  },
  {
    category: "Cyber Security",
    title: "Security in Agile Delivery",
    duration: "6 mins",
    level: "Intermediate",
    description:
      "How security, risk and compliance can be integrated into Agile delivery through DevSecOps and shift-left practices.",
  },
  {
    category: "Delivery Excellence",
    title: "Forecasting Agile Delivery",
    duration: "7 mins",
    level: "Intermediate",
    description:
      "A practical explanation of velocity, throughput, forecasting and stakeholder reporting for Agile delivery teams.",
  },
];

const filters = [
  "All",
  "Cloud & DevOps",
  "AWS",
  "Cyber Security",
  "Delivery Excellence",
];

export default function TechnicalProof() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredVideos =
    activeFilter === "All"
      ? videos
      : videos.filter((video) => video.category === activeFilter);

  return (
    <section id="technical" className="bg-[#0B0F1A] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Technical Proof
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Technical Leadership & Delivery Understanding
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Practical demonstrations of cloud, DevOps, cyber security and Agile
            delivery concepts that support successful enterprise transformation.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeFilter === item
                  ? "border-cyan-300 bg-cyan-400 text-slate-950"
                  : "border-cyan-400/20 bg-cyan-400/5 text-cyan-200 hover:border-cyan-300/50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video) => (
            <VideoCard key={video.title} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
}