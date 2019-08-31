let Vimeo = require('vimeo').Vimeo;

let clientId="797301be7f1ff9e493f3fbe5ce57dc11c9420420";
let clientSecret="hVnsxnPd7eL9RKN+ka3L8+Z/ED48aqrVxC2LCPgcAoYpqJWZIDFzChB2IRuFqNslsibQ/qNLF7C5UxMnqeyf4w02hZHhKKLdzAI+Z7CSZ62G4u0fQvTrRQJo6CkJ4dFK";
let clientToken="d016ce474e30b612b88f0bbdbec4e696";

let client = new Vimeo(clientId, clientSecret, clientToken);

client.request({
  method: 'GET',
  path: '/me/videos'
}, function (error, body, status_code, headers) {
  if (error) {
    console.log(error);
  }

  //console.log(body);

  console.log("total:", body.total);
  body.data.forEach(video => {
    console.log(video.name,  video.link, video.type);
  });
})




// curl https://api.vimeo.com/me/videos -H "Authorization: bearer d016ce474e30b612b88f0bbdbec4e696"