"use client";
import { useState } from "react";
export default function Dashboard() {
  const [cards, setCards] = useState([]);
  const [sideA, setSideA] = useState("");
  const [sideB, setSideB] = useState("");
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showSideA, setShowSideA] = useState(true);
  const addCard = () => {
    if (sideA && sideB) {
      setCards([...cards, { sideA, sideB }]);
      setSideA("");
      setSideB("");
    }
  };

  const nextCard = () => {
    setShowSideA(true);
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
      {/* Section 1: Card Creation */}
      <div className="bg-white shadow-md rounded-xl p-6 max-w-md w-full text-center">
        <h1 className="text-xl font-bold mb-4">Create Flashcards</h1>
        <input
          type="text"
          placeholder="Side A"
          value={sideA}
          onChange={(e) => setSideA(e.target.value)}
          className="border p-2 mb-2 w-full bg-white"
        />
        <input
          type="text"
          placeholder="Side B"
          value={sideB}
          onChange={(e) => setSideB(e.target.value)}
          className="border p-2 mb-4 w-full bg-white"
        />
        <button
          onClick={addCard}
          className="btn btn-primary px-4 py-2 rounded w-full"
        >
          Add Card
        </button>
      </div>
      {/* Section 2: Flashcard Display */}
      {cards.length > 0 && (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full text-center">
          <h2 className="text-lg font-bold mb-4">Tap To Flip</h2>
          <div
            onClick={() => setShowSideA(!showSideA)}
            className="border p-12
             mb-4 cursor-pointer text-black"
          >
            {showSideA
              ? cards[currentCardIndex].sideA
              : cards[currentCardIndex].sideB}
          </div>
          <button
            onClick={nextCard}
            className="btn btn-secondary px-4 py-2 rounded w-full"
          >
            Next Card
          </button>
        </div>
      )}
    </main>
  );
}
