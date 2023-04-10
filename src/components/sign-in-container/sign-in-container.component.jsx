import Input from "../input/input-container.component"
import Button from "../button/button.component"
import { logInUserWithEmailAndPassword, logInWithGooglePopup } from "../../utils/firebase.utils"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import "./sign-in-container.style.scss"

const defaultFormFields = {
    email: "",
    password: ""
}

const SignInContainer = () => {

    const navigation = useNavigate()

    const [formFields, setFormFields] = useState(defaultFormFields)

    const loginHandle = async (event) => {
        event.preventDefault()

        const { email, password } = formFields
        try {
            await logInUserWithEmailAndPassword(email, password)
            navigation("/")
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
            navigation("/")
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
                <div className="button-container">
                    <Button buttonType="submit" type="submit">LOG IN</Button>
                    <Button buttonType="google" onClick={loginWithGoogleHandle}>LOG IN WITH GOOGLE</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInContainer