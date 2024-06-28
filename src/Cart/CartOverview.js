import { useSelector } from "react-redux"
import { getTotalCartPrice } from "./cartSlice"
import { Link } from "react-router-dom"
import Button from "../ui/Button"

function CartOverview() {
    const numPizzas = useSelector(state => state.cart.cart.length)
  const totalCartPrice = useSelector(getTotalCartPrice)

  return (
    <div className="bg-stone-800 text-stone-200 uppercase px-4 py-4 text-sm md:text-base sm:px-6 flex items-center justify-between">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{numPizzas} items:</span>
        <span>Rs.{totalCartPrice}</span>
      </p>
      <Link to="/cart" className=""><Button size="small" variation="primary">Open cart &rarr;</Button></Link>
    </div>
  )
}

export default CartOverview
