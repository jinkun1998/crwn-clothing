import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"
import { ReactComponent as CrwnLogo } from "../../crown.svg"
import { UserContext } from "../../contexts/users.context"
import { signOutUser } from "../../utils/firebase.utils"

import "./navigation.style.scss"

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)

    const signOutHandler = async () => {
        await signOutUser()
        setCurrentUser(null)
    }

    return (
        <Fragment>
            <div className="navigation">
                <Link className="nav-logo-container" to='/' >
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop' >
                        SHOP
                    </Link>
                    {
                        currentUser ?
                            <span className="nav-link" onClick={signOutHandler}>
                                SIGN OUT
                            </span> :
                            <Link className="nav-link" to='/sign-in' >
                                SIGN IN
                            </Link>
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation