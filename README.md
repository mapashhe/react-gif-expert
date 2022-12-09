Primer se creo el proyecto usando 
yarn create vite

seleccionar react y javascript, ademas de un nombre

eliminar todo en SRC excepto el main y crear GifExpertApp, el cual
sera instanciado en main, dando paso al proyecto

instalar node:
yarn

y para correr:
yarn dev

sacar el api key de giphy
H8gPTGUbunKQLKrycuclMarNeyFv7lwe



strictMode de react (en main) es solo para dev, ayuda a mostrar errores; tambien hace que las peticiones fetch se ejecuten 2 veces, al removerlo se quita el problema

useEffect() es un hook que sirve para lanzar un evento cuando algo cambie, los parametros son:
1 - metodos a realizar (callback)
2 - props para saber cuando triggerear los metodos, cuando se establece un [] significa que se ejecutara una vez, solo en la creacion del componente
¿Por que no se vuelve a disparar el useEffect cuando se agrega una nueva categoria?
    porque se ejecuta una sola vez al crearse el objeto de GifGrid (desde GifExpertApp), pero los que ya estaban creados no se redibujan
**useEffect no puede ser async. (al ser async, impolicitamente estara regresando una promesa y useEffect no regresa promesas, solo funciones)**
*si se hcae una peticion y no se utiliza el await, el resultado sera la peticion sin procesar, en cambio si se le pasa el await, lo que retornara es el resultado
de la promesa, ya ejecutada.**



DESPLEGAR LA APP
Se hace con el comando:
    yarn build
esto creara los archivos para produccion, se encuentran en la carpeta dist
para levantar el ambiente de prod se ejecuta en la carpeta dist:
    npx http-server

**ARCHIVOS DE BARRIL**
Son para agrupar los imports cuando son muchos, se crea en donde estan los imports a agrupar, se le
pone el nombre de index.js, dentro se ponen las exports, y se llaman en donde se desean importar sin incluir el index,
react lo determina solo

**GIT**
git init    inicia el repositorio en local
git add .   para mandar TODOS los archivos editados a stage