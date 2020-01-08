import React, { Component } from "react";
import { Link } from "react-router-dom";

class CategorySelectionPage extends Component {
  render() {
    const categories = ["Personal", "Travel", "Dating"];
    return (
      <>
        <h1>Whatcha Journalling about today??</h1>
        <ul>
          {categories.map(category => (
            <li>
              <Link to="/entry">{category}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default CategorySelectionPage;
