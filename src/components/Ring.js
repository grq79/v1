import { CodeIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
require("dotenv").config();

const headers = {
  Accept: "application/json",
  Authorization: `Bearer ${process.env.REACT_APP_RING_API}`,
};

const Ring = () => {
  const [counter, setCounter] = useState(0);
  const [quote, setQuote] = useState("");
  const [character, setCharacter] = useState("");

  const fetchData = async () => {
    if (counter === 10) {
      return;
    }
    try {
      const rawQuotes = await fetch("https://the-one-api.dev/v2/quote", { headers });
      const quotes = await rawQuotes.json();

      if (!quotes.docs) {
        throw new Error("No quotes found");
      }

      const randomQuote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
      setQuote(randomQuote.dialog);

      const rawCharacters = await fetch(
        `https://the-one-api.dev/v2/character?_id=${randomQuote.character}`,
        {
          headers,
        }
      );
      const characters = await rawCharacters.json();

      if (!characters.docs) {
        throw new Error("No characters found");
      }

      const randomCharacter = characters.docs[0];
      setCharacter(randomCharacter.name);
      setCounter(counter + 1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <div className="flex flex-col w-full mb-20">
        <CodeIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          The One and Only Ring
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Here is a fun Restful API integration, using the fetch command that
          authenticates a key from .env file.
        </p>
      </div>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Quote: {quote}</p>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Character: {character}</p>
      <button onClick={fetchData} className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
        Fetch Data
      </button>
    </div>
  );
};

export default Ring;
