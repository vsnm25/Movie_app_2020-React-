import React from 'react';
import { HashRouter, Route} from 'react-router-dom';
import Home from './routes/Home'
import About from './routes/About';
import Detail from './routes/Detail'
import Navigator from './Component/Navigator';

function App(){
  return (
    <HashRouter>
      <Navigator></Navigator>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie/:id" component={Detail}></Route>
    </HashRouter>
  );
}

export default App;