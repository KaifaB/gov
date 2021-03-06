//Dependencies 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './CSS/App.css';
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"

import Home from "./Pages/Home"
import News from "./Pages/News"
//data for props
import { GridData } from './Data/GridData'

function App() {
  return (
    <div>
      <Router>
        <Route component={Nav} />
        <Route path="/" exact>
          <Home GridData={GridData}/>
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route component={Footer} />
      </Router>
    </div>
  )
}

export default App;

