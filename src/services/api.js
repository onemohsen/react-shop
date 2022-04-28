export const get = async (url) => {
        const data = await fetch(url);
        const result = await data.json();
        return result;
}