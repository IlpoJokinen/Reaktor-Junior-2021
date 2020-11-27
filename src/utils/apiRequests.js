
export const fetchJackets = (setJackets) => {
    try {
        fetch('https://bad-api-assignment.reaktor.com/products/jackets')
            .then(response => response.json())
            .then(data => setJackets(data))
    } catch (error) {
        console.log(error)
    }
}

export const fetchShirts = (setShirts) => {
    try {
        fetch('https://bad-api-assignment.reaktor.com/products/shirts')
            .then(response => response.json())
            .then(data => setShirts(data))
    } catch (error) {
        console.log(error)
    }
}

export const fetchAccessories = (setAccessories) => {
    try {
        fetch('https://bad-api-assignment.reaktor.com/products/accessories')
            .then(response => response.json())
            .then(data => setAccessories(data))
    } catch (error) {
        console.log(error)
    }
}

export const fetchManufacturersAvailability = async (manufacturer, id, setAvailability) => {
    try {
        let availability
        setAvailability(prevState => ({ ...prevState, loading: true }))
        await fetch(`https://bad-api-assignment.reaktor.com/availability/${manufacturer}`)
            .then(response => response.json())
            .then(data => {
                const productsAvailability = data.response.find((obj) => obj.id === id.toUpperCase())
                availability = productsAvailability.DATAPAYLOAD.split(/['>', '</]/)[6]
            })
        setAvailability(prevState => ({ ...prevState, loading: false, status: availability }))
    } catch (error) {
        setAvailability(prevState => ({ ...prevState, error: true, loading: null }))
    }
}