var mosca = require('mosca');

var settings = {
    port: 1883,
    http: {
        port: 3000,
        bundle: true,
        static: './'
    }
}

var server = new mosca.Server(settings);


server.on('ready', function () {
    console.log("ready");
    
    server.authenticate = function (client, username, password, callback) {
        callback(null, (username === '1' && password.toString('ascii') === '2'));
    };
});