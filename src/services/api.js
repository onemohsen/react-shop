export const get = async (url) => {
        const data = await fetch(url);
        const result = await data.json();
        return result;
}

export const post = async (url, data) => {
        const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                        "Content-Type": "application/json"
                }
        });
        const result = await response.json();
        return result;
}