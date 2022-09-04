const request = require("request")

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=9f13ad4e5a5cebb620749d6c4af81f03&query=' + encodeURIComponent(address) +'&limit=1'
    
    request({url, json: true }, (error,{ body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.data === undefined || body.data.length === 0) {
            callback('ko tim thay dia chi, tim lai de', undefined)
        }
        else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].label
            })
        }

    })

}



module.exports = geocode;