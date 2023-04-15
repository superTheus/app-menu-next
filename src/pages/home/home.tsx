import Title from '@/components/Title';
import Header from '../../components/header/header';
import SearchInput from '../../components/search-input/search-input';
import CategoryCard from '@/components/CategoryCard';
import Pizzas from '@/assets/images/pizza.png';
import Massas from '@/assets/images/massas.png';
import Lanches from '@/assets/images/lanches.jpg';
import Carnes from '@/assets/images/carnes.jpg';
import Hamburguer from '@/assets/images/hamburguer.png';
import HamburguerCard from '@/components/HamburguerCard';
import ButtonBell from '@/components/ButtonBell';
import { AiOutlinePlus } from "react-icons/ai";
import Link from 'next/link';
import styles from './home.module.scss';

export default function HomePage() {
  return (
    <>
      <Header title='Seja Bem-vindo(a)' subtitle='Olá' activeLinkOne />
      <article>
        <div className='container container__flex'>
          <section className={styles.containerInput}>
            <SearchInput />
          </section>

          <section className={styles.sectionWrap}>
            <div className={styles.titleCategory}>
              <Title text='Categorias' />
              <Link href={'/categorys'} className={styles.plus}>
                <p> Ver mais </p>
                <AiOutlinePlus />
              </Link>
            </div>
            <div className={styles.categoryCards}>
              <CategoryCard image={Massas} text='Massas' link='/lanche' />
              <CategoryCard image={Pizzas} text='Pizzas' link='/lanche' />
              <CategoryCard image={Carnes} text='Carnes' link='/lanche' />
              <CategoryCard image={Lanches} text='Lanches' link='/lanche' />
              <CategoryCard image={Massas} text='Massas' link='/lanche' />
              <CategoryCard image={Pizzas} text='Pizzas' link='/lanche' />
            </div>
            <Title text='Cardápio' />
            <div className={styles.hamburguerCards}>
              <HamburguerCard image={Hamburguer} text='X-salada' />
              <HamburguerCard image={Hamburguer} text='X-salada' />
              <HamburguerCard image={Hamburguer} text='X-salada' />
              <HamburguerCard image={Hamburguer} text='X-salada' />
              <HamburguerCard image={Hamburguer} text='X-salada' />
              <HamburguerCard image={Hamburguer} text='X-salada' />
              <HamburguerCard image={Hamburguer} text='X-salada' />
              <HamburguerCard image={Hamburguer} text='X-salada' />
            </div>
          </section>
        </div>
        <ButtonBell />
      </article>
    </>
  )
}