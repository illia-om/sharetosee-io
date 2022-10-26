import Image from "next/image";
import Link from "next/link";
import s from './share-qr.module.css';

const ShareQr = ({ qrUrl, redirectUrl }: {
    qrUrl: string;
    redirectUrl?: string;
}) => {
    return (
        <div className={s.container}>
            <h2>
                share to see the content!
            </h2>
            <div className={s.img}>
                <Image
                    src={qrUrl}
                    width={1}
                    height={1}
                    objectFit='fill'
                    layout="responsive"
                />
            </div>
            {redirectUrl ? (<Link href={redirectUrl}>
                <a>Go to page</a>
            </Link>) : (<></>)}
        </div>
    );
}

export default ShareQr;