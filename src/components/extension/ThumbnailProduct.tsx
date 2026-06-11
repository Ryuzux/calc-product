import Image from "next/image";

interface Props {
  thumbnail_link: string | undefined;
  detail_link_1?: string;
  detail_link_2?: string;
}

export default function ThumbnailProduct({ thumbnail_link,detail_link_1,detail_link_2 }: Props) {
  return (
    <div>
      <div className="w-[331px] h-[348px] relative">
        {thumbnail_link && (
          <Image
            src={thumbnail_link}
            alt="product"
            fill
            className="object-contain rounded"
          />
        )}
      </div>
      <div className="w-fit h-[82px] flex gap-2">
        <Image
          src={detail_link_1 || ""}
          alt="product"
          width={82}
          height={82}
          className="object-contain rounded"
        />
        <Image
          src={detail_link_2 || ""}
          alt="product"
          width={82}
          height={82}
          className="object-contain rounded"
        />
      </div>
    </div>
  );
}
