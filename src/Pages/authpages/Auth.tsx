import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

interface Props {
}

const Auth: FC<Props> = (props) => {
    return (
        <div>
            <Switch>
                <Route path="/signup">
                    <SignupPage></SignupPage>
                </Route>
                <Route path="/login">
                    <LoginPage></LoginPage>
                </Route>
            </Switch>
        </div>
    );
};

Auth.defaultProps = {}

export default memo(Auth);