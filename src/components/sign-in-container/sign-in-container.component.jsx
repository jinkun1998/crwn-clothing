import Input from "../input/input-container.component"
import Button from "../button/button.component"
import { logInUserWithEmailAndPassword, logInWithGooglePopup } from "../../utils/firebase.utils"
import { useState } from "react"

import "./sign-in-container.style.scss"

const defaultFormFields = {
    email: "",
    password: ""
}

const SignInContainer = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)

    const loginHandle = async (event) => {
        event.preventDefault()

        const { email, password } = formFields
        console.log(formFields)
        try {
            await logInUserWithEmailAndPassword(email, password)
        }
        catch (error) {
            switch (error.code) {
                case "auth/invalid-email":
                    alert("invalid email")
                    break
                case "auth/user-not-found":
                    alert("user not found")
                    break
                case "auth/wrong-password":
                    alert("wrong password")
                    break
                default:
                    alert(error.message)
                    break
            }
        }
    }

    const loginWithGoogleHandle = async () => {
        try {
            await logInWithGooglePopup()
        }
        catch (error) {
            console.log(error)
        }
    }

    const onInputChangeHandle = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <p>Sign in with your email and password</p>
            <form className="sign-in-form" onSubmit={loginHandle}>
                <Input className="input" labelName="Email" type="email" name="email" onChange={onInputChangeHandle} required />
                <Input className="input" labelName="Password" name="password" type="password" onChange={onInputChangeHandle} required />
                <Button buttonType="submit" type="submit">LOG IN</Button>
                <Button buttonType="google" onClick={loginWithGoogleHandle}>LOG IN WITH GOOGLE</Button>
            </form>
        </div>
    )
}

export default SignInContainer