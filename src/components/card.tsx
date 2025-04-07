
import { IProduct } from "@/types/product";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";


interface CardProps {
    product: IProduct;
    addToCart: () => void;
}
export default function Card({addToCart, product }: CardProps)  {
   
  return (
    <div>
       <div className="relative h-[250px] w-[250px] flex justify-center ">
            <Image 
                src={product.image} 
                alt="Imagem de um bolo de chocolate"
                fill 
                className="rounded-lg object-cover"
            />
            <button onClick={addToCart} className="bg-white flex items-center gap-2 absolute py-1 px-3 -bottom-5 border border-amber-950 rounded-full text-amber-950">
                <ShoppingCart className="" />
                 Add ao carrinho
            </button>
       </div>
       <div className="mt-6">
            <p className="text-amber-900 text-lg">{product.title}</p>
            <h1 className="text-xl font-medium">{product.description}</h1>
            <p className="text-lg text-amber-700">{product.price}</p>
        </div>
    </div>
  );
}