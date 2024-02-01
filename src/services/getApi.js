export const getApi = async (urlAPI, setData) => {
    const urlFile = urlAPI;

    try {
        const response = await fetch(urlFile);
        const data = await response.json();
        setData(data.photos)
    } catch(error) {
        console.log(error)
    }
}