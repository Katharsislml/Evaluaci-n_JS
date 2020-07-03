function ObtenerImporteConImpuestos(valor, tipo) {
    var valorConImpuesto = 0
    switch (tipo) {
        case 1:
            valorConImpuesto = (valor*0.21)+valor ;
            break
        case 2:
            valorConImpuesto = (valor*0.10)+valor ;
            break
        case 3:
            valorConImpuesto = (valor*0.05)+valor ;
            break
        default:    
            alert('Tipo desconocido')
    
    }   
    alert(valorConImpuesto)
}

var tipo = parseInt(prompt('Ingresa el tipo de producto, elige 1, 2 o 3 de acuerdo a tu necesidad'))
var valor = parseInt(prompt('Ingresa el valor del producto'))

ObtenerImporteConImpuestos(valor, tipo)