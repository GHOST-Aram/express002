const express = require('express')
class Settings{
    constructor(expressApp){
        this.app = expressApp
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

module.exports = Settings