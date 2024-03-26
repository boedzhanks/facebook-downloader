const { default: axios } = require('axios');

try {
axios('https://x2download.app/api/ajaxSearch/facebook',{
			method: "POST",
			data: "q=" + encodeURIComponent(url) + "vt=facebook"
  })
  .then(function (response) {
    console.log(response.data);
    return {
        status: 200,
        author: 'boedzhanks',
        result: response.data,
    }
  })
}
catch(err) {
    console.log(err)
}

module.exports = {
	fbdown: fbdown
}