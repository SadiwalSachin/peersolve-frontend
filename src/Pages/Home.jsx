import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-zinc-800 px-2 sm:px-0 h-[90vh] flex flex-col items-center gap-y-4">
      <h1 className="sm:text-5xl text-2xl text-center mt-8 font-semibold">
      Got a Question? Get It Solved by Fellow Students!
      </h1>
      <h2 className="mt-6 text-center font-semibold sm:text-xl sm:w-1/2 items-center">
      A peer-to-peer doubt-solving platform where students help each other grow. Raise your questions, connect with knowledgeable peers, and boost your understanding.
      </h2>

      <div className="sm:flex-row sm:flex flex flex-col items-center justify-center sm:gap-x-10 mt-5 sm:mt-0 gap-y-5">
      <Link to="/create-ticket" className="btn btn-md sm:btn-md md:btn-md lg:btn-lg xl:btn-xl sm:mt-10  btn-primary w-full">Ask a Doubt</Link>
      <Link to="/create-ticket" className="btn btn-md sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl sm:mt-10  btn-primary w-full">View Your Doubts</Link>
      </div>
    </div>
  );
}

export default Home;
