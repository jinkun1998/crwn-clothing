import { signInWithGooglePopup } from "../../utils/firebase.utils"
import SignInContainer from "../../components/sign-in-container/sign-in-container.component"

const SignIn = () => {

    const logUser = async () => {
        const response = await signInWithGooglePopup()
        console.log(response)
    }

    return (
        <div>
            <SignInContainer />
        </div>
    )
}

export default SignIn