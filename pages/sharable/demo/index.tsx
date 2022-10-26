import { randomUUID } from 'crypto';
import { GetServerSideProps } from 'next';
import { Suspense, useEffect, useState } from 'react';
import ShareQr from '../../../components/share-qr';
import { generateQr, generateUrlFromBuffer, getQrImage } from '../../../lib/share-to-see';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';


const DemoPage = ({ shareUrl, redirectUrl }: { shareUrl: string, redirectUrl: string; }) => {
    const [qrUrl, setQrUrl] = useState<string>('');

    const constructQr = async () => {
        const link = await generateQr(shareUrl);
        setQrUrl(link!);
    }

    useEffect(() => {
        constructQr();
    }, [])

    return (
        qrUrl !== '' ? <ShareQr qrUrl={qrUrl} redirectUrl={redirectUrl}/> : <div>loading...</div>
    );

}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = uuidv4();
    const data = {
        s: session,
        t: 2,
        n: 2
    }
    const redirectData = {
        s: session,
        t: 2,
        n: 1
    }
    const token = jwt.sign(JSON.stringify(data), process.env.JWT_SESSION_KEY!);
    const token2 = jwt.sign(JSON.stringify(redirectData), process.env.JWT_SESSION_KEY!);
    const shareUrl = `http://${ctx.req.headers.host}${ctx.resolvedUrl}/display?t=${encodeURIComponent(token)}`;
    const redirectUrl = `http://${ctx.req.headers.host}${ctx.resolvedUrl}/display?t=${encodeURIComponent(token2)}`;
    return {
        props: {
            shareUrl,
            redirectUrl,
        }
    }
}

export default DemoPage;