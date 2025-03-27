import Image from "next/image"

export default function ShoppingCart() {
    return (
        <div className="bg-white w-[400px] h-[600px]flex p-[5%]  rounded-lg shadow-lg">
            <div>
                <h1 className="  text-red-700 text-xl font-bold">Your Cart (0)</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Image 
                    src="https://st.depositphotos.com/1815767/1398/v/950/depositphotos_13981776-stock-illustration-shopping-cart-sketch.jpg"
                    alt="carrinho vazinho"
                    width={150}
                    height={200}
                    className="scale-x-[-1]"
                />
                <p className="text-amber-900 text-sm font-semibold">Your added items will appear here</p>
            </div>
        </div>
    )
}