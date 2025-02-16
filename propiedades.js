const propiedades_venta = [
    {
    nombre: 'Casa 1',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Casa en Venta Monaco',
    ubicacion: 'Los Olmos',
    habitaciones: 6,
    costo: 29000000,
    smoke: true,
    pets: false
    },
    {
        nombre: 'Casa 2',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Casa en Venta Milan',
        ubicacion: 'Los Platanos',
        habitaciones: 3,
        costo: 28000000,
        smoke: false,
        pets: true
        },
    {
    nombre: 'Casa 3',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Casa en Venta New York',
    ubicacion: 'Av. Macul',
    habitaciones: 5,
    costo: 27000000,
    smoke: false,
    pets: false
    },
    {
        nombre: 'Casa 4',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Casa en Venta Paris',
        ubicacion: 'Armando Moock',
        habitaciones: 5,
        costo: 32000000,
        smoke: true,
        pets: true
    },{
        nombre: 'Casa 5',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Casa en Venta Barcelona',
        ubicacion: 'Exequiel Fernandez',
        habitaciones: 3,
        costo: 21000000,
        smoke: true,
        pets: true
    }
    ,{
        nombre: 'Casa 6',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Casa en Venta Londres',
        ubicacion: 'Av. Quilin',
        habitaciones: 6,
        costo: 42000000,
        smoke: true,
        pets: true
    }
    ]

    const propiedades_alquiler = [
        {
        nombre: 'Casa 1',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Linda Casa Azul',
        ubicacion: 'Los Olmos',
        habitaciones: 4,
        costo: 900000,
        smoke: true,
        pets: false
        },
        {
            nombre: 'Casa 2',
            src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
            descripcion: 'Linda Casa Blanca',
            ubicacion: 'Los Platanos',
            habitaciones: 3,
            costo: 1200000,
            smoke: false,
            pets: true
            },
        {
        nombre: 'Casa 3',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Linda Casa Rosa',
        ubicacion: 'Av. Macul',
        habitaciones: 4,
        costo: 1000000,
        smoke: false,
        pets: false
        },
        {
            nombre: 'Casa 4',
            src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
            descripcion: 'Linda Casa Verde',
            ubicacion: 'Armando Moock',
            habitaciones: 5,
            costo: 2000000,
            smoke: true,
            pets: true
        },{
            nombre: 'Casa 5',
            src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
            descripcion: 'Linda Casa Naranja',
            ubicacion: 'Exequiel Fernandez',
            habitaciones: 4,
            costo: 1000000,
            smoke: true,
            pets: true
        }
        ,{
            nombre: 'Casa 6',
            src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
            descripcion: 'Linda Casa Marron',
            ubicacion: 'Av. Quilin',
            habitaciones: 6,
            costo: 2100000,
            smoke: true,
            pets: true
        }
        ]


    const propiedadesSection = document.querySelector(".row");

    if (propiedadesSection.id === "alquilerPage") {
        // Solo cargar propiedades de alquiler
        for (const propiedad of propiedades_alquiler) {
            propiedadesSection.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img
                            src="${propiedad.src}"
                            class="card-img-top"
                            alt="Imagen del departamento"
                        />
                        <div class="card-body">
                            <h5 class="card-title">
                                ${propiedad.nombre}
                            </h5>
                            <p class="card-text">
                                ${propiedad.descripcion}
                            </p>
                            <p>
                                <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                            </p>
                            <p>
                                <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones
                            </p>
                            <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                            ${propiedad.smoke ? 
                                `<p class="text-success">
                                    <i class="fas fa-smoking"></i> Permitido fumar
                                </p>` :
                                `<p class="text-danger">
                                    <i class="fas fa-smoking-ban"></i> No se permite fumar
                                </p>`
                            }
                            ${propiedad.pets ? 
                                `<p class="text-success">
                                    <i class="fas fa-paw"></i> Mascotas permitidas
                                </p>` :
                                `<p class="text-danger">
                                    <i class="fa-solid fa-ban"></i> No se permiten mascotas
                                </p>`
                            }
                        </div>
                    </div>
                </div>
            `;
        }
    } else if (propiedadesSection.id === "ventaPage") {
        // Solo cargar propiedades de venta
        for (const propiedad of propiedades_venta) {
            propiedadesSection.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img
                            src="${propiedad.src}"
                            class="card-img-top"
                            alt="Imagen del departamento"
                        />
                        <div class="card-body">
                            <h5 class="card-title">
                                ${propiedad.nombre}
                            </h5>
                            <p class="card-text">
                                ${propiedad.descripcion}
                            </p>
                            <p>
                                <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                            </p>
                            <p>
                                <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones
                            </p>
                            <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                            ${propiedad.smoke ? 
                                `<p class="text-success">
                                    <i class="fas fa-smoking"></i> Permitido fumar
                                </p>` :
                                `<p class="text-danger">
                                    <i class="fas fa-smoking-ban"></i> No se permite fumar
                                </p>`
                            }
                            ${propiedad.pets ? 
                                `<p class="text-success">
                                    <i class="fas fa-paw"></i> Mascotas permitidas
                                </p>` :
                                `<p class="text-danger">
                                    <i class="fa-solid fa-ban"></i> No se permiten mascotas
                                </p>`
                            }
                        </div>
                    </div>
                </div>
            `;
        }
    }