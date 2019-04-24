//subscriber.js
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://192.168.8.174', {username:'1',password:'2'});


client.on('connect', function () {
    client.subscribe('plantInfo');
})
client.on('message', function (topic, message) {
    context = message.toString();
    console.log(context)
})