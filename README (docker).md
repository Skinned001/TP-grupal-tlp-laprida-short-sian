# TP-grupal-tlp-laprida-short-sian
MONGO_INITDB_ROOT_USERNAME/PASSWORD solo aplica la primera vez que se crea el volumen. Si se cambian las credenciales en .env después de haber levantado el contenedor una vez, Mongo va a seguir usando las viejas, para solucionar eso, se necesita ejecutar, en orden:
docker compose down -v
docker compose up --build