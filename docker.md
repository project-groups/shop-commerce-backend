### CREAR VOLUMENES PARA EL CONTENEDOR
```
docker volume create vol-mongo
```
### CREAR EL CONTENEDOR 
```
docker run -d --name server-mongo -p 27017:27017 -v vol-mongo:/data/db mongo:3.6.23
```