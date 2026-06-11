import { Star } from "lucide-react";
import { HiOutlineHome, HiOutlineInbox, HiOutlineTruck } from "react-icons/hi2";

interface Props {
  product_name?: string;
  rating?: string;
  brand?: string;
  product_status?: string;
  shipping_type?: string;
  price?: number;
  discount?: number;
  sku?: string;
  indications?: string;
  composition?: string;
  dosage_usage_instructions?: string;
}

export default function ProductDescription({
  product_name,
  rating,
  brand,
  product_status,
  shipping_type,
  price,
  discount,
  sku,
  indications,
  composition,
  dosage_usage_instructions,
}: Props) {
  return (
    <div>
      <p className="text-2xl font-bold">{product_name}</p>

      <div className="flex flex-col items-start space-y-4 mt-2">
        <div className="flex items-center gap-3">
          <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
          <span>{rating}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <HiOutlineHome className="w-4 h-4" color="#73ADBD" />
          <span>By {brand}</span>

          <HiOutlineInbox className="w-4 h-4" color="#73ADBD" />
          <span>Stock {product_status}</span>

          <HiOutlineTruck className="w-4 h-4" color="#73ADBD" />
          <span>{shipping_type}</span>
        </div>

        <div className="flex flex-col gap-2">
          {discount ? (
            <>
              <div className="flex items-center gap-5">
                <span className="text-sm font-normal text-white bg-[#9C2600] px-3 py-1.5 rounded-sm">
                  Save {discount * 100}%
                </span>
                <span className="text-lg line-through text-red-500">
                  Rp {new Intl.NumberFormat("id-ID").format(price ?? 0)}
                </span>
                <span className="text-3xl font-bold ">
                  Rp{" "}
                  {new Intl.NumberFormat("id-ID").format(
                    Math.round((price ?? 0) * (1 - discount))
                  )}
                </span>
              </div>
            </>
          ) : (
            <span className="text-3xl font-bold ">
              Rp {new Intl.NumberFormat("id-ID").format(price ?? 0)}
            </span>
          )}
        </div>

        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-[#73ADBD]">Detail</p>
          <div className="w-full flex justify-center">
            <div className="w-28 border-b-2 border-[#73ADBD]" />
          </div>
        </div>

        <div className="gap-3 flex flex-col">
          <div className="flex items-center text-base text-gray-400">
            <span className="mr-2">Nomor Edar</span>
            <span className="text-[#73ADBD] text-base font-bold">{sku}</span>
          </div>
          <div className="flex items-center text-base text-gray-400">
            <span className="mr-2">Perhatian</span>
            <span className="text-[#73ADBD] text-base font-bold">
              terapi dengan MAOI, hipertensi berat
            </span>
          </div>

          <p className="text-base text-gray-400">Deskripsi</p>
          <div className="flex items-start gap-2 ml-2">
            <span className="text-base font-normal">•</span>
            <p className="text-base font-normal">{indications}</p>
          </div>

          <p className="text-base text-gray-400">Komposisi</p>
          <div className="flex items-start gap-2 ml-2">
            <span className="text-base font-normal">•</span>
            <p className="text-base font-normal">{composition}</p>
          </div>

          <p className="text-base text-gray-400">Dosis</p>
          <div className="flex items-start gap-2 ml-2">
            <span className="text-base font-normal">•</span>
            <p className="text-base font-normal">{dosage_usage_instructions}</p>
          </div>

        </div>

      </div>
    </div>
  );
}
