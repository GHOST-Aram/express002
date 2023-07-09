const express = require('express')
class Environment{
    #port = process.env.PORT || 3000

    constructor(expressApp){
        this.app = expressApp
    }
    getPort = () =>{
        return this.#port
    }
    setViewEngine = (viewEngine) =>{
        this.app.set('view engine', viewEngine)
    }

    setViewsDirectory = (dirname) =>{
        this.app.set('views', dirname)
    }

    setStaticDir = (dirname) =>{
        this.app.use(express.static(dirname))
    }
}

module.exports = Environment