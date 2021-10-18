import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/HomeComponents/Navbar';
import UserReview1 from './Components/SearchComponents/UserReview1';
import DashBoardPage from './Pages/DashBoardPage';
import LoginPage from './Pages/LoginPage';
import SearchPage from './Pages/SearchPage';
import SearchResultPage from './Pages/SearchResultPage';
import SignupPage from './Pages/SignupPage';
import WelcomePage from './Pages/WelcomePage';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <WelcomePage></WelcomePage>
                    </Route>
                    <Route path="/navbar">
                       <Navbar></Navbar>
                    </Route>

                    <Route path="/signup">
                        <SignupPage></SignupPage>
                    </Route>
                    <Route path="/login">
                        <LoginPage></LoginPage>
                    </Route>
                    <Route path="/search">
                        <SearchPage></SearchPage>
                    </Route>
                    <Route path="/searchResult">
                        <SearchResultPage></SearchResultPage>
                    </Route>
                    <Route path="/DashBoard">
                        <DashBoardPage></DashBoardPage>
                    </Route>
                    <Route path="/UserReview1">
                        {/* <UserReview1 image={'https://cdn.pixabay.com/photo/2021/09/15/11/34/woman-6626615__340.jpg'} para={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nesciunt assumenda alias id cum.'} name={'David Alone'} designation={'CEO & Founder'}></UserReview1> */}
                        <UserReview1></UserReview1>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>

    );
}
export default App;