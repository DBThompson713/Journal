import React, { Component } from "react";
import HomePage from "./pages/homePage";
import CategorySelectionPage from "./pages/categorySelectionPage";
import NewEntryPage from "./pages/newEntryPage";

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <NewEntryPage />
        <CategorySelectionPage />
      </div>
    );
  }
}

export default App;
