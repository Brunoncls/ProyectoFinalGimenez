//Simulador interactivo de intereses plazo fijo ,entregable n°2


let botonIntCompuesto = document.getElementById("botonIntCompuesto")
let botonIntSimple = document.getElementById("botonIntSimple")


function calculoInteresCompuesto(event){

event.preventDefault()

let montoIngresado = document.getElementById("montoIngresado").value
let meses = document.getElementById("meses").value
let porcentaje = document.getElementById("porcentaje").value 

const interesMensual = porcentaje/12
let interesDecimal = interesMensual/100

//console.log(interesMensual)

const evolucionPlazo = []
 
let resultado
 
if (isNaN(montoIngresado) || isNaN(meses)|| isNaN(porcentaje)) {
    console.log("Al menos uno de los datos ingresados no es válido.");
    alert("Por favor, ingrese valores numéricos válidos.");
}else{
    
    for(let i=1 ; i <= meses ; i++){
    resultado = montoIngresado * Math.pow(1+interesDecimal,i)
    resultado =resultado.toFixed(2)
    console.log(resultado)

    evolucionPlazo.push(resultado)
   
}  
}

const respuesta = document.getElementById("respuesta")
respuesta.textContent = `En el mes ${meses} tendra $ ${evolucionPlazo[meses-1]}`

sessionStorage.setItem("Result Compuesto",evolucionPlazo[meses-1])
}



function calculoInteresSimple(event){

    event.preventDefault()
    
    let montoIngresado = document.getElementById("montoIngresado").value
    let meses = document.getElementById("meses").value
    let porcentaje = document.getElementById("porcentaje").value 
    
    const interesMensual = porcentaje/12
    let interesDecimal = interesMensual/100
    
    console.log(interesMensual)
    
    const evolucionPlazo = []
     
    let resultado
     
    if (isNaN(montoIngresado) || isNaN(meses)|| isNaN(porcentaje)) {
        console.log("Al menos uno de los datos ingresados no es válido.");
        alert("Por favor, ingrese valores numéricos válidos.");
    }else{
        
        for(let i=1 ; i <= meses ; i++){
        resultado = montoIngresado *  (1+(interesDecimal*i)) 
        resultado =resultado.toFixed(2)
        console.log(resultado)
    
        evolucionPlazo.push(resultado)
       
    }  
    }
    
    const respuesta = document.getElementById("respuesta")
    respuesta.textContent = `En el mes ${meses} tendra $ ${evolucionPlazo[meses-1]}`
    
    sessionStorage.setItem("Result Simple",evolucionPlazo[meses-1])
    }
 

botonIntCompuesto.addEventListener("click",calculoInteresCompuesto)
botonIntSimple.addEventListener("click",calculoInteresSimple)