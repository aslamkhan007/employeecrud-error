import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Home from "./components/Home";
import Department from "./components/Department";
import Employee from "./components/Employee";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation';



function App() {
 
  return ( 
  
    
    // className="banner"
    // style={{
    //   backgroundSize: "cover",
    //   backgroundImage: `url("https://image.tmdb.org/t/p/original/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg")`,
    //   backgroundPosition: "center center",
    // }}
  
   
    <BrowserRouter>
      <div className="App">
        <h3 className= "mt-3 d-flex justify-content-center ">React js with api</h3>
        <h5 className= "mt-3 d-flex justify-content-center ">React js with api Employee Manegment</h5>
        <Navigation/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/department" component={Department} />
          <Route path="/employee" component={Employee} />
        </Switch>
      </div>
    </BrowserRouter>
  

    
  );
}

export default App;
