import logo from './logo.svg';
import './App.css';
import {connect, Provider} from "react-redux";
import store from "./Redux/redux-store";
import { compose } from 'redux';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Mediacia from './Components/Mediacia/Mediacia';


function App() {
  return (<BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
            <Route exact={true} path={"/"} element={<Main/>}/>
            <Route path="/mediacia" element={<Mediacia />}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
  
}
const mapStateToProps = (state) => (
  {initialized: state.app.initialized})

let AppContainer = compose(
  connect(mapStateToProps, {}))(App)

const LastFrontApp = () => {
  return<>
  <Provider store={store} >
          <AppContainer/>
      </Provider>
      </>

}
export default App;
