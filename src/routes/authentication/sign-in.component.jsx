import SignInContainer from "../../components/sign-in-container/sign-in-container.component"
import SignUpContainer from "../../components/sign-up-container/sign-up-container.component"

import "./sign-in.container.scss"

const SignIn = () => {

    return (
        <div className="authen-container">
            <SignInContainer />
            <SignUpContainer />
        </div>
    )
}

export default SignIn