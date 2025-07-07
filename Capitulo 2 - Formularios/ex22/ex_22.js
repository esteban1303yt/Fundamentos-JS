function seleccion(){
    if(document.getElementById('r1').checked){
        swal('Horario de 08:00 a.m hasta 12:00 p.m');
    }
    if(document.getElementById('r2').checked){
        swal('Horario de 02:00 p.m hasta 06:00 p.m');
    }
    if(document.getElementById('r3').checked){
        swal('Horario de 07:00 p.m hasta 10:00 p.m');
    }
}