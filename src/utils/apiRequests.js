
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

export const fetchManufacturersAvailability = (manufacturer, id) => {
    fetch(`https://bad-api-assignment.reaktor.com/availability/${manufacturer}`)
        .then(response => response.json())
        .then(data => {
            console.log('haloo')
            const productsAvailability = data.response.find((obj) => obj.id === id.toUpperCase())
            console.log('availability', productsAvailability.DATAPAYLOAD.split(/['>', '</]/)[6])
        })
}