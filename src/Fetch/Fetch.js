

function Fetch1(url,data) {
    return fetch(url, {
        method: "POST", //GET,PUT,DELETE,etc
        mode: "cors", //no=cors, same-origin
        cache: "no-cache",
        credentials: "same-origin", //
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow", //manual , error
        referrer: "no-referrer", //client
        body: JSON.stringify(data)
      }).then(response => {
        return response.json();
      }); 
    
}

exports.module= Fetch1() ;