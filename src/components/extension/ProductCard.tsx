"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Props {
  no: number;
  product_name: string;
  brand: string;
  sale_unit: string;
  price: number;
  discount: number;
  rating: string;
  product_stock: number;
  thumbnail_link: string;
}

export function ProductCard({
  no,
  product_name,
  brand,
  sale_unit,
  price,
  discount,
  rating,
  product_stock,
  thumbnail_link,
}: Props) {
  const hasDiscount = discount > 0;
  const discountedPrice = hasDiscount ? price - price * discount : price;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${no}`);
  };

  return (
    <div>
      <Card className="w-[260px] h-[422px]" onClick={handleClick}>
        <CardHeader className="pb-3 mt-2 justify-center relative h-[200px] mx-4">
          <Image
            src={thumbnail_link}
            alt="product"
            fill={true}
            className="object-cover"
          />
        </CardHeader>
        <CardContent className="w-full h-full flex flex-col items-start justify-start gap-1.5 px-4 pt-8">
          <h2 className="font-semibold my-auto">{product_name}</h2>
          <p className="text-muted-foreground my-auto">{brand}</p>
          <p className="text-muted-foreground text-sm">{sale_unit}</p>

          <div className="mt-2">
            {hasDiscount ? (
              <>
                <p className="text-sm line-through text-red-500">
                  Rp {price.toLocaleString("id-ID")}
                </p>
                <p className="text-lg font-bold text-black">
                  Rp {discountedPrice.toLocaleString("id-ID")}
                </p>
              </>
            ) : (
              <p className="text-lg font-bold text-black mt-5">
                Rp {price.toLocaleString("id-ID")}
              </p>
            )}
          </div>

          <div className="flex items-center w-full justify-between text-muted-foreground text-sm mt-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
              <span>{rating}</span>
            </div>
            <div>
              <span>{product_stock} in Stock</span>
            </div>
          </div>
          <Button className="w-full bg-[#73ADBD] mb-2">
            <p style={{ fontSize: "14px" }}>Add to Cart</p>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
