import axios from 'axios';

export async function generateQr(path: string): Promise<string | undefined> {
    try {
        const session = 'session1'
        const urlToEncode = `${path}/${session}?screens=2&display=2`;
        const size = 200;
        const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(urlToEncode)}`;
        console.log('apiUrl: ', apiUrl);

        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        if (response.status !== 200) throw new Error('can not fetch qr code');
        let blob = new Blob(
            [response.data],
            { type: response.headers['content-type'] }
        )
        let imgUrl = URL.createObjectURL(blob)
        return imgUrl;
    } catch (err) {
        console.log(String(err))
    }
}