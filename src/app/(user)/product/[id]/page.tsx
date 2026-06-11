"use client";

import ThumbnailProduct from "@/components/extension/ThumbnailProduct";
import { useParams } from "next/navigation";
import productList from "../data/product_list.json";
import ProductDescription from "@/components/extension/ProductDescription";
import CartCard from "@/components/extension/CartCard";
import { ProductCard } from "@/components/extension/ProductCard";
import CustomerReviewSummary from "@/components/extension/CustomerReviewSummary";

export default function Page() {
  const { id } = useParams();
  const detailProduct = productList.find((product) => product.no == Number(id));

  if (!detailProduct) {
    return (
      <div className="text-center text-red-500 p-10">
        Produk dengan ID {id} tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="px-14 py-5">
      <div className="flex items-center justify-center w-full">
        <div className="w-full flex gap-18">
          <div className="mb-10">
            {id}
            <ThumbnailProduct
              thumbnail_link={detailProduct.thumbnail_link}
              detail_link_1={detailProduct.detail_link_1}
              detail_link_2={detailProduct.detail_link_2}
            />
          </div>

          <div>
            <ProductDescription
              product_name={detailProduct.product_name}
              rating={detailProduct.rating}
              brand={detailProduct.brand}
              product_status={detailProduct.product_status}
              shipping_type={detailProduct.shipping_type}
              price={detailProduct.price}
              discount={detailProduct.discount}
              sku={detailProduct.sku}
              indications={detailProduct.indications}
              composition={detailProduct.composition}
              dosage_usage_instructions={
                detailProduct.dosage_usage_instructions
              }
            />
          </div>

          <div>
            <CartCard
              product_stock={detailProduct.product_stock}
              price={detailProduct.price}
              discount={detailProduct.discount}
            />
          </div>
        </div>
      </div>
      
      <div>
      <CustomerReviewSummary
        average={5}
        totalRatings={5}
        totalReviews={1}
        ratingsBreakdown={{
          5: 3,
          4: 0,
          3: 0,
          2: 0,
          1: 0,
        }}
      />
      </div>

      <div>
        <p className="text-2xl font-bold pt-7 pb-15">Terlaris</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 mb-10">
          {productList.slice(0, 5).map((product, index) => (
            <ProductCard
              key={index}
              no={product.no}
              product_name={product.product_name}
              brand={product.brand}
              sale_unit={product.sale_unit}
              price={product.price}
              discount={product.discount}
              rating={product.rating}
              product_stock={product.product_stock}
              thumbnail_link={product.thumbnail_link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
