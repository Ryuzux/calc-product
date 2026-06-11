import ArtikelCard from "../../../components/extension/ArtikelCard";
import Carousel from "../../../components/extension/Carousel";
import Category from "../../../components/extension/Category";
import { ProductCard } from "../../../components/extension/ProductCard";
import { dummyArtikel } from "./data/dummy-data";
import productList from "./data/product_list.json";

export default async function Page() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full">
        <div className="mb-10">
          <Carousel />
        </div>
        <div className="px-12">
          <div className="mb-10">
            <Category />
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-10">Terlaris</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 mb-10">
            {productList.slice(0,10).map((product, index) => (
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
          <h2 className="text-2xl font-bold mt-4 mb-10">Artikel</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 space-x-3 gap-4">
            {dummyArtikel.map((artikel, index) => (
              <ArtikelCard key={index} {...artikel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
