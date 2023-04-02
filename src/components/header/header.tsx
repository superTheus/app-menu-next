import { TiDocumentText } from "react-icons/ti";
import { TiShoppingBag } from "react-icons/ti";

interface HeaderProps {
  title: string;
  subtitle: string;
  activeLinkOne?: boolean;
  activeLinkTwo?: boolean;
}

export default function Header({ title, subtitle, activeLinkOne, activeLinkTwo }: HeaderProps) {
  return (
    <header>
      <div className='container'>
        <nav>
            <div className={`${activeLinkOne ? 'active' : ''}`}> 
              <a href="http://"> <TiDocumentText className='icon'/> <p> Cardápio </p> </a> 
              <div></div>
            </div>
            <div className={`${activeLinkTwo ? 'active' : ''}`}> 
              <a href="http://"> <TiShoppingBag className='icon'/> <p> Pedidos </p> </a>
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