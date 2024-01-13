window.addEventListener("load", inicio);

function inicio() {

    ocultarAlInicio();
    precargarDatos();

    //MENU
    //Tipo importador
    document.querySelector("#mnuCerrarSesionI").addEventListener("click", cerrarSesion);
    document.querySelector("#mnuMostrarInicioI").addEventListener("click", mostrarInicioImportador);
    document.querySelector("#mnuCrearSolicitud").addEventListener("click", mostrarCrearSolicitud);
    document.querySelector("#mnuCrearSolicitud").addEventListener("click", cargarSelectEmpresaCrearSolicitud);
    document.querySelector("#mnuConsultarYCancelarSolicitudesPendientes").addEventListener("click", mostrarConsultarYCancelarSolicitudesPendientes);
    document.querySelector("#mnuConsultarYCancelarSolicitudesPendientes").addEventListener("click", mostrarSolicitudesPendientes);
    document.querySelector("#mnuEstadisticas").addEventListener("click", mostrarEstadisticas);

    //Tipo empresa
    document.querySelector("#mnuCerrarSesionE").addEventListener("click", cerrarSesion);
    document.querySelector("#mnuMostrarInicioE").addEventListener("click", mostrarInicioEmpresa);
    document.querySelector("#mnuCrearViaje").addEventListener("click", mostrarCrearViaje);
    document.querySelector("#mnuManifiestoDeCarga").addEventListener("click", mostrarManifiestoDeCarga);
    document.querySelector("#mnuManifiestoDeCarga").addEventListener("click", mostrarSelectManifiestoDeCarga);
    document.querySelector("#mnuConfirmarSolicitudDeCarga").addEventListener("click", mostrarConfirmarSolicitudCarga);
    document.querySelector("#mnuConfirmarSolicitudDeCarga").addEventListener("click", mostrarConfirmarSolicitudes);
    document.querySelector("#mnuHabilitarImportadores").addEventListener("click", mostrarHabilitarImportadores);
    document.querySelector("#mnuHabilitarImportadores").addEventListener("click", mostrarListadoHabilitarImportadores);
    document.querySelector("#mnuRollover").addEventListener("click", mostrarRollover);
    document.querySelector("#mnuRollover").addEventListener("click", mostrarSelectsRollover);
    document.querySelector("#mnuCargasPeligrosas").addEventListener("click", mostrarCargasPeligrosas);

    //FORMULARIOS
    document.querySelector("#btnRegistrarse").addEventListener("click", registrar);
    document.querySelector("#btnLogin").addEventListener("click", login);
    document.querySelector("#btnAltaViaje").addEventListener("click", crearViaje);
    document.querySelector("#btnAltaSolicitud").addEventListener("click", crearSolicitud);
    document.querySelector("#btnActualizarManifiestoDeCarga").addEventListener("click", mostrarListadoManifiestoDeCarga);
    document.querySelector("#btnConfirmarSolicitud").addEventListener("click", confirmarSolicitud);
    document.querySelector("#btnFiltrarSolicitudesPendientes").addEventListener("click", filtrarSolicitudesPendientes);
    document.querySelector("#btnCancelarSolicitud").addEventListener("click", cancelarSolicitud);
    document.querySelector("#btnMostrarListaCargaPeligrosa").addEventListener("click", armarListaCargaPeligrosa);
    document.querySelector("#btnActualizarEstadisticas").addEventListener("click", mostrarEstadisticas2);
}

//ACTIVACION Y DESACTIVACION DE FORMULARIOS
function mostrarInicioImportador() {
    ocultarFormulariosImportador();
    document.querySelector("#inicioImportador").style.display = "block";
}
function mostrarInicioEmpresa() {
    ocultarFormulariosEmpresa();
    document.querySelector("#inicioEmpresa").style.display = "block";
}
function mostrarFormulariosImportador() { //MUESTRA LOS FORMULARIOS UNICAMENTE DE IMPORTADOR
    document.querySelector("#inicioImportador").style.display = "block";
    document.querySelector("#crearSolicitudDeCarga").style.display = "block";
    document.querySelector("#consultarYCancelarSolicitudesPendientes").style.display = "block";
    document.querySelector("#estadisticas").style.display = "block";
}
function ocultarFormulariosImportador() { //OCULTA LOS FORMULARIOS UNICAMENTE DE IMPORTADOR
    document.querySelector("#inicioImportador").style.display = "none";
    document.querySelector("#crearSolicitudDeCarga").style.display = "none";
    document.querySelector("#consultarYCancelarSolicitudesPendientes").style.display = "none";
    document.querySelector("#estadisticas").style.display = "none";
}
function mostrarCrearSolicitud() {
    ocultarFormulariosImportador();
    document.querySelector("#crearSolicitudDeCarga").style.display = "block";
}
function mostrarConsultarYCancelarSolicitudesPendientes() {
    ocultarFormulariosImportador();
    document.querySelector("#consultarYCancelarSolicitudesPendientes").style.display = "block";
}
function mostrarEstadisticas() {
    ocultarFormulariosImportador();
    document.querySelector("#estadisticas").style.display = "block";
}
function mostrarFormulariosEmpresa() { //MUESTRA LOS FORMULARIOS UNICAMENTE DE EMPRESA
    document.querySelector("#inicioEmpresa").style.display = "block";
    document.querySelector("#crearViaje").style.display = "block";
    document.querySelector("#manifiestoDeCarga").style.display = "block";
    document.querySelector("#confirmarSolicitudDeCarga").style.display = "block";
    document.querySelector("#habilitarImportadores").style.display = "block";
    document.querySelector("#rollover").style.display = "block";
    document.querySelector("#cargasPeligrosas").style.display = "block";
}
function ocultarFormulariosEmpresa() { //OCULTA LOS FORMULARIOS UNICAMENTE DE EMPRESA
    document.querySelector("#inicioEmpresa").style.display = "none";
    document.querySelector("#crearViaje").style.display = "none";
    document.querySelector("#manifiestoDeCarga").style.display = "none";
    document.querySelector("#confirmarSolicitudDeCarga").style.display = "none";
    document.querySelector("#habilitarImportadores").style.display = "none";
    document.querySelector("#rollover").style.display = "none";
    document.querySelector("#cargasPeligrosas").style.display = "none";
}
function mostrarCrearViaje() {
    ocultarFormulariosEmpresa();
    document.querySelector("#crearViaje").style.display = "block";
}
function mostrarManifiestoDeCarga() {
    ocultarFormulariosEmpresa();
    document.querySelector("#manifiestoDeCarga").style.display = "block";
}
function mostrarConfirmarSolicitudCarga() {
    ocultarFormulariosEmpresa();
    document.querySelector("#confirmarSolicitudDeCarga").style.display = "block";
}
function mostrarHabilitarImportadores() {
    ocultarFormulariosEmpresa();
    document.querySelector("#habilitarImportadores").style.display = "block";
}
function mostrarRollover() {
    ocultarFormulariosEmpresa();
    document.querySelector("#rollover").style.display = "block";
}
function mostrarCargasPeligrosas() {
    let selectViaje = document.querySelector("#selectViajesCargaPeligrosa");
    ocultarFormulariosEmpresa();
    document.querySelector("#cargasPeligrosas").style.display = "block";
    document.querySelector("#selectViajesCargaPeligrosa").innerHTML
    selectViaje.innerHTML = "";

    for (let pos = 0; pos < listaViajes.length; pos++) {
        let Viaje = listaViajes[pos];
        if (Viaje.empresa == usuarioLogueado) {

            selectViaje.innerHTML += "<option value='" + Viaje.id + "'>" + Viaje.nombre + "</option>";
        }
    }
}

