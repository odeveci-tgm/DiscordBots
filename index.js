const https = require('https');

const options = {
    hostname: 'proleague.de',
    port: 443,
    path: '/overview.php',
    method: 'GET'
};

const req = https.request(options, (res) => {
    res.on('data', (d) => {
        process.stdout.write(d);
    });
});

req.on('error' , (e) => {
    console.error(e);
});


req.end()