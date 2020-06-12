const http = new customHTTP();

class NewsApiService {
  constructor(baseUrl, apiKey) {
    this.baseUrl = baseUrl || 'https://api.chucknorris.io/jokes/';
    this.apiKey = apiKey;
    this.random = 'random';
    this.categoryAnimal = 'random?category=animal';
    this.categoryCareer = 'random?category=career';
    this.categoryCelebrity = 'random?category=celebrity';
    this.categoryDev = 'random?category=dev';
  }

  getRandomFacts(callback, random) {
    http.get(`${this.baseUrl}${random}`, callback)
  }

  getCategoryAnimal(callback, categoryAnimal) {
    http.get(`${this.baseUrl}${this.categoryAnimal}`, callback)
  }

  getCategoryCareer(callback, categoryCareer) {
    http.get(`${this.baseUrl}${this.categoryCareer}`, callback)
  }

  getCategoryCelebrity(callback, categoryCelebrity) {
    http.get(`${this.baseUrl}${this.categoryCelebrity}`, callback)
  }

  getCategoryDev(callback, categoryDev) {
    http.get(`${this.baseUrl}${this.categoryDev}`, callback)
  }

  // getCategoryFacts(callback, category) {
  //   http.get(`${this.baseUrl}${this.category}`, callback)
  // }

  // getRandomFacts(callback, category) {
  //   http.get(`${this.baseUrl}${category}`, callback)
  // }
}