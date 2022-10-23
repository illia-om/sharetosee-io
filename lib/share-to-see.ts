import axios from 'axios';

export async function generateQr(path: string): Promise<string | undefined> {
    try {
        const session = 'session1'
        const urlToEncode = `${path}/${session}?screens=2&display=2`;
        const size = 200;
        const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(urlToEncode)}`;
        console.log('apiUrl: ', apiUrl);

        const method: number = 2;
        switch (method) {
            case 1:
                const response = await axios.get(apiUrl);
                if (response.status !== 200) throw new Error('can not fetch qr code');
                var b64Response = Buffer.from(response.data, 'base64');
                let blob = new Blob([b64Response], { type: 'image/png' });
                let link = URL.createObjectURL(blob);
                console.log('link: ', link);
                return link;
            case 2:
                const response2 = await (await fetch(apiUrl)).blob();
                const url2 = URL.createObjectURL(response2);
                console.log('objectURL: ', url2);
                return url2;
            case 3:
                const response3 = await axios.get(apiUrl, { responseType: 'arraybuffer' });
                if (response3.status !== 200) throw new Error('can not fetch qr code');
                let blob3 = new Blob(
                    [response3.data],
                    { type: response3.headers['content-type'] }
                )
                let imgUrl = URL.createObjectURL(blob3)
                console.log('imgUrl ', imgUrl);
                return imgUrl;
            case 4:
                const response4 = await axios.get(apiUrl);
                if (response4.status !== 200) throw new Error('can not fetch qr code');
                var b64Response = Buffer.from(response4.data, 'base64');
                const url4 = `data:image/png;base64,${b64Response.toString('ascii')}`;

                console.log('link: ', url4);
                return url4;
        }
    } catch (err) {
        console.log(String(err))
    }
}