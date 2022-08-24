import React from "react";
import { useHistory } from "react-router-dom";

function NotEnoughCards({ deck }) {
  const history = useHistory();

  function handleAddCard(event) {
    event.preventDefault();
    history.push(`/decks/{deck.id}/cards/new`);
  }
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href="/">{deck.name}</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
      <h1>{deck.name}: Study</h1>
      <h2>Not enough cards.</h2>
      <p>You need at least 3 cards to study. There are 2 cards in this deck.</p>
      <button className="btn btn-primary" type="button" onClick={handleAddCard}>
        Add Cards
      </button>
    </div>
  );
}

export default NotEnoughCards;
