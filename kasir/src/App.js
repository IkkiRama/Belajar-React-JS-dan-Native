import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Sukses from "./pages/Sukses";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sukses">
            <Sukses />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