function ocultarAlInicio() { //OCULTA LOS FORMULARIOS NECESARIOS PARA CUANDO SE CARGA LA PAGINA
    document.querySelector("#login").style.display = "block";
    document.querySelector("#registro").style.display = "block";
    document.querySelector("#empresa").style.display = "none";
    document.querySelector("#importador").style.display = "none";
    document.querySelector("#navPrincipal").style.display = "none";
    document.querySelector("#navNormal").style.display = "none";
}
function ocultarTodo() {
    document.querySelector("#login").style.display = "none";
    document.querySelector("#registro").style.display = "none";
    document.querySelector("#empresa").style.display = "none";
    document.querySelector("#importador").style.display = "none";
    document.querySelector("#navPrincipal").style.display = "none";
    document.querySelector("#navNormal").style.display = "none";
}
function mostrarMenuImportador() {
    document.querySelector("#login").style.display = "none";
    document.querySelector("#registro").style.display = "none";
    document.querySelector("#empresa").style.display = "none";
    document.querySelector("#importador").style.display = "block";
    document.querySelector("#navPrincipal").style.display = "none";
    document.querySelector("#navNormal").style.display = "block";
    mostrarInicioImportador();
}
function mostrarMenuEmpresa() {
    document.querySelector("#login").style.display = "none";
    document.querySelector("#registro").style.display = "none";
    document.querySelector("#empresa").style.display = "block";
    document.querySelector("#importador").style.display = "none";
    document.querySelector("#navPrincipal").style.display = "block";
    document.querySelector("#navNormal").style.display = "none";
    mostrarInicioEmpresa();
}

//PRECARGA DE DATOS
function precargarDatos() {
    //USUARIOS EMPRESA
    agregarEmpresa("Hapag-Lloyd", "emp1", "Empresa1");
    agregarEmpresa("Maersk line", "emp2", "Empresa2");
    agregarEmpresa("Ocean Network Express", "emp3", "Empresa3");
    agregarEmpresa("Evergreen Marine", "emp4", "Empresa4");
    //USUARIOS IMPORTADOR
    listaUsuarios.push(new Importador("Juan", "juanM", "Juan1", "importador.jpg"));
    listaUsuarios.push(new Importador("Jose", "joseP", "Jose1", "importador.jpg"));
    listaUsuarios.push(new Importador("Laura", "lauraD", "Laura1", "importador.jpg"));
    listaUsuarios.push(new Importador("Ezequiel", "ezequielC", "Ezequiel1", "importador.jpg"));
    listaUsuarios[7].habilitado = false;
    listaUsuarios.push(new Importador("Elias", "eliasM", "Elias1", "importador.jpg"));
    //VIAJES
    agregarViaje("BuqueBus", 50, listaUsuarios[0], 20221201,);
    agregarViaje("BuqueMDV", 100, listaUsuarios[1], 20221210);
    agregarViaje("BarcoPLUS", 14, listaUsuarios[2], 20221120);
    agregarViaje("Buqueto", 80, listaUsuarios[3], 20221124);
    agregarViaje("Bucasio", 80, listaUsuarios[0], 20221126);
    //SOLICITUDES
    //Pendientes
    agregarSolicitud("CARGA_GENERAL", "Ropa", "ISA", listaUsuarios[0], 3, listaUsuarios[4]);
    agregarSolicitud("REFRIGERADO", "Carne", "SAO", listaUsuarios[2], 2, listaUsuarios[7]);
    agregarSolicitud("CARGA_GENERAL", "Muebles", "BSAS", listaUsuarios[3], 7, listaUsuarios[8]);
    agregarSolicitud("REFRIGERADO", "Helados", "NY", listaUsuarios[2], 1, listaUsuarios[8]);
    agregarSolicitud("CARGA_GENERAL", "Plantas", "BSAS", listaUsuarios[0], 6, listaUsuarios[5]);
    //Confirmadas
    agregarSolicitud("CARGA_PELIGROSA", "Vinos", "SAO", listaUsuarios[0], 10, listaUsuarios[5]);
    listaSolicitudes[5].estado = 1; //SOLICITUD CONFIRMADA
    listaViajes[0].solicitudesAsignadas.push(listaSolicitudes[5]); // ASIGNAMOS SOLICITUD A UN VIAJE
    agregarSolicitud("CARGA_GENERAL", "Juguetes", "MIA", listaUsuarios[2], 5, listaUsuarios[6]);
    listaSolicitudes[6].estado = 1;
    listaViajes[1].solicitudesAsignadas.push(listaSolicitudes[6]);
    agregarSolicitud("CARGA_PELIGROSA", "Combustible", "COLONIA", listaUsuarios[1], 15, listaUsuarios[7]);
    listaSolicitudes[7].estado = 1;
    listaViajes[2].solicitudesAsignadas.push(listaSolicitudes[7]);
    agregarSolicitud("CARGA_PELIGROSA", "Petroleo", "ASU", listaUsuarios[0], 26, listaUsuarios[4]);
    listaSolicitudes[8].estado = 1;
    listaViajes[3].solicitudesAsignadas.push(listaSolicitudes[8]);
    agregarSolicitud("REFRIGERADO", "Bebidas", "MIA", listaUsuarios[0], 22, listaUsuarios[8]);
    listaSolicitudes[9].estado = 1;
    listaViajes[4].solicitudesAsignadas.push(listaSolicitudes[9]);
    //Canceladas
    agregarSolicitud("CARGA_PELIGROSA", "Espejos", "SAO", listaUsuarios[0], 16, listaUsuarios[6]);
    listaSolicitudes[10].estado = 2;
    agregarSolicitud("CARGA_GENERAL", "Trigo", "NIG", listaUsuarios[1], 5, listaUsuarios[7]);
    listaSolicitudes[11].estado = 2;
    agregarSolicitud("REFRIGERADO", "Coca-Cola", "COL", listaUsuarios[3], 10, listaUsuarios[7]);
    listaSolicitudes[12].estado = 2;
    agregarSolicitud("CARGA_GENERAL", "Pelotas", "RIO", listaUsuarios[2], 2, listaUsuarios[7]);
    listaSolicitudes[13].estado = 2;
}

