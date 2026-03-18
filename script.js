//Variables
let ClientName = prompt("Ingrese su nombre")
let Price = prompt("Ingrese el precio del producto")
let Unities = prompt("Ingrese el numero de unidades")
let Discount = prompt("Ingrese el codigo de descuento")
let subtotal = (Price*Unities)
let rebaja = (Discount*0.01)

// Calculos
alert(`El subtotal de su compra es de ${subtotal}`)
alert(`Al añadirle el descuento el precio es de ${subtotal*rebaja}`)

//Domicilio
if (subtotal>30000) { 
alert("El domicilio es gratuito")
}else {
    alert (`El precio con el domicilio es de ${subtotal+5000}`)
}

if (Discount>50) {
    prompt("Codigo de descuento invalido")
}