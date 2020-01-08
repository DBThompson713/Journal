import React, { Component } from "react";
import HomePage from "./pages/homePage";
import CategorySelectionPage from "./pages/categorySelectionPage";
import NewEntryPage from "./pages/newEntryPage";
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  state = { categories: ["Personal", "Travel", "Dating"] };

  render() {
    const { categories } = this.state;
    return (
      <div>
        <BrowserRouter>
          <>
            <Link to="/"> Home </Link>
            <Link to="/entry"> New Entry </Link>
            <Link to="/category"> Category Selection </Link>

            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/category"
              render={props => {
                return (
                  <CategorySelectionPage {...props} categories={categories} />
                );
              }}
            />
            <Route exact path="/entry" component={NewEntryPage} />
          </>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
