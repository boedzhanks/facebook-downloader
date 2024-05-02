const { default: axios } = require('axios');

url = `https://fb.watch/r2GFy0tGQA/`

exports.fbdown = async (url) => {
try {
const res = await axios('https://x2download.app/api/ajaxSearch/facebook',{
			method: "POST",
			data: "q=" + encodeURIComponent(url)
  })
    let p = res.data
    return {
      status: p.status,
      author: "Boedzhanks",
      title: p.title,
      duration: p.duration,
      thumbnail: p.thumbnail,
      link: p.links
    }
} catch (err) {
  return err
}
}