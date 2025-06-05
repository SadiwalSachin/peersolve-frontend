import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-zinc-800 h-[90vh] flex flex-col items-center gap-y-4">
      <h1 className="text-5xl text-center mt-8 font-semibold">
      Got a Question? Get It Solved by Fellow Students!
      </h1>
      <h2 className="mt-6 text-center font-semibold text-xl w-1/2 items-center">
      A peer-to-peer doubt-solving platform where students help each other grow. Raise your questions, connect with knowledgeable peers, and boost your understanding.
      </h2>

      <div className="flex items-center justify-center gap-x-10">
      <Link to="/create-ticket" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mt-10  btn-primary w-full">Ask a Doubt</Link>
      <Link to="/create-ticket" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mt-10  btn-primary w-full">View Your Doubts</Link>
      </div>
    </div>
  );
}

export default Home;
