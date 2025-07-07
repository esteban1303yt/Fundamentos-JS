function seleccion(){
    let cantidad = 0; //Esta cantidad se ira sumando a medida qe se escoja o se seleccione un lenguaje dento de la programacion

    if(document.getElementById('check1').checked){
        cantidad++;
    }
    if(document.getElementById('check2').checked){
        cantidad++;
    }
    if(document.getElementById('check3').checked){
        cantidad++;
    }
    if(document.getElementById('check4').checked){
        cantidad++;
    }
    if(document.getElementById('check5').checked){
        cantidad++;
    }
    if(cantidad===1){
        swal(`Conoces ${cantidad} lenguaje de programación`)
    } else {
        swal(`Conoces ${cantidad} lenguajes de programación`)
    }
}