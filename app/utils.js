const DataStore = require('../db/datastore')
const Environment = require('./utils/environment')
const express = require('express')
const HttpResponse = require('./utils/httpResponse')
const Middlewear = require('./utils/middlewear')
const mongoose = require('mongoose')
const Server = require('./utils/server')

const app = express()
const env = new Environment(app)
const server = new Server(app)
const db = new DataStore(mongoose)
const middlewear =  new Middlewear(app)
const response = new HttpResponse(app)

module.exports = {env, server,db, middlewear,response}