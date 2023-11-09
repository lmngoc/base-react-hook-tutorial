import logo from './logo.svg';
import './App.scss';
import ToDoList from './components/ToDoList';
import AddNewProduct from './components/AddNewProduct';
import Product from './components/Products/Product';
import 'react-image-lightbox/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './components/Navigation/Nav';
import Weather from './components/Weather/Weather';
import OTP from './components/OTP/OTP';
function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <div className="App">
            <header className="App-header content-left">
              <div style={{ textAlign: "center" }} >
                <img src={logo} className="App-logo" alt="logo" />
              </div>

              <p>
                Hello world React with Ngoc
              </p>
              <ToDoList />

            </header>
            <div className='content-right'>
              <AddNewProduct />
              <hr />
              <Product />
            </div>
          </div>
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/about">
          <div>about content</div>
        </Route>
        <Route path="/otp">
          <OTP />
        </Route>
        <Route path="*">
          <div>404 not found</div>
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
