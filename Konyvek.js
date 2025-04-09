import Konyv from "./Konyv.js";
import Kosar from "./Kosar.js";

export default class Konyvek
{
    pElem;
    #kosarLista = [];

    constructor(pElem, KONYVLISTA)
    {
        this.pElem = pElem;
        this.navbarKonyvekGomb = document.querySelector(".konyvek");
        this.navbarKosarGomb = document.querySelector(".kosar");
        this.oldalElem = document.querySelector(".oldal");
        this.lista = KONYVLISTA;

        this.megjelenit(this.lista);
        console.log("listener")
        this.kosarListener();
    }

    megjelenit(lista)
    {
        this.navbarKonyvekGomb.addEventListener("click", () => {
            this.oldalElem.innerHTML = "";
            console.log(this.navbarKonyvekGomb.innerHTML);
            for (let index = 0; index < lista.length; index++) 
            {
                new Konyv(index, lista[index], this.oldalElem);
            }
        });

        this.navbarKosarGomb.addEventListener("click", () => {
            console.log("Kosár megjelenítése:", this.navbarKosarGomb.innerHTML);
            this.#renderKosar();
        });
    }

    kosarListener() 
    {
        window.addEventListener("kosarHozzaad", (event) => {
            const index = event.detail;
            const item = this.#kosarLista.find(elem => elem.index === index);
            if (item) 
            {
                item.amount++;
            } 
            else 
            {
                this.#kosarLista.push({ index: index, amount: 1 });
            }
            console.log("➕ kosarHozzaad:", this.#kosarLista);
            this.#renderKosar();
        });

        window.addEventListener("mennyisegNovel", (event) => {
            const index = event.detail;
            const item = this.#kosarLista.find(elem => elem.index === index);
            if (item) 
            {
                item.amount++;
                this.#renderKosar();
            }
            console.log("➕ mennyisegNovel:", this.#kosarLista);
        });

        window.addEventListener("mennyisegCsokkent", (event) => {
            const index = event.detail;
            const item = this.#kosarLista.find(elem => elem.index === index);
            if (item) 
                {
                item.amount--;
                if (item.amount <= 0) 
                {
                    this.#kosarLista = this.#kosarLista.filter(elem => elem.index !== index);
                }
                this.#renderKosar();
            }
            console.log("➖ mennyisegCsokkent:", this.#kosarLista);
        });

        window.addEventListener("delete", (event) => {
            const index = event.detail;
            this.#kosarLista = this.#kosarLista.filter(elem => elem.index !== index);
            this.#renderKosar();
            console.log("❌ delete:", this.#kosarLista);
        });
    }

    #renderKosar() 
    {
        this.oldalElem.innerHTML = "";
        for (let i = 0; i < this.#kosarLista.length; i++) {
            const kosarElem = this.#kosarLista[i];
            if (kosarElem.amount > 0) 
            {
                new Kosar(kosarElem.index, this.lista, this.oldalElem, kosarElem.amount);
            }
        }
    }
}
