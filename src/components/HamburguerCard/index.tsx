import Image, { StaticImageData } from "next/image";

interface HamburguerCardProps {
  image: StaticImageData;
  text: string;
}

export default function HamburguerCard({ image, text }: HamburguerCardProps) {
  return (
    <div className="hamburguer-card">
      <Image src={image} alt="Hamburguer" className="image" />
      <div className="legends">
        <h2> {text} </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
      </div>
      <div className="price">
        a partir de <span> R$ 26,00 </span>
      </div>
    </div>
  );
}