import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { createDeck } from "../utils/api/index";

function CreateDeck() {
  const [newDeck, setNewDeck] = useState({});
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    //console.log("newDeck", newDeck)
    const response = await createDeck(newDeck);
    history.push(`/decks/${response.id}`);
  }
  const handleCancel = (event) => {
    event.preventDefault();
    history.push("/");
  };

  const handleNameChange = (event) => {
    setNewDeck({ ...newDeck, name: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setNewDeck({ ...newDeck, description: event.target.value });
  };

  return (
    <React.Fragment>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <h1> Create Deck</h1>

      <form name="create">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Deck Name"
            required
            onChange={handleNameChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="Textarea">Description</label>
          <textarea
            className="form-control"
            id="Textarea"
            rows="3"
            placeholder="Brief description of the deck"
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
}

export default CreateDeck;
