import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import WeightManagements from "@/assets/icons/weight-management.svg";
import pills from "@/assets/icons/pills.svg";
import firstaidbox from "@/assets/icons/first-aid-box.svg";
import medicine from "@/assets/icons/medicine.svg";
import capsule from "@/assets/icons/capsule.svg";
import mother from "@/assets/icons/mother.svg";
import Icon from "@/assets/icons/Icon.svg"
import Image from "next/image";

const iconList = [
  { src: WeightManagements, alt: "Weight Management", name: "Weight Management" },
  { src: pills, alt: "Pills", name: "Promo" },
  { src: mother, alt: "Mother", name: "Ibu dan Anak" },
  { src: capsule, alt: "Capsule", name: "Kapsul" },
  { src: medicine, alt: "Medicine", name: "Tablet" },
  { src: firstaidbox, alt: "First Aid Box", name: "Obat dan Perawatan" },
  { src: Icon, alt: "Other Icon", name: "Milk" },
];

export default async function Category() {
  return (
    <div>
      <Card className="h-[298px] w=[1384px] p-12">
        <CardTitle className="text-2xl font-bold">
          Kategori Pilihan
        </CardTitle>
        <CardContent className="flex items-center justify-center mt-7 gap-15">
          <MdOutlineKeyboardArrowLeft className="text-2xl w-11 h-20 text-gray-500" />
          
          {iconList.map((icon, index) => (
          <div key={index} className="flex flex-col items-center gap-2 w-24">
            <div className="w-22.5 h-22.5 bg-[#EBF7FA] rounded-full flex flex-col items-center justify-center">
              <Image src={icon.src} alt={icon.alt} width={50} height={50} />
            </div>
              <p className="text-sm font-semibold mt-2 text-center whitespace-nowrap">{icon.name}</p>
          </div>
          ))}

          <MdOutlineKeyboardArrowRight className="text-2xl w-11 h-20 text-gray-500" />
        </CardContent>
      </Card>
    </div>
  );
}
