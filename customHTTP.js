class customHTTP {
  get(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.addEventListener('load', () =>  {
      callback(JSON.parse(xhr.responseText));
    });
  };

  post(url, data, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send(data);
    xhr.addEventListener('load', () => {
      callback(JSON.parse(xhr.responseText));
    });
  };
}

// class CustomHttp {
//   constructor(baseUrl) {
//     this.baseUrl = baseUrl;
//   }
//   get(url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', this.baseUrl+url);
//     xhr.send();
//     xhr.addEventListener('load', () => {
//       callback(xhr.responseText);
//     });
//   };
//   post(url, data, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', this.baseUrl+url);
//     xhr.setRequestHeader('Content-type', 'application/json')
//     xhr.send(data);
//     xhr.addEventListener('load', () => {
//       callback(xhr.responseText);
//     });
//   };
// }