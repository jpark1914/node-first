
//Hold methods for fetching config values

const configValues = require('./config.json');

module.exports = {
    getDbConnectionString: function () {
     return 'mongodb://' + configValues.uname + ':' +configValues.pwd + '@ds151612.mlab.com:51612/nodetodo';

    }

};