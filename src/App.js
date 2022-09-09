import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from "./pages/Home/Home"
import Create from "./pages/Create/Create"
import Blog from "./pages/Blog/Blog"
import Search from "./pages/Search/Search"

import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blogs/:id">
            <Blog/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
