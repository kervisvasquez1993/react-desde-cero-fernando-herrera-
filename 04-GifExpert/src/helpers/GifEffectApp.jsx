
export const GifEffectApp = async ( category ) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=oRwwTnYsjNfKhxPTJ6XnMQ3jAqvZqEu3&q=${category}&limit=3`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gif = data.map(img => ({
        id : img.id,
        title : img.title,
        url : img.images.downsized_medium.url
    }))
    return gif;
    // console.log(data)
    return ;
};
