import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

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
//End of 
export default App;