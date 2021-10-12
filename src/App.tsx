import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from './Components/HomeComponents/Footer';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';

function App() {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LoginPage></LoginPage>
                </Route>
                <Route path="/home">
                    <HomePage></HomePage>
                </Route>
                <Route path="/signup">
                    <SignupPage></SignupPage>
                </Route>
                <Route path="/footer">
                    <Footer></Footer>
                </Route>

                    
            </Switch>
            </BrowserRouter>
        </div>

    );
}
export default App;