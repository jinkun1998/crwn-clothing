import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { createUserDocumentFromAuth, onAuthStateChangedListner } from "./utils/firebase.utils";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/authentication/sign-in.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./components/checkout/checkout.component";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.action";

import "./App.css";

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubcribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
    })
    return unsubcribe
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
