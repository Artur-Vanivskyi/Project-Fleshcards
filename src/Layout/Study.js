import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import CardList from "./CardList";

function Study() {
  const [deckName, setDeckName] = useState([]);

  const params = useParams();
  const deckId = params.deckId;

  useEffect(() => {
    //console.log("inside useE")
    async function fetchDecks() {
      //  console.log("line 12")
      const data = await readDeck(deckId);
     // console.log("data", data)
      setDeckName(data);
    }
    fetchDecks();
  }, [deckId]);


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
      <h1>Study: {deckName.name}</h1>
      <CardList deckName={deckName} />
    </div>
  );
}

export default Study;
