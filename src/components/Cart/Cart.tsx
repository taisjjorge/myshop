import { IoMdClose } from 'react-icons/io';
import * as S from './styles';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../redux/Cart/cart-slice';
import { Product } from '../../data/products';

interface CartProps{
  showCart: boolean;
  closeCart: () => void;
  cart: Product[]
}
export const Cart: React.FC<CartProps> = ({ showCart, closeCart, cart }) => {
  const dispatch = useDispatch()
  
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
      <S.CartTotal data-testid="total">Total: ${total}</S.CartTotal>
    </S.Container>
  );
}
