const getData = async (urlApi) => {
    try {
        return (await axios.get(urlApi)).data
    }catch (e) {
        console.error(e)
    }
}

export default getData;