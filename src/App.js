import { HashRouter, Route } from "react-router-dom";
import Home from './componets/Home';

const App = () =>{
  return(
    <HashRouter>
      <Route exact path ='/' component={Home}/>
    </HashRouter>
  )
}

export default App;
