const request = require('request')

const forecast = (latitude, longitude, callback) => {
  //  const url = 'http://api.weatherstack.com/current?access_key=b6186a46d5a1430c280e8a0a13fecf3f&query=' + latitude + ',' + longitude + '&units=f'

     const url = `http://api.weatherstack.com/current?access_key=b6186a46d5a1430c280e8a0a13fecf3f&query=${latitude},${longitude}&units=f`
    request({ url, json: true }, (error,{ body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } 
        else if (body.error) {
            callback('ko tim thay thoi tiet tai dia diem', undefined)
        } 
        else {
            callback(undefined, body.current.weather_descriptions + ". It is currently " + body.current.temperature + " degress out." + " Feel like " + body.current.feelslike + " degress out." + " And the win speed is " + body.current.wind_speed +" km/h")
        }

    })
}
module.exports = forecast;

