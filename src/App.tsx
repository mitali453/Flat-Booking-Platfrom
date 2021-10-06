import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';

function App() {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage></HomePage>
                </Route>
                <Route path="/login">
                    <LoginPage></LoginPage>
                </Route>
                <Route path="/signup">
                    <SignupPage></SignupPage>
                </Route>

                    
            </Switch>
            </BrowserRouter>
        </div>

    );
}
export default App;