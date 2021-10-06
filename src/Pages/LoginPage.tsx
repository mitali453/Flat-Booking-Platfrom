import {FC, memo} from "react";
interface Props{
}
const LoginPage: FC<Props> = (props) =>{
return (
 <>This is login Page</>
);
};
LoginPage.defaultProps={
}
export {};
export default memo(LoginPage);