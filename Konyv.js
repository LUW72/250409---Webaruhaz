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
  
        let html = `<div class="card text-center border-0" style="width: 224px;">
    <!-- Fix szélesség és magasság a képeknek -->
    <img src="${termek.kep}" class="card-img-top mx-auto d-block" style="width:100%; height: 250px; object-fit: cover;" alt="${termek.cim}">
    <div class="card-body">
        <h6 class="fw-bold mb-1">${termek.cim}</h6>
        <p class="text-muted mb-2" style="font-size: 14px;">${termek.szerzo}</p>
        <span class="badge border mb-2 rounded-5" style="background-color: #E6F0EF; color: #6DA8A4">📖 Könyv</span>
        <p class="mb-2 fw-semibold" style="font-size: 18px;">Online ár:<br><span class="text-dark">${termek.ar} Ft</span></p>
        <button class="btn w-100" style="background-color: #d4a659; color: white;">Kosárba</button>
    </div>
</div>

            `;

        this.pElem.insertAdjacentHTML("beforeend", html);
    }
}