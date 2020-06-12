class NewsUi {
  constructor() {
    this.container = document.querySelector
    ('.news-wrap .row');
  }
  addItem(item) {
    let template = NewsUi.getTemplate(item);
    this.container.insertAdjacentHTML('afterbegin', template);
  }
  clearContainer() {
    // let first = this.container.firstElementChild;
    // while(first) {
    //   this.container.removeChild(first);
    //   first = this.container.firstElementChild;
    // }
    this.container.innerHTML = '';
  }
  static getTemplate(item) {
    return `<div class="col s12 m6">
    <div class="card">
      <div class="card-image">
        <img src="${item.icon_url || ''}" alt="image desciption">
      </div>
      <div class="card-id"><a href="${item.url || '#'}" target="_blank">${item.id || ''}</a></div>
      <div class="card-favourite">favourite</div>
      <div class="card-content"><p>${item.value || ''}</p></div>
      <div class="card-date">${item.created_at || ''}</div>
      <div class="card-category">${item.categories || ''}</div>
    </div>
  </div>`;
  }
}