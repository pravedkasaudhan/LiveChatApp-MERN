import './App.css';
import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
