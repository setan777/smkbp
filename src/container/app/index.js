import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/home";
import Register from "../pages/register";

function App() {
  return (
    <Router>
      <Route path="/smkbp" exact component={Home} />
      <Route path="/wkwk" component={Register} />
    </Router>
  );
}

export default App;
