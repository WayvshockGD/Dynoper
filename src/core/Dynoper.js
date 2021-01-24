let Config = require('../Config');
let { Client } = require('eris');
let { Token, GetOptions } = new Config()

module.exports = class Dynoper {
    constructor() {

        this.client_ = new Client(Token, GetOptions)
    }

    //used when something goes wrong
    processEvents() {
        process.on('uncaughtException', (err) => {throw new Error(err)})
        process.on('unhandledRejection', (err) => {throw new Error(err)})
    }
    
    //setting things up
    clientSetup() {
        this.client_.connect()
                  .then(() => {console.info('ready i think')})
            this.client_.editStatus('idle')
    }
}