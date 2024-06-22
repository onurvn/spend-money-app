import { moneyF } from "../money"

const Product = ({ product, total, money, basket, setBasket }) => {

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)

        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)

        currentBasket.amount -= 1;

        if (currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent])
        } else {
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }

    return (
        <>
            <div className="p-5 border border-zinc-700 mb-5">
                <div><img className="h-20 w-full object-contain" src={product.image} /></div>
                <div className="font-bold text-2xl">{product.title}</div>
                <div className="font-semibold text-xl my-2">${moneyF(product.price)}</div>
                <div className="flex gap-x-2 items-center">
                    <button disabled={!basketItem} onClick={removeBasket} className="bg-black text-white p-2 px-20 disabled:opacity-15">Sell</button>
                    <span className="font-bold text-xl">{basketItem && basketItem.amount || 0} </span>
                    <button disabled={total + product.price > money} onClick={addBasket} className="bg-black text-white p-2 px-20 disabled:opacity-15">Buy</button>
                </div>
            </div>
        </>
    )
}

export default Product