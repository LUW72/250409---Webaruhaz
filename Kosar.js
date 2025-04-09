import  Konyvek  from "Konyvek.js";

export default class Kosar {
  #index;
  #termekAdat;
  constructor(index, termekAdat, pElem) {
    this.#index = index;
    this.#termekAdat = termekAdat;

    let pElem = document.querySelector(".oldal");
  }

  megjelenit() {
    let html = `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${this.#termekAdat[this.#index].cim}</h5>
        <p class="card-text">${this.#termekAdat[this.#index].szerzo}</p>
        <button type="button" class="btn btn-info">Kosárba</button>
        <p class="card-text"><small class="text-body-secondary">${this.#termekAdat[this.#index].ar}</small></p>
    </div>
    </div>
    </div>
    </div>`;

    this.pElem.insertAdjacentHTML("beforeend", html);
  }
}
