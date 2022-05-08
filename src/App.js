import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import "./App.css";

const Home = () => {
  return <div>Home</div>;
};

const MyPage = () => {
  return <div>Mypage</div>;
};

const DashBoard = () => {
  return <div>Dashboard</div>;
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mypage">MyPage</Link>
            </li>
            <li>
              <Link to="/dashboard">DashBoard</Link>
            </li>
          </ul>
        </nav>
        <hr />
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
    </BrowserRouter>
  );
}

export default App;
