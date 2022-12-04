import Input from "../input/input-container.component"
import Button from "../button/button.component"
import { createUserGoogleWithEmailAndPassword, getUserGoogleWithEmail } from "../../utils/firebase.utils"
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

    const signupHandle = async (event) => {
        event.preventDefault()

        const { email, password, fullname, confirmPassword } = formFields
        if (password !== confirmPassword) {
            alert("password does not match")
            return
        }


        var userRef = await getUserGoogleWithEmail(email)
        if (!userRef) {
            try {
                userRef = await createUserGoogleWithEmailAndPassword(email, password, fullname)
            }
            catch (error) {
                switch (error.code) {
                    case "auth/invalid-email":
                        alert("invalid email")
                        break
                    case "auth/user-not-found":
                        alert("user not found")
                        break
                    default:
                        alert(error.message)
                        console.log(error)
                        break
                }
            }
        }

        console.log(userRef)
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
                <Input labelName="Full name" name="fullname" onChange={onInputChangeHandle} required />
                <Input labelName="Email" type="email" name="email" onChange={onInputChangeHandle} required />
                <Input labelName="Password" type="password" name="password" onChange={onInputChangeHandle} required />
                <Input labelName="Confirm password" name="confirmPassword" type="password" onChange={onInputChangeHandle} required />
                <Button buttonType="submit" type="submit">SIGN UP</Button>
            </form>
        </div >
    )
}

export default SignUpContainer