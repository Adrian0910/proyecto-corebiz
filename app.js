const crearContenido = async () => {
  const response = await fetch(
    'https://corebiz-test.herokuapp.com/api/v1/products',
  )
  const data = await response.json()
  console.log(data)
  //console.log(data[0])
  data.forEach((item) => {
    document.getElementById('apiProducto').appendChild(crearProducto(item))
  })
}

function crearProducto(producto) {

  const div = document.createElement('div')
  div.classList.add('card__image')
  /* 
  const a = document.createElement('a')
  a.href = producto.imageUrl 

   const h3 = document.createElement('h3')
  h3.classList.add('title')
  h3.textContent = producto.productName

  const img = document.createElement('img')
  img.src = `${producto.imageUrl}`
  */

  const img = document.createElement('img')
  img.src = `${producto.imageUrl}`

  const h3 = document.createElement('h3')
  h3.classList.add('card__title')
  h3.textContent = producto.productName

  const divStar = document.createElement('span')
  divStar.innerHTML = producto.installments

  div.appendChild(img)
  //h3.appendChild(h3)
  divStar.appendChild(span)

  return div
}

window.onload = crearContenido()
