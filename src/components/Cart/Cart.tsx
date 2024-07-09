import { IoMdClose } from 'react-icons/io';
import * as S from './styles';

interface CartProps{
  showCart: boolean;
  closeCart: () => void;
}
export const Cart: React.FC<CartProps> = ({ showCart, closeCart }) => {
  return (
    <S.Container showCart={showCart}>
      <S.Wrapper>
        <S.Title>Carrinho</S.Title>
        <IoMdClose onClick={closeCart}/>
      </S.Wrapper>
    </S.Container>
  );
}
