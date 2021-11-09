import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from './Pages/authpages/WelcomePage';
import Auth from './Pages/authpages/Auth';
import AppContainer from './Pages/appContainer/AppContainer';

function App() {

    return (

        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <WelcomePage></WelcomePage>
                    </Route>
                    <Route path={["/login", "/signup"]} exact>
                        <Auth></Auth>
                    </Route>
                    <Route path={["/DashBoard", "/search", "/searchResult", "/profile"]}>
                        <AppContainer></AppContainer>
                    </Route>

                </Switch>
            </BrowserRouter>
        </div>


    );
}
export default App;