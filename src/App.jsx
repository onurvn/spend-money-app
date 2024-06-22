import { useEffect, useState } from "react"
import Header from "./components/Header"
import Product from "./components/Product";
import products from "./products.json"
import Basket from "./components/Basket";

const App = () => {
  const [money, setMoney] = useState(100000000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([])
  }

  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0))
  }, [basket])

  return (
    <>
      <Header total={total} money={money} />
      <div className="flex items-center justify-center flex-wrap text-center gap-x-5">
        {products.map((product) => (
          <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product} />
        ))}
      </div>
      {
        total > 0 && (
          <Basket resetBasket={resetBasket} products={products} total={total} basket={basket} />

        )
      }
    </>
  )
}

export default App