import logo from './logo.svg';
import './App.css';
import {connect, Provider} from "react-redux";
import store from "./Redux/redux-store";
import { compose } from 'redux';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}
const mapStateToProps = (state) => (
  {initialized: state.app.initialized})

let AppContainer = compose(
  connect(mapStateToProps, {}))(App)

const LastFrontApp = () => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
          <AppContainer/>
      </Provider>
  </BrowserRouter>
}
export default App;