//LISTAS Y VARIABLES GLOBALES
let usuarioLogueado = null;
let listaUsuarios = new Array();
let listaViajes = new Array();
let listaSolicitudes = new Array();

//FUNCIONES DE INTERFAZ

function login() {
    let usu = document.querySelector("#txtNombreLogin").value;
    let pass = document.querySelector("#txtContraseñaLogin").value;

    let loginOK = verificarLogin(usu, pass);
    let mensaje = "";
    if (loginOK) {
        document.querySelector("#txtNombreLogin").value = ""; // limpia campo
        document.querySelector("#txtContraseñaLogin").value = ""; // limpia campo
        ocultarTodo();
        if (usuarioLogueado.tipo == "e") {
            ocultarFormulariosEmpresa();
            mostrarMenuEmpresa();
            document.querySelector("#mensajesLogueadoEmpresa").innerHTML = "Hola " + usuarioLogueado.nombre + " (Empresa)";
        }
        else {
            ocultarFormulariosImportador();
            mostrarMenuImportador();
            document.querySelector("#mensajesLogueadoImportador").innerHTML = "Hola " + usuarioLogueado.nombre;
        }
    }
    else {
        mensaje = "Usuario y/o clave incorrectos";
        mensaje += "<br>Si no podria ser que su usuario haya sido bloqueado.";
    }
    document.querySelector("#mensajeLogin").innerHTML = mensaje;
    document.querySelector("#mensajeRegistro").value = ""; // limpia campo
}


function registrar() {
    let nombre = document.querySelector("#txtNombreImportador").value;
    let usuario = document.querySelector("#txtNombreUsuarioImportador").value;
    let contraseña = document.querySelector("#txtContraseñaImportador").value;
    let foto = document.querySelector("#txtAltaFoto").value;
    let nombreFoto = obtenerNombreArchivo(foto);
    let mensaje = "";
    if (agregarImportador(nombre, usuario, contraseña, nombreFoto)) {
        mensaje = "Se ha podido registrar correctamente!"
        document.querySelector("#txtNombreImportador").value = ""; // limpia campo
        document.querySelector("#txtNombreUsuarioImportador").value = ""; // limpia campo
        document.querySelector("#txtContraseñaImportador").value = ""; // limpia campo
        document.querySelector("#txtAltaFoto").value = ""; // limpia campo
    }
    else {
        mensaje = "No se pudo registrar (intente nuevamente). Todos los campos son obligatorios.<br>"
        mensaje += "La contraseña debe contener un minimo de 5 caracteres, como tambien una mayuscula, minuscula y un numero.<br>"
        mensaje += "En caso de ingresar la contraseña correctamente segun a exigencias, entonces podria intentar con otro usuario."
    }
    document.querySelector("#mensajeRegistro").innerHTML = mensaje;
}

function cerrarSesion() {
    usuarioLogueado = null;
    ocultarTodo();
    ocultarAlInicio();
}

function crearViaje() {
    let nombreBuque = document.querySelector("#txtAltaNombreBuque").value;
    let cantContenedores = Number(document.querySelector("#txtAltaCantidadContenedores").value);
    let objEmpresa = usuarioLogueado;
    let fechaLlegada = document.querySelector("#txtAltaFechaLlegada").value;
    let mensaje = "";
    if (datosValidosAltaViaje(nombreBuque, cantContenedores, fechaLlegada)) {
        agregarViaje(nombreBuque, cantContenedores, objEmpresa, fechaLlegada);
        mensaje = "Se registró correctamente el viaje!";
        document.querySelector("#txtAltaNombreBuque").value = "";
        document.querySelector("#txtAltaCantidadContenedores").value = "";
        document.querySelector("#txtAltaFechaLlegada").value = "";
    }
    else {
        mensaje = "Los datos no pueden ser vacíos, debe ingresar una nombre y no puede repetirse, verificar cantidad de contenedores no puede ser negativo o 0 y el formato de fecha.";
        mensaje += "<br>Vuelva a intentar."
    }
    document.querySelector("#mensajesAltaViaje").innerHTML = mensaje;
}

