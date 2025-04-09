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
  
      const html = `<div class="card mb-3 shadow-sm p-3 kosar-item w-100">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 me-3" style="width: 100px; height: 140px;">
                <img src="${termek.kep}" class="img-fluid h-100 w-100 object-fit-cover rounded" alt="${termek.cim}">
              </div>
              <div class="flex-grow-1">
                <h5 class="mb-1">${termek.cim}</h5>
                <p class="mb-1 text-muted">${termek.szerzo}</p>
                <p class="fw-bold mb-0">${termek.ar} Ft</p>
              </div>
              <div class="d-flex flex-column align-items-end ms-3">
                <div class="input-group input-group-sm mb-2" style="width: 100px;">
                  <button class="btn btn-primary minus-btn" type="button">−</button>
                  <input type="text" class="form-control text-center amount-display" value="${this.amount}" readonly>
                  <button class="btn btn-primary plus-btn" type="button">+</button>
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
  