// const url = 'https://api.chucknorris.io/jokes/random';
// const xhr = new XMLHttpRequest();
// xhr.open('GET', `${url}`);
// xhr.send();

// xhr.addEventListener('load', (e) => {
//   console.log(e);
//   console.log(xhr.responseText);
//   console.log(JSON.parse(xhr.responseText));
// });

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
  // post(url, data, callback) {
  //   const xhr = new XMLHttpRequest();
  //   xhr.open('POST', this.baseUrl+url);
  //   xhr.setRequestHeader('Content-type', 'application/json')
  //   xhr.send(data);
  //   xhr.addEventListener('load', () => {
  //     callback(xhr.responseText);
  //   });
  // };
// }

// let http = new CustomHttp('https://api.chucknorris.io/jokes/');

// http.get('random', (response) => {
//   console.log('random', JSON.parse(response));
// }); 

// http.get('categories', (response) => {
//   console.log('categories', JSON.parse(response));
// });













const api = new NewsApiService('https://api.chucknorris.io/jokes/');
const newsUi = new NewsUi();


const form = document.forms['newsControlForm'];
const radioRandom = form['random'];
const radioCategories = form['categories'];
const radioSearch = form['search'];


// console.log(document.forms['newsControlForm']['random']);

radioRandom.addEventListener('change', onRadioChange);

// radioRandom.addEventListener('click', onButtonClick);
// radioRandom.addEventListener('click', onButtonClick);
// radioRandom.addEventListener('click', onButtonClick);


// radioCategories.addEventListener('change', getCategoryFacts);
// radioSearch.addEventListener('change', onRadioChange);
// console.log(radioSearch.addEventListener('checked', onRadioChange));


function onRadioChange(e) {
  let random = radioRandom.value;

  api.getRandomFacts((response) => {
    console.log(response);
    console.log(api);
    // onSuccess(response)
    newsUi.clearContainer();
    newsUi.addItem(response)
  }, random); 
}

let btnBox = document.querySelector('.btn-box');
btnBox.addEventListener('click', onButtonClick);

function onButtonClick(e) {
  if (e.target.tagName === 'BUTTON') {
    // console.log(e.target.value);
    if (e.target.value === 'animal') {
      api.getCategoryAnimal((response) => {
        newsUi.clearContainer();
        newsUi.addItem(response)
      }, e.target.value);
    } else if (e.target.value === 'career') {
      api.getCategoryCareer((response) => {
        newsUi.clearContainer();
        newsUi.addItem(response)
      }, e.target.value);
    } else if (e.target.value === 'celebrity') {
      api.getCategoryCelebrity((response) => {
        newsUi.clearContainer();
        newsUi.addItem(response)
      }, e.target.value);
    } else if (e.target.value === 'dev') {
      api.getCategoryDev((response) => {
        newsUi.clearContainer();
        newsUi.addItem(response)
      }, e.target.value);
    }
  }
  // for (let input of inputs) {
  //   console.log( input);
    
  //   if (input.value == 'animal') {
  //     let btn = buttons.value;
  //     api.getCategoryAnimal((response) => {
  //       // console.log(response);
  //       // console.log(api);
  //       // onSuccess(response)
  //       newsUi.addItem(response)
  //     }, btn); 
  //   }
  // }
}

// function getCategoryFacts(e) {
//   let category = radioCategories.value;

//   api.getCategoryFacts((response) => {
//     console.log(response);
//     // onSuccess(response)
//     // if(response) {
//     //   onSuccess(response)
//     // } else {
//     //   onError(response)
//     // }
//     // console.log(newsUi.addItem(response));
//     newsUi.addItem(response)
    
//   }, category);  
// }



// function onSuccess(api) {
//   console.log(api);
  
//   for(let article of api) {
//     newsUi.addItem(article)
//   }
// }

// function onError(response) {
  
// }
function positiveSum(arr) {
  let n = 0;
  for(let i = 0; i < arr.length; i++) {
      if(arr[i] < 1) {
          continue;
      }
      n += arr[i]; 
  }
  return n;
}
positiveSum([1,-2,3]);

function abbrevName(str) {
  let arr = str.split(' ');
  
  let word = [];
  for(let i = 0; i < arr.length; i++) {

    word.push(arr[i][0],'.');
  }
  word.length--;
  return word.join('');
}

abbrevName('Hui Bu')