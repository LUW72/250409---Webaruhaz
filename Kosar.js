export default class Kosar {
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
        <div class="card mb-3 shadow-sm p-2">
          <div class="row g-3 align-items-center">
            <div class="col-md-3">
              <img src="..." class="img-fluid rounded" alt="${termek.cim}">
            </div>
            <div class="col-md-6">
              <h5 class="mb-1">${termek.cim}</h5>
              <p class="mb-2 text-muted">${termek.szerzo}</p>
              <p class="fw-bold">${termek.ar} Ft</p>
            </div>
            <div class="col-md-3 text-end">
              <div class="input-group mb-2">
                <button class="btn btn-primary" type="button">−</button>
                <input type="text" class="form-control text-center" value="1" style="max-width: 50px;">
                <button class="btn btn-primary" type="button">+</button>
              </div>
              <button class="btn btn-primary btn-sm">Eltávolít</button>
            </div>
          </div>
        </div>
      `;
    
      this.pElem.insertAdjacentHTML("beforeend", html);
    }
    
    delete(){
      this.deleteElem.addEventListener("click", () => {
        const e = new CustomEvent("delete", { detail: this.#index });
        window.dispatchEvent(e);
        
      });
    }
    
  }
  