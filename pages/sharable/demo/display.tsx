import { GetServerSideProps } from 'next';
import ShareQr from '../../../components/share-qr';
import { generateQr } from '../../../lib/share-to-see';
import SharedLayout from '../../../components/shared-layout';
import { useRouter } from 'next/router';
import Header from '../../../components/header';
import utilStyles from '../../../styles/util.module.css';
import Image from 'next/image';
import { useContext } from 'react';
import jwt from 'jsonwebtoken';

const DemoPageDisplay = ({
    data
}: {
    data: {
        s: string;
        t: number;
        n: number;
    }
}) => {
    return (
        <SharedLayout screens={data.t} displayNumber={data.n}>
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
        </SharedLayout>
    );
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    console.log('hello', ctx.query);
    if (!ctx.query.t || typeof ctx.query.t !== 'string') {
        return { notFound: true }
    }
    try {
        const data = jwt.verify(ctx.query.t, process.env.JWT_SESSION_KEY!)
        return {
            props: {
                data
            }
        }
    } catch (error) {
        return { notFound: true }
    }
}

export default DemoPageDisplay;