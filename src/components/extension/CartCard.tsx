import { Card } from "../ui/card";
import { useState } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import { MdOutlineMessage, MdFavoriteBorder, MdOutlineShare } from "react-icons/md";
import { Button } from "../ui/button";

interface Props {
  product_stock: number;
  price: number;
  discount: number;
}

export default function CartCard({ product_stock, price, discount }: Props) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    if (quantity < product_stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items to the cart`);
  };

  const discountedPrice = price - (price * discount);

  const subtotal = quantity * discountedPrice;

  return (
    <div>
      <Card className="w-[316px] h-[340px] p-5">
        <p className="text-base font-bold">Atur Jumlah dan Catatan</p>

        <div className="flex items-center gap-4">
          <div className="flex items-center mt-4 border-2 max-w-[97px]">
            <button className="py-1" onClick={handleDecrease}>
              <HiOutlineMinus
                style={{ width: "12px", height: "12px", color: "#73ADBD" }}
              />
            </button>
            <span className="px-4 text-lg">{quantity}</span>
            <button className="py-1" onClick={handleIncrease}>
              <HiOutlinePlus
                style={{ width: "12px", height: "12px", color: "#73ADBD" }}
              />
            </button>
          </div>
          <p className="mt-3">
            Stock Total:
            <span className="ml-2 font-bold">{product_stock}</span>
          </p>
        </div>

        <div className="py-10">
          <p className="text-base">
            Subtotal: <span className="font-bold">Rp {subtotal.toLocaleString()}</span>
          </p>
        </div>

        <div className="space-y-3">
          <Button
            className="flex justify-center items-center gap-2 w-full py-2 bg-[#0A4150] text-white rounded"
            onClick={handleAddToCart}
          >
            <HiOutlinePlus
              style={{ width: "12px", height: "12px", color: "#73ADBD" }}
            />
            Keranjang
          </Button>

          <Button
            variant="outline"
            className="flex border-2 justify-center items-center gap-2 w-full py-2 text-[#73ADBD] rounded"
            onClick={handleAddToCart}
          >
            Beli Langsung
          </Button>
        </div>

        <div className="flex flex-row gap-4 items-center mt-4">
          <MdOutlineMessage className="text-[#73ADBD]" />
          Chat
          <MdFavoriteBorder className="text-[#73ADBD]" />
          Wishlist
          <MdOutlineShare className="text-[#73ADBD]" />
          Share
        </div>
      </Card>
    </div>
  );
}
