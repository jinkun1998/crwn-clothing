import Input from "../input/input-container.component"
import Button from "../button/button.component"
import { createUserDocumentFromAuth, signUpWithEmailAndPassword } from "../../utils/firebase.utils"
import { useState } from "react"

import "./sign-up-container.style.scss"

const defaultFormFields = {
    email: "",
    password: "",
    fullname: "",
    confirmPassword: ""
}

const SignUpContainer = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password, fullname, confirmPassword } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signupHandle = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert("password does not match")
            return
        }
        try {
            const { user } = await signUpWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { displayName: fullname })
            resetFormFields()
        }
        catch (error) {
            console.log("create user failed", error.message)
        }
    }

    const onInputChangeHandle = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Do not have an account?</h2>
            <p>Sign up with your email and password</p>
            <form className="sign-up-form" onSubmit={signupHandle}>
                <Input labelName="Full name" name="fullname" onChange={onInputChangeHandle} value={fullname} required />
                <Input labelName="Email" type="email" name="email" onChange={onInputChangeHandle} value={email} required />
                <Input labelName="Password" type="password" name="password" onChange={onInputChangeHandle} value={password} required />
                <Input labelName="Confirm password" name="confirmPassword" type="password" value={confirmPassword} onChange={onInputChangeHandle} required />
                <div className="button-container">
                    <Button buttonType="submit" type="submit">SIGN UP</Button>
                </div>
            </form>
        </div>
    )
}

export default SignUpContainer