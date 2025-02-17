# BACKEND APLICACIÓN LABORATORIO


## DOCKER-COMPOSE
El sistema de Docker compose cuenta con
- MongoDB: Base de datos MongoDB (con script de inicio)
- mongo-express: Interface web de administración de mongo ingrese a http://mongo.localdev.me:8081 
    - `usuario: admin`
    - `contraseña: password`
- backend: apí de de la aplicación apuntando a http://lab-api.localdev.me:3002
- frontend: apí de de la aplicación apuntando a http://lab-front.localdev.me:3000



Para inicializar ejecute los siguientes comandos (no necesita clonar el repositorio antes, eso esta incluido en los pasos)

```bash
# Crea una nueva carpeta
mkdir tmp-lab
# Ingresar a la nueva carpeta
cd tmp-lab
# Clonar repositorio de backend
git clone https://github.com/chamiamarillo/appLabBack
# Clonar repositorio de frontend
git clone https://github.com/chamiamarillo/appLabFront
# Ingresar al repositorio del backend
cd ./appLabBack
# Ejecutar docker
docker compose --project-name lab up -d

```

Ingrese a  http://lab-front.localdev.me:3000 `usuario: Admin01` `Contraseña: 123123`


Para eliminar completamente el ambinete

```bash
docker compose --project-name lab down -v
cd ..
rm -rf ./tmp-lab
```
