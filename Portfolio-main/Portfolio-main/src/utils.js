export const getImageUrl =(path) =>{
    return new URL (`https://portfolio-fsro.vercel.app/assets/${path}`,import.meta.url).href;
}
