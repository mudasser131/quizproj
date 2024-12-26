import React from "react";

const Landingpage = () => {
  return (
    <div className="h-[91vh] flex flex-col justify-center items-center text-gray-800">
      <h1 className="text-6xl font-extrabold mb-6 text-center">
        Welcome to The Quiz Playground!
      </h1>
      <p className="text-2xl mb-8 text-center max-w-3xl">
        Let’s have some fun while learning! Play quizzes, collect stars, and be
        a knowledge hero. Perfect for little champions like you!
      </p>
      <div className="space-y-6">
        <a
          href="/start"
          className="bg-green-500 text-white px-10 py-4 rounded-full shadow-lg mr-2 hover:bg-green-400 font-bold text-lg transition ease-in-out duration-300"
        >
          Start the Fun!
        </a>
        <a
          href="#about"
          className="bg-white text-pink-500 border border-pink-500 px-10 py-4 ml-2 rounded-full shadow-lg hover:bg-pink-100 font-bold text-lg transition ease-in-out duration-300"
        >
          What’s This About?
        </a>
      </div>
      <div id="about" className="mt-16 text-center max-w-lg">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-gray-700">
          The Quiz Playground is a colorful and exciting space for young
          learners. With each quiz, kids can explore new topics, test their
          knowledge, and earn stars to celebrate their achievements!
        </p>
      </div>
    </div>
  );
};

export default Landingpage;
