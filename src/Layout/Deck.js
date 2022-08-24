import { readDeck, listDecks, deleteDeck } from "../utils/api/index";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Deck({deck}) {
  const history = useHistory();

  const [decks, setDecks] = useState([]);

  function handleDelete(deckId){
    if(!window.confirm("Delete this deck? You will not be able to recover it.")){
  return;
    }
    deleteDeck(deckId);
    history.push("/");
    window.location.reload(false);
  }
  console.log(decks)

  function handleView(deckId){
    history.push(`/decks/${deckId}`);
  }
  
  function handleStudy(deckId){
    history.push(`/decks/${deckId}/study`);
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Deck name
          </li>
        </ol>
      </nav>
      <h3>Deck name</h3>
      <h5>Deck description</h5>
      <button type="button" class="btn btn-secondary" onClick={()=>handleView(deck.id)}>
        View
      </button>
      <button type="button" class="btn btn-primary" onClick={()=>handleStudy(deck.id)}>
        Study
      </button>
      {/* <button type="button" class="btn btn-primary">
        Add Cards
      </button> */}
      <button type="button" class="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Deck;
