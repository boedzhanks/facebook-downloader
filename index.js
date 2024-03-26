const { default: axios } = require('axios');

exports.fbdown = async (url) => {
try {
const res = await axios('https://x2download.app/api/ajaxSearch/facebook',{
			method: "POST",
			data: "q=" + encodeURIComponent(url)
  })
    console.log(res.data);
    return res.data
} catch (err) {
  return err
}
}