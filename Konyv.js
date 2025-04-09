export default class Konyv {
    #index;
    #termekAdat;
  
    constructor(index, termekAdat, pElem) {
      this.#index = index;
      this.#termekAdat = termekAdat;
      this.pElem = pElem;
      this.megjelenit();
    }
  
    megjelenit() {
      let termek = this.#termekAdat[this.#index];
  
      let html = `
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${termek.kep}" class="img-fluid rounded-start" alt="${termek.cim}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${termek.cim}</h5>
              <p class="card-text">${termek.szerzo}</p>
              <button type="button" class="btn btn-info">Kosárba</button>
              <p class="card-text"><small class="text-body-secondary">${termek.ar} Ft</small></p>
            </div>
          </div>
        </div>
      </div>`;
  
      this.pElem.insertAdjacentHTML("beforeend", html);
    }
  }
  