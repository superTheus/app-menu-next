import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  image: StaticImageData;
  text: string;
  link: string;
}

export default function CategoryCard({ image, text, link }: CategoryCardProps) {
  return (
    <Link href={link} className="card-category-link">
      <div className="card-category">
        <Image src={image} alt="Category" />
        <p>{text}</p>
      </div>
    </Link>
  );
}