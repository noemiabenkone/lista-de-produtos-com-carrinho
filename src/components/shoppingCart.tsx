"use client";

import Image from "next/image";
import { IProduct } from "@/types/product";

interface ShoppingCartProps {
  cartItems: IProduct[];
}

export default function ShoppingCart({ cartItems }: ShoppingCartProps) {
  return (
    <div className="bg-white w-[400px] h-[600px] flex flex-col p-[5%] rounded-lg shadow-lg">
      <h1 className="text-red-700 text-xl font-bold">
        Your Cart ({cartItems.length})
      </h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <Image
            src="https://st.depositphotos.com/1815767/1398/v/950/depositphotos_13981776-stock-illustration-shopping-cart-sketch.jpg"
            alt="Carrinho vazio"
            width={150}
            height={200}
            className="scale-x-[-1]"
          />
          <p className="text-amber-900 text-sm font-semibold">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex items-center gap-4 border-b py-2">
              <Image src={item.image} alt={item.title} width={50} height={50} />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-600">${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
