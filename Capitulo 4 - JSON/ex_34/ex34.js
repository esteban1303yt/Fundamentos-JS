/*
400 Mal solicitado  
401 No autorizado  

Resumen:  
Las promesas y las solicitudes http son muy importantes en javascript para poder  
manejar la asincronía y la comunicación con servidores externos y con ellos se pueden  
crear aplicaciones dinámicas responsivas que pueden actualizarse y cambien en tiempo  
real sin bloquear la ejecución del resto de las aplicaciones.  

Catch: La funcionalidad catch es un método que se utiliza en promesas para manejar  
posibles errores, es una fírma de atrapar a cualquier error que ocurra en el código  
dentro de una promesa y realizar una acción específica en caso de que ocurra dicho  
error. */  

// let datosJson;  
// fetch('./Cap.4.JSON/ex32_practica_biblioteca/libros.json')  
//     .then(res => res.json())  
//     .then((salida) => {  
//         datosJson = salida;  
//         let elementoTexto = document.getElementById('titulo');  
//         elementoTexto.textContent = datosJson.biblioteca[0].titulo;  
//     })  
//     .catch(function(error){alert(error);}); */


let datosJson;
fetch (`/ex_32_practica/libros.json`)
    .then(res => res.json())
    .then((salida) => {
        const contenedor = document.getElementById('contenedor');
        salida.biblioteca.forEach((libro, index) => {
            const divLibro = document.createElement('div');
            divLibro.innerHTML = `
                <h3>Libro ${index + 1}</h3>
                <p><strong>Título:</strong> ${libro.titulo || 'No definido'}</p>
                <p><strong>Editorial:</strong> ${libro.editorial || 'No definido'}</p>
                <p><strong>Edición:</strong> ${libro.edicion || 'No definida'}</p>
                <p><strong>ISBN:</strong> ${libro.isbn || 'No definido'}</p>
                <p><strong>Autor principal:</strong> ${libro.autores["autor principal"] || 'No definido'}</p>
                <p><strong>Código SENA:</strong> ${libro["codigo sena"].join(', ') || 'No definido'}</p>
                <p><strong>Descripción:</strong> ${libro.descripcion || 'No definida'}</p>
                <hr>
            `;
            contenedor.appendChild(divLibro);
        });
    })
    .catch(error => alert("Error: " + error));