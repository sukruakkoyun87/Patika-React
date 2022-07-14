import getdata from './app.js';


getdata(1).then(data => {console.log(data)}).catch(err => {console.log(err)});