const os = require('os');

// console.log(os.userInfo());
// console.log(os.freemem());
// console.log(os.arch());
// console.log(os.uptime());
// console.log(os.version());
// console.log(os);
console.log(Object.keys(os));

for(let keys of Object.keys(os)) {
    console.log(`${keys} = ${os[keys]()}`);
}

console.log(os.networkInterfaces());
console.log(os.cpus());
console.log(os.uptime());
console.log(os.release());




