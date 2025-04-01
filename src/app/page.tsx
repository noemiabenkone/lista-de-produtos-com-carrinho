"use client";

import { useState } from "react";
import Card from "@/components/card";
import ShoppingCart from "@/components/shoppingCart";
import products from "@/mocks/product";
import { IProduct } from "@/types/product";

export default function Home() {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
 

  const addToCart = (product: IProduct) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };
  return (
    <div className="bg-red-100 text-black min-h-screen  p-[5%]">
      <h1 className="font-bold text-3xl pb-8">Desserts</h1>
      <div className="flex ">
        
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
              addToCart={addToCart}
            />
          ))}
        </div>
        <div className=" pl-8">
          <ShoppingCart cartItems={cartItems}/>
        </div>
      </div>
    </div>
  );
}