import axios from 'axios';

export function generateUrlFromBuffer(data: ArrayBuffer, type: string = 'image/png'): string {
    let blob = new Blob(
        [data],
        { type }
    )
    let imgUrl = URL.createObjectURL(blob)
    return imgUrl;
}

export async function getQrImage(data: string, size: number = 200): Promise<ArrayBuffer | undefined> {
    try {
        const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}`;

        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        if (response.status !== 200) throw new Error('can not fetch qr code');
        return response.data;
    } catch (err) {
        console.log(String(err))
    }
}

export async function generateQr(data: string): Promise<string | undefined> {
    const imageBuffer = await getQrImage(data);
    return generateUrlFromBuffer(imageBuffer!);
}
