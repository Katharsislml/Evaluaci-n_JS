function TipoMotor ()
{var bomb = prompt('¿Qué tipo de motor buscas?, Escribe 1, 2 ,3 o 4, dependiendo de tu elección' )
switch (bomb)
    {
    case '1':
        {
            alert('La bomba es una bomba de agua')
            break
        }
    case '2':
            {
            alert('La bomba es una bomba de gasolina')
            break
            }
    case '3':
            {
            alert('La bomba es una bomba de hormigón')
            break
            }
    case '4':
            {
            alert('La bomba es una bomba de pasta alimenticia')
            break
            } 
        default:
            alert('No existe un valor válido para tipo de bomba')
                    
    } 
        
}

TipoMotor ()