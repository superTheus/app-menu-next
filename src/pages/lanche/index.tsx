import Title from '@/components/Title';
import Header from '../../components/header/header';
import SearchInput from '../../components/search-input/search-input';
import Hamburguer from '@/assets/images/hamburguer.png';
import HamburguerCard from '@/components/HamburguerCard';
import ButtonBell from '@/components/ButtonBell';
import styles from '@/pages/home/home.module.scss';

export default function HomePage() {
  return (
    <>
      <Header title='Lanches' subtitle='' btnBack />
      <article>
        <div className='container container__flex'>
          <section className={styles.containerInput}>
            <SearchInput />
          </section>

          <section className={styles.sectionWrap}>
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