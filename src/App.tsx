import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RecipeList from "./Components/Recipes/RecipeList";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/my-recipe-list">My Recipe List</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/my-recipe-list">
            <RecipeList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

function Home() {
  return <h2>Home</h2>;
}

export default App;
