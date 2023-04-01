import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"
import { ReactComponent as CrwnLogo } from "../../crown.svg"
import { UserContext } from "../../contexts/users.context"
import { signOutUser } from "../../utils/firebase.utils"

import "./navigation.style.scss"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component"
import { IsCartOpenContext } from "../../contexts/iscartopen.context"

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(IsCartOpenContext)

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
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropDown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation