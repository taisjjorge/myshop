import styled from "styled-components"

interface ContainerProps{
  showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${props => props.showCart ? '0' : '-350px'};
  
  width: 350px;
  height: 100vh;

  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

  padding: 2rem;

  transition: right 0.3s;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  cursor: pointer;
`

export const Title = styled.h1``

export const CartProductsList = styled.ul`
  list-style: none;
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CartProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;
`

export const CartTotal = styled.strong`

`