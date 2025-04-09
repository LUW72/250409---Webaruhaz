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
  
        let html = `<div class="card text-center border-0" style="width: 224px;">
    <!-- Fix szélesség és magasság a képeknek -->
    <img src="${this.#termek.kep}" class="card-img-top mx-auto d-block" style="width:100%; height: 250px; object-fit: cover;" alt="${this.#termek.cim}">
    <div class="card-body">
        <h6 class="fw-bold mb-1">${this.#termek.cim}</h6>
        <p class="text-muted mb-2" style="font-size: 14px;">${this.#termek.szerzo}</p>
        <span class="badge border mb-2 rounded-5" style="background-color: #E6F0EF; color: #6DA8A4">📖 Könyv</span>
        <p class="mb-2 fw-semibold" style="font-size: 18px;">Online ár:<br><span class="text-dark">${this.#termek.ar} Ft</span></p>
        <button class="kosarbtn btn w-100" style="background-color: #d4a659; color: white;">Kosárba</button>
    </div>
</div>

            `;

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
  