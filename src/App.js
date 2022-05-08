import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import "./App.css";

const Home = () => {
  return "Home";
};

const MyPage = () => {
  return "Mypage";
};

const DashBoard = () => {
  return "Dashboard";
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="nav__container">
          <ul className="nav__wrapper">
            <li className="nav__btn">
              <Link to="/">Home</Link>
            </li>
            <li className="nav__btn">
              <Link to="/mypage">MyPage</Link>
            </li>
            <li className="nav__btn">
              <Link to="/dashboard">DashBoard</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <div className="body__title">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/mypage">
              <MyPage />
            </Route>
            <Route path="/dashboard">
              <DashBoard />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