function mostrarSolicitudesPendientes() {
    document.querySelector("#tablaSolicitudesPendientes").innerHTML = "";
    armarSolicitudesPendientes("");
    document.querySelector("#consultarYCancelarSolicitudesPendientes").style.display = "block";
}

function filtrarSolicitudesPendientes() {
    let criterio = document.querySelector("#txtBuscarPorDescripcionMercaderia").value
    document.querySelector("#tablaSolicitudesPendientes").innerHTML = "";
    armarSolicitudesPendientes(criterio);
    document.querySelector("#consultarYCancelarSolicitudesPendientes").style.display = "block";
}

function mostrarListadoHabilitarImportadores() {
    armarHabilitarImportadores();
    document.querySelector("#ListadoHabilitarImportadores").style.display = "block";
}

function mostrarSelectManifiestoDeCarga() {
    armarSelectManifiestoDeCarga();
    document.querySelector("#manifiestoDeCargaContenido").style.display = "block";
}

function mostrarListadoManifiestoDeCarga() {
    armarTablaManifiestoDeCarga();
    document.querySelector("#ListadoManifiestoDeCarga").style.display = "block";
}

function mostrarSelectsRollover() {
    armarSelectsRollover();
    document.querySelector("#selectsRollover").style.display = "block";
}

function mostrarSelectsRollover() {
    armarSelectsRollover();
    document.querySelector("#selectsRollover").style.display = "block";
}

function mostrarEstadisticas2() {
    armarEstadisticas();
    document.querySelector("#cargarEstadisticas").style.display = "block";
}

function mostrarConfirmarSolicitudes() {
    armarAsignarSolicitudes();
    document.querySelector("#selectsConfirmarSolicitudes").style.display = "block";
}

function crearSolicitud() {
    let tipoDeCarga = Number(document.querySelector("#txtAltaTipoDeCargaI").value);
    let descripcionMercaderia = document.querySelector("#txtAltaDescripcionMercaderiaI").value;
    let puertoOrigen = document.querySelector("#txtAltaPuertoOrigenI").value;
    let lineaDeCarga = Number(document.querySelector("#txtAltaLineaDeCargaI").value);
    let cantidadDeContenedores = Number(document.querySelector("#txtCantidadDeContenedoresI").value);
    let objImportador = usuarioLogueado;
    let mensaje = ""

    for (let pos = 0; pos < listaUsuarios.length; pos++) {
        let Empresa = listaUsuarios[pos]
        if (Empresa.tipo == "e" && lineaDeCarga == Empresa.id) {
            lineaDeCarga = Empresa
        }

    }
    if (datosValidosAltaSolicitud(tipoDeCarga, descripcionMercaderia, puertoOrigen, lineaDeCarga, cantidadDeContenedores)) {
        agregarSolicitud(tipoDeCarga, descripcionMercaderia, puertoOrigen, lineaDeCarga, cantidadDeContenedores, objImportador)
        mensaje = "Su solicitud se creó con exito!."
        document.querySelector("#txtAltaTipoDeCargaI").value = "0";
        document.querySelector("#txtAltaDescripcionMercaderiaI").value = "";
        document.querySelector("#txtAltaPuertoOrigenI").value = "";
        document.querySelector("#txtAltaLineaDeCargaI").value = "0";
        document.querySelector("#txtCantidadDeContenedoresI").value = "";
    }
    else {
        mensaje = "Los datos no pueden ser vacíos. Verificar cantidad de contenedores que no sea negativo o 0.";
        mensaje += "<br>Vuelva a intenar."
    }
    document.querySelector("#mensajesAltaSolicitud").innerHTML = mensaje;
}

function cargarSelectEmpresaCrearSolicitud() {
    let selectHTML = "<option value='-1' disabled selected>Seleccionar</option>";
    for (let pos = 0; pos < listaUsuarios.length; pos++) {
        if (listaUsuarios[pos].tipo == "e") {
            let objEmpresa = listaUsuarios[pos];
            selectHTML += "<option value='" + objEmpresa.id + "'>" + objEmpresa.nombre + "</option>"
        }

    }
    document.querySelector("#txtAltaLineaDeCargaI").innerHTML = selectHTML;
}

//FUNCIONES LOGICAS

function agregarEmpresa(pNombre, pUsuario, pContraseña) {
    listaUsuarios.push(new Empresa(pNombre, pUsuario, pContraseña));
}

function agregarSolicitud(pTipoMercaderia, pDescripcionMercaderia, pPuertoOrigen, pLineaDeCarga, pCantContenedores, pObjUsuario, estadoSolicitud) {
    listaSolicitudes.push(new Solicitud(pTipoMercaderia, pDescripcionMercaderia, pPuertoOrigen, pLineaDeCarga, pCantContenedores, pObjUsuario, estadoSolicitud));
}

function agregarViaje(pNombreBuque, pCantContenedores, pObjEmpresa, pFechaLlegada) {
    let objViaje = new Viaje(pNombreBuque, pCantContenedores, pObjEmpresa, pFechaLlegada)
    listaViajes.push(objViaje);
}

function agregarImportador(pNombre, pUsuario, pContraseña, pNombreFoto) {
    let ok = false;
    if (datosValidosContraseña(pContraseña) && document.querySelector("#txtAltaFoto").value != "") {
        if (!existeUsuario(pUsuario) && pNombre != "") {
            listaUsuarios.push(new Importador(pNombre, pUsuario, pContraseña, pNombreFoto)); //agrega importador a la lista de usuarios
            ok = true;
        }
    }
    return ok;
}

