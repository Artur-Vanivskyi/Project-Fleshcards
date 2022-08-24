import React, { useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";

function AddCard() {
  const history = useHistory();
  const [newCard, setNewCard] = useState({});
  const [deckName, setDeckName] = useState([]);
  const { deckId } = useParams();

  useEffect(() => {
    async function fetchDecks() {
      const data = await readDeck(deckId);
      //console.log(data)
      setDeckName(data);
    }
    fetchDecks();
  }, [deckId]);

  async function saveHandler(event) {
    event.preventDefault();
    const data = await createCard(newCard);
    //console.log(data);
    history.push(`/decks/${data.id}`);
    setNewCard({});
  }
  function handleFrontChange(event) {
    setNewCard({ ...newCard, front: event.target.value });
  }

  function handleBackChange(event) {
    setNewCard({ ...newCard, back: event.target.value });
  }
console.log("newcard" , newCard)
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="deckId">{deckName.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
      <h1>{deckName.name}: Add Card</h1>
      <form OnSumbit={saveHandler}>
        <label htmlFor="front">Front</label>
        <textarea
          className="form-control"
          id="front"
          rows="3"
          placeholder="Front side of card"
          OnChange={handleFrontChange}
        ></textarea>
        <label htmlFor="back">Back</label>
        <textarea
          className="form-control"
          id="back"
          rows="3"
          placeholder="Back side of card"
          OnChange={handleBackChange}
        ></textarea>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => history.push(`/decks/${deckId}`)}
        >
          Done
        </button>
        <button type="button" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}

export default AddCard;
