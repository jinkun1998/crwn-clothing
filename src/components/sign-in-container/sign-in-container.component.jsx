import Input from "../input/input-container.component"
import { signInWithGoogleEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase.utils"
import { useState, useEffect } from "react"

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
        try {
            const response = await signInWithGoogleEmailAndPassword(email, password)
            console.log(response)
        }
        catch (error) {
            switch (error.code) {
                case "auth/invalid-email":
                    alert("invalid email")
                    break
                default:
                    break
            }
        }
    }

    const loginWithGoogleHandle = async () => {
        try {
            const response = await signInWithGooglePopup()
            console.log(response)
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
        <div>
            <h2>Already have an account?</h2>
            <p>Sign in with your email and password</p>
            <form onSubmit={loginHandle}>
                <Input labelName="Email" type="email" name="email" onChange={onInputChangeHandle} />
                <Input labelName="Password" name="password" type="password" />
                <button type="submit">LOGIN</button>
                <button onClick={loginWithGoogleHandle}>LOGIN WITH GOOGLE</button>
            </form>
        </div>
    )
}

export default SignInContainer