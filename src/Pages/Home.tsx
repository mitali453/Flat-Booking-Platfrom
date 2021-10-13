import {FC, memo} from "react";
import Card from "../Components/HomeComponents/Card";
import Card2 from "../Components/HomeComponents/Card2";
import Overview from "../Components/HomeComponents/Overview";
interface Props{
}
const Home: FC<Props> = (props) =>{
return (
 <>
 <Card></Card>
 <Card2></Card2>
 <Overview></Overview>
 
 </>
);
};
Home.defaultProps={
}
export default memo(Home);