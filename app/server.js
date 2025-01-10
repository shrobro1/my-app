// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/flashcards", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const deckSchema = new mongoose.Schema({
  school: String,
  class: String,
  topic: String,
  cards: [{ sideA: String, sideB: String }],
});

const Deck = mongoose.model("Deck", deckSchema);

// Create a new deck
app.post("/decks", async (req, res) => {
  const deck = new Deck(req.body);
  await deck.save();
  res.status(201).send(deck);
});

// Get all decks
app.get("/decks", async (req, res) => {
  const decks = await Deck.find();
  res.send(decks);
});

// Get a specific deck
app.get("/decks/:id", async (req, res) => {
  const deck = await Deck.findById(req.params.id);
  res.send(deck);
});

// Update a deck
app.put("/decks/:id", async (req, res) => {
  const deck = await Deck.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(deck);
});

// Delete a deck
app.delete("/decks/:id", async (req, res) => {
  await Deck.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
