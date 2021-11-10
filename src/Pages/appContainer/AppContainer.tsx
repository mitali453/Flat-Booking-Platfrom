import { FC, memo, useState } from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NavToggle from "../../Components/DashboardComponents/NavToggle";
import SideNav from "../../Components/DashboardComponents/SideNav";
import DashBoardPage from "./DashBoardPage";
import FormSeller from "./FormSeller";
import ProfilePage from "./ProfilePage";
import SearchPage from "./SearchPage";
import SearchResultPage from "./SearchResultPage";
import UploadApartPage from "./UploadApartPage";
interface Props {
}
const AppContainer: FC<Props> = (props) => {
    const [showSidebar, setShowSideBar] = useState(false);
    return (
        <div>
            <BrowserRouter>
                <NavToggle sideNavToggle={() => setShowSideBar(!showSidebar)}></NavToggle>
                <div className="flex flex-row ">
                    <SideNav Open={showSidebar}></SideNav>
                    <Switch>
                        <Route path="/search">
                            <SearchPage></SearchPage>
                        </Route>
                        <Route path="/searchResult">
                            <SearchResultPage></SearchResultPage>
                        </Route>
                        <Route path="/DashBoard">
                            <DashBoardPage></DashBoardPage>
                        </Route>
                        <Route path="/profile">
                            <ProfilePage></ProfilePage>
                        </Route>
                        <Route path="/formseller">
                            <FormSeller></FormSeller>
                        </Route>
                        <Route path="/uploadapart">
                            <UploadApartPage></UploadApartPage>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};
AppContainer.defaultProps = {
}
export default memo(AppContainer);