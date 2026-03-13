    const productos = {
    'acero_estructural': {
        titulo: 'Acero Estructural',
        descripcion: 'Componente esencial para construcción estructural...',
        imagen: 'img/beam1.jpeg',
        tabla:[
            ['3/8"', '0.560', '12.0', 'Disponible'],
            ['3/8"', '0.560', '12.0', 'Disponible'],
        ]
    },
    'cuadrado': {
        titulo: 'Cuadrado y Rectangulo',
        descripcion: 'Acero de refuerzo con superficie corrugada...',
        imagen: 'img/rectangulo.jpeg',
        tabla: [
            ['3/8"', '0.560', '12.0', 'Disponible'],
            ['1/2"', '0.994', '12.0', 'Disponible'],
        ]
    },
    'placa-aleacion':{
        titulo: 'Plato',
        imagen: 'img/plate.jpeg',
        tabla: [
            ['3/8"', '0.560', '12.0','Disponible'],
            ['1/2"', '0.994', '12.0','Disponible'],
        ]
    },    
};

// 1. Obtener el ID de la URL
const urlParams = new URLSearchParams(window.location.search);
const idProducto = urlParams.get('id');

// 2. Buscar los datos
const data = productos[idProducto];

if (data) {
    document.getElementById('titulo-producto').innerText = data.titulo;
    document.getElementById('descripcion-producto').innerText = data.descripcion;
    document.getElementById('imagen-producto').src = data.imagen;

    // Generar la tabla de medidas
    let tablaHTML = `<table><tr><th>Medida</th><th>Peso</th><th>Largo</th><th>Status</th></tr>`;
    data.tabla.forEach(fila => {
        tablaHTML += `<tr><td>${fila[0]}</td><td>${fila[1]}</td><td>${fila[2]}</td><td>${fila[3]}</td></tr>`;
    });
    tablaHTML += `</table>`;
    document.getElementById('tabla-especificaciones').innerHTML = tablaHTML;
}
