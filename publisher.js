var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://192.168.8.174', {username:'1',password:'2'});

client.on('connect', function () {
    setInterval(function () {
        client.publish('myTopic', 'Hello mqtt');
        console.log('Message Sent');
    }, 5000);
});