import {Route, Switch} from 'react-router-dom'
import SimpleTodos from './components/SimpleTodos'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={SimpleTodos} />
    <Route exact path="/culturelinkr_simple_todo/" component={SimpleTodos} />
    <Route component={NotFound} />
  </Switch>
)

export default App