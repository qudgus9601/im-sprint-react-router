import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import "./App.css";

const Home = () => {
  return <div className="body__title">Home</div>;
};

const MyPage = () => {
  return <div className="body__title">Mypage</div>;
};

const DashBoard = () => {
  return <div className="body__title">Dashboard</div>;
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
      </div>
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
    </BrowserRouter>
  );
}

export default App;
