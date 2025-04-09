export default class Konyv {
    #index;
  
    constructor(pElem, kep, cim, szerzo, ar, index) {
      this.pElem = pElem;
      this.kep = kep;
      this.cim = cim;
      this.szerzo = szerzo;
      this.ar = ar;
      this.#index = index;
  
      this.megjelenit();
    }
  
    megjelenit() {
        this.pElem.innerHTML = `
                <div class="card mb-3 shadow-sm" style="width: 18rem;">
                    <img src="${this.kep}" class="card-img-top" alt="${this.cim}">
                    <div class="card-body">
                        <h5 class="card-title">${this.cim}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${this.szerzo}</h6>
                        <p class="card-text">Ár: ${this.ar} Ft</p>
                        <button class="btn btn-primary w-100" id="kosarba-${this.#index}">Kosárba</button>
                    </div>
                </div>
                `;
    }
  }
  