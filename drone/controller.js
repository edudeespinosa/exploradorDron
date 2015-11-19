/**
 * Created with JetBrains WebStorm.
 * User: rohitghatol
 * Date: 6/29/13
 * Time: 6:32 PM
 * To change this template use File | Settings | File Templates.
 */

var io = require('socket.io').listen(3002);
// io.set('log level', 1);

io.sockets.on('connection', function (socket) {
    var arDrone = require('ar-drone');
    var client = arDrone.createClient();
    setInterval(function(){
        var batteryLevel = client.battery();
        console.log(batteryLevel);
        socket.emit('event', { name: 'battery',value: batteryLevel});
    },1000);

    socket.on('event', function (data) {
        if(data.name=="despegue"){
            client.takeoff();
        console.log(data.name);
        }
        if(data.name=="rotar"){
            client.clockwise(1);
        }
        if(data.name=="detener"){
            client.stop();
        }
        if(data.name=="aterrizar"){
            client.land();
        }
        if(data.name=="izquierda"){
            client.left(.3);
        }
        if(data.name=="derecha"){
            client.right(.3);
        }
        if(data.name=="frente"){
            client.front(.3);
        }
        if(data.name=="atras"){
            client.back(.3);
        }
    });
});
