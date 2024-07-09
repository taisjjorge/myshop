import { useEffect, useState } from "react"
import { ProductCard } from "../ProductCard/ProductCard"
import * as S from "./styles"
import { Product } from "../../data/products"

export const ProductsList : React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      if (!response.ok) {
        throw new Error('Erro ao carregar os produtos')
      }
      const data: Product[] = await response.json()
      setProducts(data)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('Um erro desconhecido ocorreu')
      }
    } finally {
      setLoading(false)
    }
  }
  fetchProducts()
}, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <S.Container>
      { products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  )
}