function datosValidosContraseña(eContraseña) {
    let valida = false;
    if (eContraseña.length > 4) {
        let mayusYMin = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (let i = 0; i < mayusYMin.length; i++) {
            for (let x = 0; x < eContraseña.length; x++) {
                if (eContraseña[x] == mayusYMin[i]) {
                    valida = true;
                }
            }
        }
    }
    return valida;
}

function existeUsuario(nomUsuario) { //se fija si existe usuario
    let existe = false;
    nomUsuario = nomUsuario.toLowerCase();
    for (let n = 0; n < listaUsuarios.length && !existe; n++) {
        let usuarioEnMinuscula = listaUsuarios[n].usuario.toLowerCase();
        if (usuarioEnMinuscula == nomUsuario) {
            existe = true;
        }
    }
    return existe;
}

function verificarLogin(usu, pass) {
    let resultado = false;
    let pos = buscarUsuario(usu); // Retorna la posicion del obj usuario en la lista

    if (pos != -1) { // Existe el usuario
        let usuEnMinuscula = listaUsuarios[pos].usuario.toLowerCase();
        usu = listaUsuarios[pos].usuario.toLowerCase();
        if (usu == usuEnMinuscula) {
            if (listaUsuarios[pos].tipo == "i") {
                if (listaUsuarios[pos].contraseña == pass && listaUsuarios[pos].habilitado == true) {
                    resultado = true;
                    usuarioLogueado = listaUsuarios[pos];
                }
            } else {
                if (listaUsuarios[pos].contraseña == pass) {
                    resultado = true;
                    usuarioLogueado = listaUsuarios[pos];
                }
            }
        }

    }
    return resultado;
}

function buscarUsuario(nomUsuario) { // busca usuario y devuelve la posicion. Posicion -1 cuando no encuentra.
    let posBuscada = -1;
    for (let pos = 0; pos < listaUsuarios.length && posBuscada == -1; pos++) {
        if (listaUsuarios[pos].usuario.toLowerCase() == nomUsuario.toLowerCase()) { // Case insensitive del nombre de usuario al loguearse.
            posBuscada = pos;
        }
    }
    return posBuscada;
}

function datosValidosAltaViaje(nombreBuque, cantContenedores, fechaLlegada) {
    let valido = true;
    // verifica que los campos no esten vacios y devuelve false si alguno lo está.
    if (nombreBuque == "") {
        valido = false;
    }
    if (cantContenedores <= 0 || cantContenedores == "") { // verifica que la cantidad no sea negativa o 0 y que contenga un numero.
        valido = false;
    }
    if (fechaLlegada.length != 8 || fechaLlegada == "") { // verifica que el formato de la fecha contenga 8 caracteres y que no este vacia.
        valido = false;
    }

    return valido;
}

function datosValidosAltaSolicitud(tipoDeCarga, descripcionMercaderia, puertoOrigen, lineaDeCarga, cantidadDeContenedores) {
    let valido = true
    if (descripcionMercaderia == "" || tipoDeCarga == "-1" || puertoOrigen == "" || lineaDeCarga == "-1") {
        valido = false;
    }
    if (cantidadDeContenedores <= 0) {
        valido = false;
    }
    return valido;
}

function obtenerNombreArchivo(nombreFoto) {
    // Lo que recibo tiene la forma C:\\fakepath\\nombreFoto
    let posUltimaBarra = nombreFoto.lastIndexOf("\\");
    let nombreArchivo = nombreFoto.substring(posUltimaBarra + 1);
    return nombreArchivo;
}

function armarHabilitarImportadores() {
    // TABLA HABILITAR IMPORTADORES
    let tablaHTML = "<table>";
    tablaHTML += "<tr><th><strong>ID</strong></th><th><strong>Nombre Usuario</strong></th><th><strong>Habilitar</strong></tr>"
    for (let pos = 0; pos < listaUsuarios.length; pos++) {
        let objUsuario = listaUsuarios[pos];
        if (objUsuario.habilitado == false) {
            tablaHTML += "<tr><td>" + objUsuario.id + "</td><td>" + objUsuario.nombre + "</td>";
            tablaHTML += "<td><input type='button' value='Habilitar' id='btn" + pos + "'></td></tr>";
        }
    }
    tablaHTML += "</table>"
    document.querySelector("#ListadoHabilitarImportadores").innerHTML = tablaHTML;
    //Asigno click a cada boton
    for (let pos = 0; pos < listaUsuarios.length; pos++) {
        let objUsuario = listaUsuarios[pos];
        if (objUsuario.habilitado == false) {
            document.querySelector("#btn" + pos).addEventListener("click", habilitarImportador);
        }
    }
}

function habilitarImportador() {
    let mensaje = "";
    let idBotonClick = this.id;
    let posUsuario = Number(idBotonClick.substring(3));
    let objUsuario = listaUsuarios[posUsuario];
    objUsuario.habilitado = true;
    mensaje = "El Usuario ha quedado habilitado.";
    mensaje += "<br>Nombre: " + objUsuario.nombre;
    mensaje += "<br>ID: " + objUsuario.id;
    document.querySelector("#mensajeHabilitarImportador").innerHTML = mensaje;
    armarHabilitarImportadores();
}

