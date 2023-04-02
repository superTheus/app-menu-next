import Title from '@/components/Title';
import Header from '../../components/header/header';
import SearchInput from '../../components/search-input/search-input';
import CategoryCard from '@/components/CategoryCard';
import Pizzas from '@/assets/images/pizza.png';
import Massas from '@/assets/images/massas.png';
import Lanches from '@/assets/images/lanches.jpg';
import Carnes from '@/assets/images/carnes.jpg';
import ButtonBell from '@/components/ButtonBell';

export default function HomePage() {
  return (
    <>
      <Header title='Categorias' subtitle='' btnBack />
      <article>
        <div className='container container__flex'>
          <section className='container-input'>
            <SearchInput />
          </section>

          <section className='section-wrap'>
            <Title text='Categorias' />
            <div className='hamburguer-cards'>
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