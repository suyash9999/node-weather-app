const request = require('request')
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (longtitude,laltitude,callback)=>{
    const url='https://api.darksky.net/forecast/19ed8afaf408768d4870fbfb60d6027b/'+longtitude+','+laltitude
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('cant connect to internet',undefined)
        }
        else if(response.body.error){
            callback('cant find location',undefined)
        }
        else{
            callback(undefined,response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }

    })

}
module.exports=forecast