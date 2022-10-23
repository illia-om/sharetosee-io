import { GetServerSideProps } from 'next';
import dynamic from "next/dynamic";
import { useEffect, useState } from 'react';
const ShareQr = dynamic(() => import('../components/share-qr'), { ssr: false });

// import ShareQr from '../components/share-qr';
import { generateQr } from '../lib/share-to-see';

const TestPage = () => {
    const [data, setData] = useState<string>('');

    useEffect(() => {
        
        generateQr('http://localhost:3000/test')
            .then((data) => {
                if (data) {
                    setData(data)
                }
            })
    }, [])

    if (!data) return <p>No data</p>

    return (
        <div>
            <ShareQr qrUrl={data} />
        </div>
    );
}

export default TestPage;