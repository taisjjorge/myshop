import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

import * as S from "./styles";
import { RootReducer } from "../../redux/root-reducer";
import { Cart } from "../Cart/Cart";
import { login, logout } from "../../redux/User/user-slice";

export const Header: React.FC = () => {
  const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer)
  const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)
  const dispatch = useDispatch()

  const [showCart, setShowCart] = useState(false)
  const isLogged = user !== null
  

  function handleUserAuth() {
    if (user === null) {
      dispatch(login({
        name: 'John Doe',
        email: 'john@doe.com',
      }))
    } else {
      dispatch(logout({}))
    }
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            { isLogged ? 'Logout' : 'Login' }
            { isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Cart
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart 
        showCart={showCart}
        closeCart={() => setShowCart(false)}
        cart={cart}
      />
    </S.StyledHeader>
  );
}