const fbdl = require('./index.js')
const url = 'https://www.facebook.com/reel/983314832777781'

fbdl.fbdown(url)
    .then(result => {
        console.log(result)
    })