function armarSelectManifiestoDeCarga() {
    // SELECT MANIFIESTO DE CARGA
    document.querySelector("#txtSelectManifiesto").innerHTML = "";
    let selectHTML = "";

    for (let pos = 0; pos < listaViajes.length; pos++) {
        let Viaje = listaViajes[pos];
        if (Viaje.empresa == usuarioLogueado)
            selectHTML += "<option value='" + Viaje.id + "'>" + Viaje.nombre + "</option>";
    }
    document.querySelector("#txtSelectManifiesto").innerHTML += selectHTML;
}
function armarTablaManifiestoDeCarga() {
    // TABLA MANIFIESTO DE CARGA
    document.querySelector("#ListadoManifiestoDeCarga").innerHTML = "";
    let tablaHTML = "<table>";
    let idViaje = document.querySelector("#txtSelectManifiesto").value;


    tablaHTML += "<tr><th><strong>Origen</strong></th><th><strong>Contenedores</strong></th><th><strong>Importador</strong></th><th><strong>Descripción</strong></th><th><strong>Tipo de mercadería</strong></th></tr>"
    for (let pos = 0; pos < listaViajes.length; pos++) {
        let Viaje = listaViajes[pos]
        if (Viaje.id == idViaje) {
            for (let pos1 = 0; pos1 < Viaje.solicitudesAsignadas.length; pos1++) {
                let Solicitud = Viaje.solicitudesAsignadas[pos1];
                if (Solicitud.empresa == usuarioLogueado) {//para que solo se muestren las que ya fueron confirmadas
                    tablaHTML += "<tr><td>" + Solicitud.puerto + "</td><td>" + Solicitud.contenedores + "</td><td>" + Solicitud.creador.nombre + "</td><td>" + Solicitud.descripcion + "</td><td>" + Solicitud.tipo + "</td></tr>"
                }
            }
        }
    }


    tablaHTML += "</table>"
    document.querySelector("#ListadoManifiestoDeCarga").innerHTML += tablaHTML;
}

function armarAsignarSolicitudes() {
    // SELECTS CONFIRMAR SOLICITUDES
    let selectViaje = "";
    for (let pos = 0; pos < listaViajes.length; pos++) {
        let Viaje = listaViajes[pos];
        if (Viaje.empresa == usuarioLogueado) {
            selectViaje += "<option value='" + Viaje.id + "'>" + Viaje.nombre + "</option>";
        }
    }
    document.querySelector("#txtSelectViaje").innerHTML = selectViaje;
    let selectSolicitud = "";
    for (let pos = 0; pos < listaSolicitudes.length; pos++) {
        let Solicitud = listaSolicitudes[pos];
        if (Solicitud.empresa == usuarioLogueado && Solicitud.estado == 0) {
            selectSolicitud += "<option value='" + Solicitud.id + "'>" + Solicitud.id + " - " + Solicitud.creador.nombre + " - " + Solicitud.descripcion + " - contenedores: " + Solicitud.contenedores + " - " + Solicitud.tipo + "</option>";
        }
    }
    document.querySelector("#txtSelectSolicitud").innerHTML = selectSolicitud;
}

function confirmarSolicitud() { //ASIGNAR SOLICITUD A VIAJE
    let idViaje = Number(document.querySelector("#txtSelectViaje").value);
    let idSolicitud = Number(document.querySelector("#txtSelectSolicitud").value);
    mensaje = "";
    for (let pos = 0; pos < listaViajes.length; pos++) {
        let Viaje = listaViajes[pos];
        if (idViaje == Viaje.id) {
            for (let pos1 = 0; pos1 < listaSolicitudes.length; pos1++) {
                let Solicitud = listaSolicitudes[pos1];
                if (Solicitud.id == idSolicitud) {
                    let agregarSolicitud = agregarSolicitudConfirmada(Viaje, Solicitud);
                    if (agregarSolicitud == false) {
                        let resultado = contarCantidadContenedores(Viaje);
                        resultado = Viaje.contenedores - resultado;
                        mensaje = "La solicitud con id " + Solicitud.id + " no pudo ser confirmada en el viaje " + Viaje.nombre + " ya que no le queda tanta capacidad de contenedores."
                        mensaje += "<br>Al viaje con nombre " + Viaje.nombre + " le quedan " + resultado + " contenedores para estar lleno."
                    }
                    if (idSolicitud == Solicitud.id && agregarSolicitud == true) {
                        Solicitud.estado = 1;
                        Viaje.solicitudesAsignadas.push(Solicitud);
                        mensaje = "La solicitud con id " + Solicitud.id + " esta confirmada en el viaje " + Viaje.nombre + "."
                    }
                }
            }
        }
    }
    document.querySelector("#mensajeConfirmarSolicitudes").innerHTML = mensaje;
    mostrarConfirmarSolicitudes();
}

function agregarSolicitudConfirmada(objViaje, objSolicitud) {
    let ok = false;
    if (contarCantidadContenedores(objViaje) + objSolicitud.contenedores <= objViaje.contenedores) {
        ok = true;
    }
    return ok;
}

function contarCantidadContenedores(objViaje) {
    let contador = 0;
    for (let pos = 0; pos < objViaje.solicitudesAsignadas.length; pos++) {
        let objSolicitudConfirmada = objViaje.solicitudesAsignadas[pos];
        if (objSolicitudConfirmada.empresa == objViaje.empresa) {
            contador += objSolicitudConfirmada.contenedores;
        }
    }
    return contador;
}

function armarSolicitudesPendientes(filtro) {
    filtro = filtro.toLowerCase();
    // TABLA SOLICITUDES PENDIENTES
    let tablaHTML = "<table>";
    tablaHTML += "<tr><th><strong>ID solicitud</strong></th><th><strong>Empresa</strong></th><th><strong>Cantidad Contenedores</strong></th><th><strong>Descripción mercadería</strong></th><th><strong>Tipo de mercadería</strong></th><th><strong>Estado</strong></th></tr>"
    for (let pos = 0; pos < listaSolicitudes.length; pos++) {
        let Solicitud = listaSolicitudes[pos];
        let descripcionMinuscula = listaSolicitudes[pos].descripcion.toLowerCase();
        if (descripcionMinuscula.includes(filtro) && Solicitud.estado == 0 && Solicitud.creador == usuarioLogueado) {
            tablaHTML += "<tr><td>" + Solicitud.id + "</td><td>" + Solicitud.empresa.nombre + "</td><td>" + Solicitud.contenedores + "</td><td>" + Solicitud.descripcion + "</td><td>" + Solicitud.tipo + "</td><td>" + devolverEstado(Solicitud) + "</td></tr>"
        }
    }
    tablaHTML += "</table>"
    document.querySelector("#tablaSolicitudesPendientes").innerHTML += tablaHTML;
}


