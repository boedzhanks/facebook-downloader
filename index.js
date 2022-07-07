const { default: axios } = require('axios');

async function fbdown(url) {
	try {
		const result = await axios('https://x2download.com/api/ajaxSearch/facebook',{
			method: "POST",
			data: "q=" + encodeURIComponent(url)
		})
		return {
			status: true,
			author: 'boedzhanks',
			result: result.data,
		}
} catch (error) {
	console.log(error)
}
}

module.exports = {
	fbdown: fbdown
}