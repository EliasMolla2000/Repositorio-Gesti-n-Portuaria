let ultimoIdImportador = 01;
let pTipoI = "i";
class Importador {
    constructor(pNombre, pUsuario, pContraseña, pNombreFoto) {
        this.id = ultimoIdImportador;
        this.nombre = pNombre;
        this.usuario = pUsuario;
        this.contraseña = pContraseña;
        this.foto = pNombreFoto;
        this.tipo = pTipoI;
        this.habilitado = true;// Habilitado true significa que puede ingresar a la pagina, false esta bloqueado.
        ultimoIdImportador++;
    }
}

let ultimoIdEmpresa = 01;
let pTipoE = "e";
class Empresa {
    constructor(pNombre, pUsuario, pContraseña) {
        this.id = ultimoIdEmpresa;
        this.nombre = pNombre;
        this.usuario = pUsuario;
        this.contraseña = pContraseña;
        this.tipo = pTipoE;
        ultimoIdEmpresa++;
    }
}

let ultimoIdViaje = 01;
class Viaje {
    constructor(pNombreBuque, pCantContenedores, pObjEmpresa, pFechaLlegada) {
        this.id = ultimoIdViaje;
        this.nombre = pNombreBuque;
        this.contenedores = pCantContenedores;
        this.empresa = pObjEmpresa;
        this.llegada = pFechaLlegada;
        this.solicitudesAsignadas = new Array(); //ESTO FUNCIONA PARA ASIGNAR UNA SOLICITUD A UN VIAJE(hay que crear la parte primero. Video del miercoles 10, minuto 15.)
        ultimoIdViaje++;
    }
}

let ultimoIdSolicitud = 01;

class Solicitud {
    constructor(pTipoMercaderia, pDescripcionMercaderia, pPuertoOrigen, pLineaDeCarga, pCantContenedores, pObjUsuario,) {
        this.id = ultimoIdSolicitud;
        this.tipo = pTipoMercaderia;
        this.descripcion = pDescripcionMercaderia;
        this.puerto = pPuertoOrigen;
        this.empresa = pLineaDeCarga;
        this.contenedores = pCantContenedores;
        this.creador = pObjUsuario;
        this.estado = 0; //0- Pendiente 1-Confirmada 2-Cancelada
        ultimoIdSolicitud++;
    }
}