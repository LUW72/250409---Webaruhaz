export default class Kosar {
    #index;
    #termekAdat;
    amount = 0;
    elem;
  
    constructor(index, termekAdat, pElem, amount) {
      this.#index = index;
      this.#termekAdat = termekAdat;
      this.pElem = pElem;
      this.amount = amount;
      this.#render();
    }
    
    #render() {
      const termek = this.#termekAdat[this.#index];
  
      const html = `
        <div class="card mb-3 shadow-sm p-2 kosar-item">
          <div class="row g-3 align-items-center">
            <div class="col-md-3">
              <img src="${termek.kep}" class="img-fluid rounded" alt="${termek.cim}">
            </div>
            <div class="col-md-6">
              <h5 class="mb-1">${termek.cim}</h5>
              <p class="mb-2 text-muted">${termek.szerzo}</p>
              <p class="fw-bold">${termek.ar} Ft</p>
            </div>
            <div class="col-md-3 text-end">
              <div class="input-group mb-2">
                <button class="btn btn-primary btn-sm minus-btn" type="button">−</button>
                <input type="text" class="form-control text-center amount-display" value="${this.amount}" style="max-width: 50px;" readonly>
                <button class="btn btn-primary btn-sm plus-btn" type="button">+</button>
              </div>
              <button class="btn btn-danger btn-sm delete-btn">Eltávolít</button>
            </div>
          </div>
        </div>
      `;
  
      this.pElem.insertAdjacentHTML("beforeend", html);
      this.elem = this.pElem.lastElementChild;
  
      this.#addListeners();
    }
  
    #addListeners() {
      const plusBtn = this.elem.querySelector(".plus-btn");
      const minusBtn = this.elem.querySelector(".minus-btn");
      const deleteBtn = this.elem.querySelector(".delete-btn");
  
      plusBtn.addEventListener("click", () => {
        console.log(`➕ Plus clicked on index ${this.#index}`);
        window.dispatchEvent(new CustomEvent("mennyisegNovel", { detail: this.#index }));
      });
  
      minusBtn.addEventListener("click", () => {
        console.log(`➖ Minus clicked on index ${this.#index}`);
        window.dispatchEvent(new CustomEvent("mennyisegCsokkent", { detail: this.#index }));
      });
  
      deleteBtn.addEventListener("click", () => {
        console.log(`❌ Delete clicked on index ${this.#index}`);
        window.dispatchEvent(new CustomEvent("delete", { detail: this.#index }));
      });
    }
  }
  