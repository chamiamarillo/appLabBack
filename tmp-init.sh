# Inicializa un ambiente con docker compose
#---------------------------------------------

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
