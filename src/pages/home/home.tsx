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

export default function HomePage() {
  return (
    <>
      <Header title='Seja Bem-vindo(a)' subtitle='Olá' activeLinkOne />
      <article>
        <div className='container container__flex'>
          <section className='container-input'>
            <SearchInput />
          </section>

          <section className='section-wrap'>
            <Title text='Categorias' />
            <div className='category-cards'>
              <CategoryCard image={Massas} text='Massas' />
              <CategoryCard image={Pizzas} text='Pizzas' />
              <CategoryCard image={Carnes} text='Carnes' />
              <CategoryCard image={Lanches} text='Lanches' />
              <CategoryCard image={Massas} text='Massas' />
              <CategoryCard image={Pizzas} text='Pizzas' />
            </div>
            <Title text='Cardápio' />
            <div className='hamburguer-cards'>
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
      </article>
    </>
  )
}