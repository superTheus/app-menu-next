import Image, { StaticImageData } from "next/image";

interface CategoryCardProps {
  image: StaticImageData;
  text: string;
}

export default function CategoryCard({image, text}: CategoryCardProps) {
  return (
    <div className="card-category">
      <Image src={image} alt="Category" />
      <p>{text}</p>
    </div>
  );
}