function devolverEstado(objSolicitud) {
    let estado = "";

    switch (objSolicitud.estado) {
        case 0:
            estado = "Pendiente";
            break;
        case 1:
            estado = "Confirmada";
            break;
        case 2:
            estado = "Cancelada";
            break;
        case 3:
            estado = "Ignorada";
            break;
    }
    return estado;

}

function cancelarSolicitud() {
    let idSolicitudACancelar = Number(document.querySelector("#txtCancelarSolicitud").value);
    let mensaje = "";
    let salida = true;
    for (let pos = 0; pos < listaSolicitudes.length && salida == true; pos++) {
        let Solicitud = listaSolicitudes[pos];
        if (Solicitud.estado == 0 && Solicitud.id == idSolicitudACancelar && Solicitud.creador == usuarioLogueado && salida == true) {
            salida = false;
            Solicitud.estado = 2;
            mostrarSolicitudesPendientes();
            mensaje = "La solicitud con id " + idSolicitudACancelar + " ha sido cancelada con exito.";
            document.querySelector("#txtCancelarSolicitud").value = "";
            if (deshabilitarImportadores()) {
                cerrarSesion();
            }
        } else {
            mensaje = "El id que ingreso no pertenece a ninguna solicitud."
        }
        document.querySelector("#mensajeCancelarSolicitud").innerHTML = mensaje;
    }
}

function deshabilitarImportadores() {
    let deshabilitado = false;
    let solicitudesCanceladas = 0;
    for (let pos = 0; pos < listaSolicitudes.length; pos++) {
        let Solicitud = listaSolicitudes[pos];
        if (Solicitud.estado == 2 && Solicitud.creador == usuarioLogueado) {
            solicitudesCanceladas++;
        }
    }
    if (solicitudesCanceladas == 3) {
        usuarioLogueado.habilitado = false;
        deshabilitado = true;
    }
    return deshabilitado;
}
function armarListaCargaPeligrosa() {
    document.querySelector("#txtTablaCargaPeligrosa").innerHTML = "";
    let tablaHTML = "<table>";
    let idViaje = document.querySelector("#selectViajesCargaPeligrosa").value;


    tablaHTML += "<tr><th><strong>Origen</strong></th><th><strong>Contenedores</strong></th><th><strong>Importador</strong></th><th><strong>Descripción</strong></th><th><strong>Tipo de mercadería</strong></th></tr>"
    for (let pos = 0; pos < listaViajes.length; pos++) {
        let Viaje = listaViajes[pos]
        if (Viaje.id == idViaje) {
            for (let pos1 = 0; pos1 < Viaje.solicitudesAsignadas.length; pos1++) {
                let Solicitud = Viaje.solicitudesAsignadas[pos1];
                if (Solicitud.empresa == usuarioLogueado && Solicitud.tipo == 'CARGA_PELIGROSA') {//para que solo se muestren las que ya fueron confirmadas
                    tablaHTML += "<tr><td>" + Solicitud.puerto + "</td><td>" + Solicitud.contenedores + "</td><td>" + Solicitud.creador.nombre + "</td><td>" + Solicitud.descripcion + "</td><td>" + Solicitud.tipo + "</td></tr>"
                }
            }
        }
    }
    tablaHTML += "</table>"
    document.querySelector("#txtTablaCargaPeligrosa").innerHTML += tablaHTML;
}

function armarSelectsRollover() {
    document.querySelector("#txtSelectRolloverSolicitudConfirmada").innerHTML = "";
    document.querySelector("#txtSelectRolloverNuevoViaje").innerHTML = "";

    let idSolicitud = Number(document.querySelector("#txtSelectRolloverSolicitudConfirmada").value);
    let idViajeNuevo = Number(document.querySelector("#txtSelectRolloverNuevoViaje").value);
    // SELECTS ROLLOVER
    let select1HTML = "<option value='-1'selected disabled>Seleccionar Solicitud</option>";
    for (let pos = 0; pos < listaViajes.length; pos++) {
        let Viaje = listaViajes[pos]
        for (let pos1 = 0; pos1 < Viaje.solicitudesAsignadas.length; pos1++) {
            let Solicitud = Viaje.solicitudesAsignadas[pos1];
            if (Solicitud.id == idSolicitud && Solicitud.empresa == usuarioLogueado) {
                select1HTML += "";
            } else {
                select1HTML += "<option value='" + Solicitud.id + "'>ID: " + Solicitud.id + " - Nombre: " + Solicitud.creador.nombre + " - Viaje: " + Viaje.nombre + "</option>";
            }
        }
    }
    select1HTML += "<br>";
    document.querySelector("#txtSelectRolloverSolicitudConfirmada").innerHTML = select1HTML;

    let select2HTML = "<option value='-1' selected disabled>Seleccionar Viaje</option>";
    for (let pos = 0; pos < listaViajes.length; pos++) {
        let viajeNuevo = listaViajes[pos];
        if (viajeNuevo.id == idViajeNuevo && viajeNuevo.empresa == usuarioLogueado) {
            select1HTML += "";
        } else {
            select2HTML += "<option value='" + pos + "'> Fecha: " + viajeNuevo.llegada + " - Nombre: " + viajeNuevo.nombre + "</option>";
        }
    }
    document.querySelector("#txtSelectRolloverNuevoViaje").innerHTML = select2HTML;
    document.querySelector("#btnRealizarRollover").addEventListener("click", realizarRollover);
}

