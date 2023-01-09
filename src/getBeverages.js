const getBeverages = async (url, callback) => {

    const response = await fetch(url);

    if (response.ok) {

        const data = await response.json();

        return callback(data);

    } else {

        console.log('HTTP error', response.status)

    }
}

export default getBeverages;