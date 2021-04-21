const crearContenido = async () => {
    const response = await fetch('https://corebiz-test.herokuapp.com/api/v1/products')
    const data = await response.json()
    console.log(data)
}

crearContenido()