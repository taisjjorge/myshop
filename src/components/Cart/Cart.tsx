import { IoMdClose } from 'react-icons/io';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';
import { removeProduct } from '../../redux/Cart/cart-slice';

interface CartProps{
  showCart: boolean;
  closeCart: () => void;
}
export const Cart: React.FC<CartProps> = ({ showCart, closeCart }) => {
  const dispatch = useDispatch()
  
  const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)
  const total = cart.reduce((acc, product) => acc + product.price, 0)

  return (
    <S.Container showCart={showCart}>
      <S.Wrapper>
        <S.Title>Carrinho</S.Title>
        <IoMdClose onClick={closeCart}/>
      </S.Wrapper>

      <S.CartProductsList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
            <button onClick={() => dispatch(removeProduct(product))}>Remover</button>
          </S.CartProductItem>
        ))}
      </S.CartProductsList>
      <S.CartTotal>Total: ${total}</S.CartTotal>
    </S.Container>
  );
}
