import BasketItem from "./BasketItem"
import { moneyF } from "../money"

const Basket = ({ basket, resetBasket, total, products }) => {
    return (
        <>
            <div className="flex  items-center gap-y-3 font-bold justify-center flex-col p-10 border border-zinc-700 w-1/3 m-auto">
                {basket.map(item => (
                    <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)} />
                ))}

                <div>
                    Total: ${moneyF(total)}
                </div>
                <button className="bg-black p-2 px-20 text-white" onClick={resetBasket}>Reset Basket</button>
            </div>
        </>
    )
}

export default Basket