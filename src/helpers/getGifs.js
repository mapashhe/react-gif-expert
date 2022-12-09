export const getGifs = async(catego) => {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=H8gPTGUbunKQLKrycuclMarNeyFv7lwe&q=${catego}&limit=10`;
    const resp = await fetch(apiUrl);
    const {data} = await resp.json();
    const gifs = data.map( (img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}