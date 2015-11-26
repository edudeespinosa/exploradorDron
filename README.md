# exploradorDron
Un sitio web en nodejs que permite ver y mover a un dron quadcopter
# Drones

## Guía rápida

1) Bajar e instalar el framework node.js disponilbe en http://nodejs.org/

2) En consola de comando correr:

``` bash
    $ npm install ar-drone
```
npm es el manejador de paquetes de node. Si no se intala de forma correcta asegúrese de crear todas las carpetas (folder con nombre npm) que el programa solicita en los errores.
3) Cargar las pilas de drone y prender el drone

4) Al prender el drone este automaticamente genera una red wifi, conectarse a ella desde la compu como si fuese un accespoint cualquiera.

5) correr los programas con: 
``` bash
    $ node <script.js>
```
Un ejemplo de programa que puedes correr es:
``` bash
    var arDrone = require('ar-drone'); //llama a la biblioteca
	var client  = arDrone.createClient(); // crea conexión
	client.takeoff(); // depega el drone
	client
	  .after(5000, function() {
		this.clockwise(0.5);
	  })
	  .after(3000, function() {
		this.stop();
		this.land();
	  });
```
6) Como el drone funciona como un servidor, se tiene que usar la misma lógica que usariamos con un web server. La información que saquen de Parrot normalmente la podrán ver como páginas web. Para entender como funciona la lógica y aprender a montar un server de manera rápida y facil consulta: http://www.nodebeginner.org/#building-the-application-stack 

7) para ver las funciones de la biblioteca ar-drone consulta: https://github.com/felixge/node-ar-drone
Hay más bibliotecas en: http://nodecopter.com/hack  pero todas dependen de Ar-drone así que aprende a usar esa primero.

#### Reference:
	http://nodecopter.com/hack

## El proyecto
## El proyecto
Pasos para crear el proyecto

1. Instalar node como se indica en la parte de arriba

2. Revisar el archivo de package.json donde se encuentran todas las dependencias del proyecto:
    1. ar-drone.js para controlar el drone
    2. express para la página web
    3. socket.io para enviar los comandos
    4. dronestream para la cámara

3. Instalar esas dependencias

4. Al instalar estas dependencias se cra la carpeta de modules

5. Revisar las carpetas.
    1. En la carpeta de drone se encuentran todos los archivos de backend del proyecto. Con ellos se hace la comunicación entre el drone y la aplicación web
    2. En la carpeta de public se encuentra la parte de frontend. Ahí se encuentran los archivos de boostrap, jquery.js y socket.io.
    3. En la raíz tenemos 3 aplicaciones que actuan como interfaz entre el backend y el frontend por medio de web o línea de comandos.
        1. client.js es una rutina de movimiento
        2. manual.js es para enviar instrucciones a través de línea de comandos
        3. server.js es la interfaz entre la aplicación web y la bateria del drone, la         cámara y los controles

6. Verificar los puertos
    1. 3000 para frontend
    2. 3002 para backend
    3. 3001 para camera-feed (que puede ser usado para verificar la conexión)
    
 



