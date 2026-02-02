import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrderContents from "./components/orderContents"
import OrderTotals from "./components/orderTotals" 
import TipPercentage from "./components/tipPercentage"

function App() {

  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()

  return (
    <>
     <header>
      <h1 className="text-center text-4xl font-black mt-5"> Tip's Calculator </h1>
      </header>

    <main className="min-h-screen max-w-7x mx-auto py-20 grid md:grid-cols-2 gap-4">
    <div className="space-y-2 px-10">
    <h2 className="text-4xl font-black">Menu</h2>
    {menuItems.map(item => (
      <MenuItem
        key={item.id}
        item={item}
        addItem={addItem}  
      />
    ))}
    </div>

    <div className="border border-dashed rounded-lg space-y-5 p-5"> 
      {order.length > 0 ? (
        <>
        <OrderContents
       order={order}
       removeItem={removeItem}
       />

      <TipPercentage 
      setTip={setTip}
      tip={tip}
      />

      <OrderTotals
      order={order}
      tip={tip}
      placeOrder={placeOrder}
      />
        </>
      ) : <p className="text-center mt-10">The order is empty</p>}
       
    </div>
</main>
    </>
  )}

export default App

