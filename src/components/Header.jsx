import { moneyF } from "../money"

const Header = ({ total, money }) => {
    return (
        <>
            <div className="bg-black shadow-md mb-5 text-white sticky top-0 left-0 right-0">
                <h1 className="text-center p-5 text-5xl">Remaining: ${moneyF(money - total)}</h1>
            </div>
        </>
    )
}

export default Header