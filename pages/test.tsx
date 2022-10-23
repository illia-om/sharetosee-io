import { GetServerSideProps } from 'next';
import dynamic from "next/dynamic";
const ShareQr = dynamic(() => import('../components/share-qr'), { ssr: false });

// import ShareQr from '../components/share-qr';
import { generateQr } from '../lib/share-to-see';

const TestPage = ({ data }: { data: string; }) => {
    return (
        <div>
            <ShareQr qrUrl={data}/>
        </div>
    );
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const url = await generateQr('http://localhost:3000/test');

    return {
        props: {
            data: url
        }
    }
}

export default TestPage;