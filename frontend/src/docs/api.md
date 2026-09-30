# Info general

base url:`http//localhost:3000`
formato: Json `Content-Type: application/json`
codigo de error comun: jwt via header `Authorization`
aunteticacion:

# Datos que necesito

libros:{
id:
titulo:
descripcion:
estados:[`DISPONIBLE`, `PRESTADO`, `EN_REPARACION`],
autor:
genero:
createAt
updateAt
}

user{
id:
email:
password:
rol:[`Admin`, `usuario`, `Operador`]
}

subcripciones:{
estado:
id_usuario
}

notificacion:{
contenido:
leido:booleano
}