function realizarRollover() {
    let idSolicitud = Number(document.querySelector("#txtSelectRolloverSolicitudConfirmada").value);
    let posViajeNuevo = Number(document.querySelector("#txtSelectRolloverNuevoViaje").value);
    let mensaje = "";
    let salida = false;
    if (rolloverValido(idSolicitud, posViajeNuevo)) {
        for (let pos = 0; pos < listaViajes.length || salida == true; pos++) {
            let Viaje = listaViajes[pos];
            for (let pos1 = 0; pos1 < Viaje.solicitudesAsignadas.length || salida == true; pos1++) {
                let Solicitud = Viaje.solicitudesAsignadas[pos1];
                if (idSolicitud == Solicitud.id || salida == true) {
                    let objViajeNuevo = listaViajes[posViajeNuevo];
                    if (agregarSolicitudConfirmada(objViajeNuevo, Solicitud) || salida == true) {
                        let arrayNuevo = new Array();
                        arrayNuevo = Viaje.solicitudesAsignadas.slice(pos1, pos1 + 1); //guarda solicitud a cambiar en un nuevo array
                        Viaje.solicitudesAsignadas.splice(pos1, 1); // elimina la solicitud del array original
                        objViajeNuevo.solicitudesAsignadas.push(arrayNuevo[0]); //pushea la solicitud en el nuevo viaje
                        mensaje = "La solicitud con id " + Solicitud.id + " fue cambiada al viaje " + objViajeNuevo.nombre + "."
                        salida == true;
                    } else {
                        mensaje = "La solicitud con id " + Solicitud.id + " no pudo ser cambiada al viaje " + objViajeNuevo.nombre + " ya que no tiene la capacidad suficiente para rollear la Solicitud."
                    }
                }
            }
        }
    } else {
        mensaje = "Todos los campos son obligatorios."
    }


    document.querySelector("#mensajeRollover").innerHTML = mensaje;
    mostrarSelectsRollover();
}

function rolloverValido(idSolicitud, posViajeNuevo) {
    valido = true;
    if (idSolicitud == -1) {
        valido = false;
    }
    if (posViajeNuevo == -1) {
        valido = false;
    }
    return valido;
}

function armarEstadisticas() {
    document.querySelector("#tablaEstadisticas").innerHTML = "";
    // TABLA ESTADISTICAS
    let tablaHTML = "<tr><th><strong>Empresas</strong></th><th><strong>Porcentaje de cancelaciones</strong></th><th><strong>Calendario próximas llegadas</strong></th><th><strong>Participación de empresas</strong></th></tr>";
    for (let pos = 0; pos < listaUsuarios.length; pos++) {
        let usuario = listaUsuarios[pos];
        if (usuario.tipo == "e") {
            let resultado = porcentajeCancelaciones(usuario);
            let fechas = calendarioProximasLLegadas(usuario);
            let participacion = participacionDeEmpresas(usuario);
            tablaHTML += "<tr><td>" + usuario.nombre + "</td><td>" + resultado + "% </td><td>" + fechas + "</td><td>" + participacion + "</td></tr>";
        }
    }
    document.querySelector("#tablaEstadisticas").innerHTML = tablaHTML;
}

function porcentajeCancelaciones(empresa) {
    let porcentaje = 0;
    let solicitudesCanceladas = 0;
    let totalSolicitudes = 0;
    solicitudesCanceladas = contarSolicitudesCanceladas(empresa);
    totalSolicitudes = contarSolicitudes(empresa);
    if (totalSolicitudes == 0) {
        porcentaje = 0;
    } else {
        porcentaje = solicitudesCanceladas * 100 / totalSolicitudes;
    }
    return porcentaje;
}
function contarSolicitudesCanceladas(Empresa) {
    let cantidad = 0;
    for (let pos = 0; pos < listaSolicitudes.length; pos++) {
        let Solicitud = listaSolicitudes[pos];
        if (Solicitud.empresa == Empresa && Solicitud.estado == 2 && Solicitud.creador == usuarioLogueado) {
            cantidad += 1;
        }
    }
    return cantidad;
}
function contarSolicitudes(Empresa) {
    let cantidad = 0;
    for (let pos = 0; pos < listaSolicitudes.length; pos++) {
        let Solicitud = listaSolicitudes[pos];
        if (Solicitud.empresa == Empresa && Solicitud.creador == usuarioLogueado) {
            cantidad += 1;

        }
    }
    return cantidad;
}

function calendarioProximasLLegadas(usuario) {
    mensaje = "";
    listaViajes.sort(ordenarFechas);
    for (let pos = 0; pos < listaViajes.length; pos++) {
        let viaje = listaViajes[pos];
        for (let pos1 = 0; pos1 < viaje.solicitudesAsignadas.length; pos1++) {
            let Solicitud = viaje.solicitudesAsignadas[pos1];
            if (viaje.empresa == usuario && Solicitud.creador == usuarioLogueado) {

                mensaje += "Fecha: " + viaje.llegada + "<br>";


            }
        }
    }
    return mensaje;
}

function participacionDeEmpresas(empresa) {
    let mensaje = "";
    let totalSolicitudes = 0;
    let totalSolicitudesEmpresa = 0;
    totalSolicitudesEmpresa = contarSolicitudes(empresa)

    for (let pos = 0; pos < listaSolicitudes.length; pos++) {
        let Solicitud = listaSolicitudes[pos];
        if (Solicitud.creador == usuarioLogueado) {
            totalSolicitudes += 1
        }
    }
    if (totalSolicitudesEmpresa == 0) {
        mensaje = "";
    } else {
        mensaje = totalSolicitudesEmpresa * 100 / totalSolicitudes;
        mensaje = mensaje.toFixed(1);
    }
    return mensaje;
}
function ordenarFechas(obj1, obj2) {
    if (obj1.llegada < obj2.llegada) {
        return -1;
    }
    else {
        if (obj1.llegada > obj2.llegada) {
            return 1;
        } else {
            return 0;
        }
    }
}