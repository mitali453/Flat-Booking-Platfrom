import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from './Pages/authpages/WelcomePage';
import Auth from './Pages/authpages/Auth';
import AppContainer from './Pages/appContainer/AppContainer';
import ProfilePage from './Pages/appContainer/ProfilePage';

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
                    <Route path={["/DashBoard", "/search", "/searchResult"]}>
                        <AppContainer></AppContainer>
                    </Route>
                    <Route path={["/profile"]} exact>
                        <ProfilePage></ProfilePage>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>


    );
}
export default App;