import Card from "@/components/card";
import ShoppingCart from "@/components/shoppingCart";
import products from "@/mocks/product";

export default function Home() {
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
            />
          ))}
        </div>
        <div className=" pl-8">
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}