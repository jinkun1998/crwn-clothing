import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"
import { ReactComponent as CrwnLogo } from "../../crown.svg"
import { signOutUser } from "../../utils/firebase.utils"
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentUser } from "../../store/user/user.selector"
import { setCurrentUser } from "../../store/user/user.action"
import { selectIsCartOpen } from "../../store/cart/cart.selector"
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component"
import CartIcon from "../../components/cart-icon/cart-icon.component"

import "./navigation.style.scss"

const Navigation = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

    const signOutHandler = async () => {
        await signOutUser()
        dispatch(setCurrentUser(null))
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