import React, { useEffect,useState} from "react";
import { useHistory } from "react-router-dom";
import { listDecks , deleteDeck} from "../utils/api/index"

function Home() {
  const history = useHistory();

const [decks, setDecks] = useState([]);

useEffect(() =>{
console.log("useEffects runs")
  async function fetchDecks(){
    const data = await listDecks();
    console.log(data)
    setDecks(data)
  }
fetchDecks()
}, []);


  function handleClickCreateDeck(event) {
    event.preventDefault();
    history.push("/decks/new");
  }
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
      <button
        type="button"
        class="btn btn-secondary"
        onClick={handleClickCreateDeck}
      >
        Create Deck
      </button>
      {decks.map((deck) =>(

        <div class="card" >
        <div class="card-body">
          <h5 class="card-title">{deck.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{deck.cards.length} cards</h6>
          <p class="card-text">
            {deck.description}
          </p>
          <button type="button" class="btn btn-secondary" onClick={()=>handleView(deck.id)}>View</button>
          <button type="button" class="btn btn-primary" onClick={()=>handleStudy(deck.id)}>Study</button>
          <button type="button" class="btn btn-danger" onClick={()=>handleDelete(deck.id)}>Trash</button>
        </div>
      </div>
      ))}
      
    </div>
  );
}

export default Home;
