import { useEffect, useState } from "react"
import { Card, Layout } from "../../Components"
import { Product } from "../../Model"

export const Home = () => {
  const [products,setProducts] = useState<Product[]>([])

  useEffect(() =>{
    fetch('https://fakestoreapi.com/products?limit=5')
      .then( res => res.json())
      .then( (data:Product[]) => setProducts(data) )
  },[])

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        { products?.map( ({ id,title,price,description,category,image }) => (
            <Card
              key={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              />
            )
          )
        }
      </div>

    </Layout>
  )
}