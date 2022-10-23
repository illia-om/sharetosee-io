import type { NextPage } from 'next'
import Image from 'next/image';
import Header from '../components/header'
import utilStyles from '../styles/util.module.css';
import SharedLayout from '../components/shared-layout';

const Home: NextPage = () => {
  return (
    <SharedLayout>
      <>
        <Header />
        <main className={utilStyles.contaienr}>
          <section>
            <Image
              src='https://www.sneaker10.cy/2697064-product_large/nike-air-max-pre-day-se.jpg'
              width={1000}
              height={500}
              objectFit='cover'
            />
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui rem dicta voluptatem repellat nulla, asperiores aspernatur tempore quis animi, ducimus, totam eum odit dolor debitis autem modi cumque soluta. Quidem!
            </h2>
          </section>
        </main>
      </>
    </SharedLayout>
  )
}

export default Home
