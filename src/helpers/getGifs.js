export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=50&api_key=kyhPYTiwhQpImN42N6NFDW9rKJRSsbDD`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => 
        ({
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        })
    );

    return gifs;

}