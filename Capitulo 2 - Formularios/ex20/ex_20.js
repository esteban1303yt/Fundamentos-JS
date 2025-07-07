function saludo(){
    swal('¡Hola mundo!')
}

function saludoPersonalizado(){
    swal({
        title: '¡Que tal mundo!',
        text: 'Bienvenidos al curso fundamentos de Javascript',
        icon: 'success',
        button: '¡Engine!'
    })
}