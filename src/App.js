import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import { createBrowserHistory } from 'history';
function App() {
  const histroy = createBrowserHistory();
  return (
   <Router history = {histroy}>
     <Switch>
       <Route path="/" component ={LandingPage} exact={true}/>
     </Switch>
   </Router>
  );
}

export default App;
