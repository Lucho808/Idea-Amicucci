const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() 
})

let stockProductos = [
    {id: 1, nombre: "Buzo 1", tipo: "buzo", cantidad: 1, desc: "Un buzo que re va con vos", precio: 1200, talle: "L", img: './img/buzo1.jpg'},
    {id: 2, nombre: "Buzo 2", tipo: "buzo", cantidad: 1, desc: "Un buzo que re va con vos", precio: 1100, talle: "L", img: './img/buzo1.jpg'},
    {id: 3, nombre: "Buzo 3", tipo: "buzo", cantidad: 1, desc: "Un buzo que re va con vos", precio: 1200, talle: "M", img: './img/buzo1.jpg'},
    {id: 4, nombre: "Buzo 4", tipo: "buzo", cantidad: 1, desc: "Un buzo que re va con vos", precio: 1400, talle: "M", img: './img/buzo1.jpg'},
    {id: 5, nombre: "Buzo 5", tipo: "buzo", cantidad: 1, desc: "Un buzo que re va con vos", precio: 1200, talle: "S", img: './img/buzo1.jpg'},
    {id: 6, nombre: "Buzo 6", tipo: "buzo", cantidad: 1, desc: "Un buzo que re va con vos", precio: 1500, talle: "S", img: './img/buzo1.jpg'},
    {id: 7, nombre: "Remera 1", tipo: "remera", cantidad: 1, desc: "Una remera que re va con vos", precio: 500, talle: "L", img: './img/remera2.jpg'},
    {id: 8, nombre: "Remera 2", tipo: "remera", cantidad: 1, desc: "Una remera que re va con vos", precio: 500, talle: "L", img: './img/remera2.jpg'},
    {id: 9, nombre: "Remera 3", tipo: "remera", cantidad: 1, desc: "Una remera que re va con vos", precio: 500, talle: "M", img: './img/remera2.jpg'},
    {id: 10, nombre: "Remera 4", tipo: "remera", cantidad: 1, desc: "Una remera que re va con vos", precio: 700, talle: "M", img: './img/remera2.jpg'},
    {id: 11, nombre: "Remera 5", tipo: "remera", cantidad: 1,desc: "Una remera que re va con vos", precio: 700, talle: "S", img: './img/remera2.jpg'},
    {id: 12, nombre: "Remera 6", tipo: "remera", cantidad: 1, desc: "Una remera que re va con vos", precio: 700, talle: "S", img: './img/remera2.jpg'},
    {id: 13, nombre: "Camisa 1", tipo: "camisa", cantidad: 1, desc: "Una camisa que re va con vos", precio: 900, talle: "L", img: './img/camisa1.jpg'},
    {id: 14, nombre: "Camisa 2", tipo: "camisa", cantidad: 1, desc: "Una camisa que re va con vos", precio: 1400, talle: "S", img: './img/camisa1.jpg'},
    {id: 15, nombre: "Camisa 3", tipo: "camisa", cantidad: 1, desc: "Una camisa que re va con vos", precio: 7000, talle: "L", img: './img/camisa1.jpg'},
    {id: 16, nombre: "Camisa 4", tipo: "camisa", cantidad: 1, desc: "Una camisa que re va con vos", precio: 777, talle: "S", img: './img/camisa1.jpg'},
    {id: 17, nombre: "Camisa 5", tipo: "camisa", cantidad: 1, desc: "Una camisa que re va con vos", precio: 234, talle: "S", img: './img/camisa1.jpg'},
    {id: 18, nombre: "Camisa 6", tipo: "camisa", cantidad: 1, desc: "Una camisa que re va con vos", precio: 155600, talle: "M", img: './img/camisa1.jpg'},
    {id: 19, nombre: "Pantalon 1", tipo: "pantalon", cantidad: 1, desc: "Una pantalon que re va con vos", precio: 1600, talle: "L", img: './img/pantalon1.jpg'},
    {id: 20, nombre: "Pantalon 2", tipo: "pantalon", cantidad: 1, desc: "Una pantalon que re va con vos", precio: 3200, talle: "L", img: './img/pantalon1.jpg'},
    {id: 21, nombre: "Pantalon 3", tipo: "pantalon", cantidad: 1, desc: "Una pantalon que re va con vos", precio: 2300, talle: "M", img: './img/pantalon1.jpg'},
    {id: 22, nombre: "Pantalon 4", tipo: "pantalon", cantidad: 1, desc: "Una pantalon que re va con vos", precio: 5600, talle: "M", img: './img/pantalon1.jpg'},
    {id: 23, nombre: "Pantalon 5", tipo: "pantalon", cantidad: 1, desc: "Una pantalon que re va con vos", precio: 1700, talle: "S", img: './img/pantalon1.jpg'},
    {id: 24, nombre: "Pantalon 6", tipo: "pantalon", cantidad: 1, desc: "Una pantalon que re va con vos", precio: 800, talle: "S", img: './img/pantalon1.jpg'},
]

const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito') //modifico los contadores
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

    document.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('carrito')){
            carrito = JSON.parse(localStorage.getItem('carrito'))
            actualizarCarrito()
        }
    })

    botonVaciar.addEventListener('click', () => {
            carrito.length = 0
            actualizarCarrito()
    })

//INYECTAR EL HTML
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
                    <img src=${producto.img} alt= "">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.desc}</p>
                    <p>Talle: ${producto.talle}</p>
                    <p class="precioProducto">Precio:$ ${producto.precio}</p>
                    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
                    `

    contenedorProductos.appendChild(div)

    //inserto el html en el DOM
    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })
})

const agregarAlCarrito = (prodId) => {

    const existe = carrito.some (prod => prod.id === prodId)

    if (existe){ 
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })

    } else { 
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    
    actualizarCarrito() 
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item) //Busca el elemento que yo le pase y nos devuelve su indice.
        carrito.splice(indice, 1)           
        actualizarCarrito()                
        console.log(carrito)
}

const actualizarCarrito = () => { 
    contenedorCarrito.innerHTML = "" /* C/vez q llame a actualizarCarrito, lo primero q hago es borrar,
                                        despues recorro el array y actualizo */
    carrito.forEach((prod) => {
        const div = document.createElement('div')
            div.className = ('productoEnCarrito')
            div.innerHTML = `
                        <p>${prod.nombre}</p>
                        <p>Precio:$${prod.precio}</p>
                        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
                        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                            `

        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    
    contadorCarrito.innerText = carrito.length // actualiza con la longitud del carrito
    console.log(carrito)

    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por c/producto q recorro en mi carrito, al acumulador le suma la propiedad precio, con el acumulador empezando en 0

}







