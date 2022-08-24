import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import CreateDeck from "./CreateDeck";
import Home from "./Home";
import Deck from "./Deck"
import Study from "./Study";
import AddCard from "./AddCard"

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <Deck />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
         
        </Switch>
      </div>
    </>
  );
}

export default Layout;