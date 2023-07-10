const morgan = require('morgan')
const express = require('express')

class Middlewear{
    constructor(app){
        this.app = app
    }
    encodeUrl = (options) =>{
        this.app.use(express.urlencoded(options))
    }
    log = () =>{
        this.app.use((request, response, next) =>{
            console.log('New Request Made: ')
            console.log('Url: ', request.url)
            console.log('Method: ', request.method)
            console.log('host: ', request.hostname)
            console.log('Path: ', request.path)
            next()
        })
    }
    logRequest = (option) =>{
        this.app.use(morgan(option))
    }
    
}
module.exports = Middlewear