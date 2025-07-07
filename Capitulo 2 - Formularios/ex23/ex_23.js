let area = document.getElementById('comentarios')
area.style.resize = 'none';

function comentar(){
    const comentario = document.getElementById('comentarios').
    value.trim();

    if(comentario.length === 0){
        swal('Usted no ha digitado ninguna letra, por favor escriba antes de enviar.')
    } else if (comentario.length > 100) {
        swal('El comentario es muy largo, sintetice la idea y vuelva a escribir.')
    } else {
        swal('¡Gracias por sus comentarios!')
    }
}