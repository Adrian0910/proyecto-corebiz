const crearContenido = async () => {
  const response = await fetch(
    'https://corebiz-test.herokuapp.com/api/v1/products',
  )
  const data = await response.json()

  //console.log(data[0])
  data.forEach((item) => {
    document.getElementById('apiProducto').appendChild(crearProducto(item))
  })
}

function crearProducto(producto) {
  const div = document.createElement('div')
  //div.classList.add('card__img')

  const img = document.createElement('img')
  img.src = `${producto.imageUrl}`
  img.classList.add('card__img')

  const h3 = document.createElement('h3')
  h3.textContent = `${producto.productName}`
  h3.classList.add('card__title')

  const stars = document.createElement('p')
  stars.textContent = `${producto.stars}`



  /* consoles */
  console.log(Object.values(producto.installments))
  console.log(producto)
  /* consoles */

  const tachado = document.createElement('span')
  tachado.textContent = 'de $399'
  tachado.classList.add('tachado')

  const precio = document.createElement('span')
  precio.textContent = `por $${producto.price}`
  precio.classList.add('card__info')

  const info = document.createElement('div')
  info.textContent = `${producto.installments.values[0]}`
  info.classList.add('card__title')

  const button = document.createElement('button')
  button.textContent = `COMPRAR`
  button.classList.add('card__btn')

  div.appendChild(img)
  div.appendChild(h3)
  div.appendChild(stars)
  div.appendChild(tachado)
  div.appendChild(precio)
  div.appendChild(info)
  div.appendChild(button)

  return div
}

window.onload = crearContenido()
