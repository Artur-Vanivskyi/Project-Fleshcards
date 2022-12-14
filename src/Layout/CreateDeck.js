import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useState } from "react";
import { createDeck } from "../utils/api/index";

function CreateDeck() {
  const [newDeck, setNewDeck] = useState({});
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
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
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house-door-fill"
                viewBox="0 2 18 16"
              >
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
              </svg>
              {"Home"}
            </Link>
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
          className="btn btn-secondary mr-2"
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
