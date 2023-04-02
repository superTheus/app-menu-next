import { TiDocumentText } from "react-icons/ti";
import { TiShoppingBag } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

interface HeaderProps {
  title: string;
  subtitle: string;
  activeLinkOne?: boolean;
  activeLinkTwo?: boolean;
  btnBack?: boolean;
}

export default function Header({ title, subtitle, activeLinkOne, activeLinkTwo, btnBack }: HeaderProps) {
  return (
    <header>
      <div className='container'>
        <nav>
          {btnBack &&
            <div className="back-bnt">
              <Link href={'/'}> <IoIosArrowBack className='icon' /> <p> Voltar </p> </Link>
            </div>
          }
          <div className="menu">
            <div className={`${activeLinkOne ? 'active' : ''}`}>
              <Link href={'/'}> <TiDocumentText className='icon' /> <p> Cardápio </p> </Link>
              <div></div>
            </div>
            <div className={`${activeLinkTwo ? 'active' : ''}`}>
              <Link href={'/'}> <TiShoppingBag className='icon' /> <p> Pedidos </p> </Link>
            </div>
          </div>
        </nav>
        <div className='container-title'>
          <h2 className='subtitle'> {subtitle} </h2>
          <h1 className='title'> {title} </h1>
        </div>
      </div>
    </header>
  );
}