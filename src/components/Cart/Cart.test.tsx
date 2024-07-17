import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}))
describe('Cart > Unit Tests', () => {
  it('should render without crashing', () => {
    render(
        <Cart showCart={true} closeCart={() => {}} cart={[]} />
    );

    const titleElement = screen.getByRole('heading', { level: 1 })
    const totalElement = screen.getByTestId('total')
    const cartListElement = screen.getByRole('list')

    expect(titleElement).toHaveTextContent('Carrinho')
    expect(totalElement).toHaveTextContent('Total: $0')
    expect(cartListElement).toBeEmptyDOMElement()
  })

  it('should render a list of products', () => {
    render(
        <Cart showCart={true} closeCart={() => {}} cart={[
          { id: 1,
            title: 'Product 1',
            price: 100, 
            description: 'Product 1 description',
            image: 'product1.jpg',
            category: 'Category 1',
            rating: {
              rate: 4,
              count: 10,
            },
          },
          { id: 2,
            title: 'Product 2',
            price: 100, 
            description: 'Product 2 description',
            image: 'product2.jpg',
            category: 'Category 2',
            rating: {
              rate: 5,
              count: 2,
            },
          },
        ]} />
    );

    const cartListElement = screen.getByRole('list')
    const cartItems = screen.getAllByRole('listitem')

    expect(cartListElement).not.toBeEmptyDOMElement()
    expect(cartItems).toHaveLength(2)
  })

  it('should remove a product from the cart', () => {
    render(
        <Cart showCart={true} closeCart={() => {}} cart={[
          { id: 1,
            title: 'Product 1',
            price: 100, 
            description: 'Product 1 description',
            image: 'product1.jpg',
            category: 'Category 1',
            rating: {
              rate: 4,
              count: 10,
            },
          },
        ]} />
    );

    const removeButton = screen.getByRole('button', { name: /remover/i })
    
    removeButton.click()

    expect(mockDispatch).toHaveBeenCalledTimes(1)
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: { id: 1,
        title: 'Product 1',
        price: 100, 
        description: 'Product 1 description',
        image: 'product1.jpg',
        category: 'Category 1',
        rating: {
          rate: 4,
          count: 10,
        },
      },
      type: 'cart/removeProduct',
    })
  })
});