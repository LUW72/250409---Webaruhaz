export default class Konyv {
    #index;
    #termek;
  
    constructor(index, termek, pElem) {
      this.#index = index;
      this.#termek = termek;
      this.pElem = pElem;
      this.megjelenit();
      this.hozzaadEvent();
    }
  
    megjelenit() {  
      let html = `
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${this.#termek.kep}" class="img-fluid rounded-start" alt="${this.#termek.cim}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${this.#termek.cim}</h5>
              <p class="card-text">${this.#termek.szerzo}</p>
              <button type="button" class="kosarbtn btn btn-info">Kosárba</button>
              <p class="card-text"><small class="text-body-secondary">${this.#termek.ar} Ft</small></p>
            </div>
          </div>
        </div>
      </div>`;  

      this.pElem.insertAdjacentHTML("beforeend", html);
    }


    hozzaadEvent()
    {
        const buttonElem = document.querySelector(".card:last-child .kosarbtn");
        console.log(buttonElem)
        buttonElem.addEventListener("click", () => {
            window.dispatchEvent(new CustomEvent("kosarHozzaad", { detail: this.#index }));
          }); 
    }   
  }
  