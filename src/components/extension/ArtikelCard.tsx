import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { FaArrowRight } from "react-icons/fa"

interface Props {
  image: string
  date: string
  title: string
  description: string
}

export default async function ArtikelCard({ image, date, title, description }: Props) {
  return (
    <div>
      <Card className="w-[448px] h-[514px] pt-7 px-6">
        <CardContent>
          <div className="relative w-full h-[248px]">
              <Image src={image} alt="product" fill className="object-cover" />
          </div>
          <p className="text-sm text-gray-400 my-2">
            {date}
          </p>
          <p className="text-lg font-bold">
            {title}
          </p>
          <p className="text-sm text-gray-400 my-2">
            {description}
          </p>
        </CardContent>
        <CardFooter className="gap-3 flex items-center">
          <h5 className="text-[#73ADBD] font-bold">Baca Selengkapnya</h5>
          <FaArrowRight className="text-[#73ADBD] font-bold align-middle" />
        </CardFooter>
      </Card>
    </div>
  )
}
