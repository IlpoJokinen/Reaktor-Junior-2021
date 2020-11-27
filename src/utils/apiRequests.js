
export const fetchJackets = (setJackets) => {
    fetch('https://bad-api-assignment.reaktor.com/products/jackets')
        .then(response => response.json())
        .then(data => setJackets(data))
}

export const fetchShirts = (setShirts) => {
    fetch('https://bad-api-assignment.reaktor.com/products/shirts')
        .then(response => response.json())
        .then(data => setShirts(data))
}

export const fetchAccessories = (setAccessories) => {
    fetch('https://bad-api-assignment.reaktor.com/products/accessories')
        .then(response => response.json())
        .then(data => setAccessories(data))
}

export const fetchManufacturersAvailability = async (manufacturer, id, setAvailability) => {
    let availability
    setAvailability(prevState => ({ ...prevState, loading: true }))
    await fetch(`https://bad-api-assignment.reaktor.com/availability/${manufacturer}`)
        .then(response => response.json())
        .then(data => {
            const productsAvailability = data.response.find((obj) => obj.id === id.toUpperCase())
            availability = productsAvailability.DATAPAYLOAD.split(/['>', '</]/)[6]
        })
    setAvailability(prevState => ({ ...prevState, loading: false, status: availability }))

    return
}