import Image from "next/image";

const ShareQr = ({ qrUrl }: {
    qrUrl: string;
}) => {
    return (
        <div>
            <h2>
                share to see the content!
            </h2>
            <Image
                src={qrUrl}
                width={1}
                height={1}
                objectFit='fill'
                layout="responsive"
            />
        </div>
    );
}

export default ShareQr;