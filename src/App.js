import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import logoProbono from './img/logo-probono.png';
import SentencasComponent from './componentes/sentencasComponent/SentencasComponent';
import { FormDispositivoComponent } from './componentes/formComponent/FormComponents';

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <Link to="/"><img className="logo" src={logoProbono} alt="probono" /></Link>
        </header>
        <Switch>
          <Route exact path="/" component={SentencasComponent} />
          <Route path="/create/dispositivo" component={FormDispositivoComponent} />
          <Route path="/create/" component={FormDispositivoComponent} />
        </Switch>
      </div>
    );
  }
}

export default App;
