import './App.css';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Intro from "./components/intro";
import Countries from './components/Countries/Countries.jsx';
import Country from './components/Country/Country'
import Activities from './components/Activities/Activities';
import CreateActivity from './components/Activities/CreateActivity';




function App() {
  return (
    <div className="App">
      {/* <h1>Henry Countries</h1> */}
      <Route exact path = "/"><Intro/></Route>
      {/* <Route path="/countries"><NavBar/></Route> */}
      <Route exact path = "/countries"><Countries/></Route>
      <Route exact path="/countries/:id" ><Country/></Route>
      <Route exact path={`/activity`}><NavBar/></Route>
      <Route exact path={`/activity`}><Activities/></Route>
      <Route exact path={`/activity/create`}><CreateActivity/></Route>
      {/* <Route exact path={`/activity/:${id}`}></Route> */}
    </div>
  );
}

export default App;
