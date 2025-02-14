console.log("INICIALIZANDO BASE DE DATOS...");


try {

    db.createCollection('usuarios');

    db.usuarios.insertMany([
        {
            "_id" : ObjectId("6516291df805484f8db60c45"),
            "usuario" : "Admin01",
            "contrasenia" : "$2b$10$TrsBSx5JPJx8U9gQazlrF.4JMKEQ6dglANaWIUU3U8Wq2mkP6xdG6",
            "nombre" : "Super",
            "apellido" : "Admin",
            "dni" : 11113333,
            "matricula" : 12312312,
            "admin" : true,
            "email" : "admin@test.com",
            "editor" : false,
            "__v" : 0,
            "rol" : "lab"
        }
       ]);


       console.info("BASE DE DATOS INICIALIZADA EXITOSAMENTE");
} catch (error) {
    console.error("Error al configurar la base de datos:", error);
}