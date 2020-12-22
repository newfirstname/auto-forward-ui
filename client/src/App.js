import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';

import 'rsuite/dist/styles/rsuite-dark.min.css';
// import 'rsuite/dist/styles/rsuite-default.css';

// pages
import Home from './components/pages/Home.js';
import Login from './components/pages/Login.js';
import New from './components/pages/New.js';
import SingleConnectorPage from './components/pages/SingleConnectorPage.js';
import DeleteConnectorPage from './components/pages/DeleteConnectorPage.js';

import { GlobalProvider } from './context/GlobalState';

function App() {
  const publicUrl = process.env.PUBLIC_URL;
  
  return (
    <div>
      <GlobalProvider>
        <BrowserRouter>
          <>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path={`${publicUrl}/`} component={Home} />
                <Route exact path={`${publicUrl}/login`} component={Login} />
                <Route exact path={`${publicUrl}/new`} component={New} />
                <Route exact path={`${publicUrl}/connectors/:id`} component={SingleConnectorPage} />
                <Route exact path={`${publicUrl}/connectors/:id/delete`} component={DeleteConnectorPage} />
                <Route exact path={`${publicUrl}/how-to-get-password`} component={New} />
              </Switch>
            </div>
          </>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
