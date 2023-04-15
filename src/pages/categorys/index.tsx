import Title from '@/components/Title';
import Header from '../../components/header/header';
import SearchInput from '../../components/search-input/search-input';
import CategoryCard from '@/components/CategoryCard';
import Pizzas from '@/assets/images/pizza.png';
import Massas from '@/assets/images/massas.png';
import Lanches from '@/assets/images/lanches.jpg';
import Carnes from '@/assets/images/carnes.jpg';
import ButtonBell from '@/components/ButtonBell';
import styles from '@/pages/home/home.module.scss';

export default function HomePage() {
  return (
    <>
      <Header title='Categorias' subtitle='' btnBack />
      <article>
        <div className='container container__flex'>
          <section className={styles.containerInput}>
            <SearchInput />
          </section>

          <section className={styles.sectionWrap}>
            <Title text='Categorias' />
            <div className={styles.hamburguerCards}>
              <CategoryCard image={Massas} text='Massas' link='/lanche' />
              <CategoryCard image={Pizzas} text='Pizzas' link='/lanche' />
              <CategoryCard image={Carnes} text='Carnes' link='/lanche' />
              <CategoryCard image={Lanches} text='Lanches' link='/lanche' />
              <CategoryCard image={Massas} text='Massas' link='/lanche' />
              <CategoryCard image={Pizzas} text='Pizzas' link='/lanche' />
              <CategoryCard image={Massas} text='Massas' link='/lanche' />
              <CategoryCard image={Pizzas} text='Pizzas' link='/lanche' />
              <CategoryCard image={Carnes} text='Carnes' link='/lanche' />
              <CategoryCard image={Lanches} text='Lanches' link='/lanche' />
              <CategoryCard image={Massas} text='Massas' link='/lanche' />
              <CategoryCard image={Pizzas} text='Pizzas' link='/lanche' />
            </div>
          </section>
        </div>
        <ButtonBell />
      </article>
    </>
  )
}