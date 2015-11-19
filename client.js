/**
 * Created with JetBrains WebStorm.
 * User: rohitghatol
 * Date: 6/28/13
 * Time: 5:47 PM
 * To change this template use File | Settings | File Templates.
 */
var arDrone = require('ar-drone');
var client  = arDrone.createClient();
client.createRepl();
console.log('hola')
//client.createRepl();
//client.animateLeds('blinkRed', 5, 10);

//client.on('navdata', console.log);

client.takeoff();
client
   .after(5000, function() {

       this.clockwise(0.5);
       client.animateLeds('blinkRed', 5, 2);
   })
	.after(500, function(){
		this.left(.3);
	})
	.after(500, function(){
		this.front(.3);
	})
	.after(500, function(){
		this.right(.3);
	})
	.after(500, function(){
		this.left(.3);
	})
	.after(500, function(){
		this.front(.3);
	})
	.after(500, function(){
		this.right(.3);
	})
	.after(500, function(){
		this.right(.3);
	})
	.after(500, function(){
		this.back(.3);
	})
	.after(500, function(){
		this.back(.3);
	})
	.after(500, function(){
		this.front(.3);
	})
	.after(500, function(){
		this.front(.3);
	})
	.after(500, function(){
		this.right(.3);
	})
	.after(500, function(){
		this.back(.3);
	})
	.after(500, function(){
		this.front(.3);
	})
	.after(500, function(){
		this.right(.3);
	})
	.after(500, function(){
		this.back(.3);
	})
	.after(500, function(){
		this.back(.3);
	})
   .after(1000, function() {
       this.land();
   });

client.land();