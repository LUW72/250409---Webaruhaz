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
        this.megjelenit();
    }


    megjelenit()
    {
        this.navbarKonyvekGomb.addEventListener("click", ()=>{
            this.oldalElem.innerHTML = "";
            console.log(this.navbarKonyvekGomb.innerHTML)
            for (let index = 0; index < this.lista.length; index++) 
                {
                    new Konyv(index, this.lista, this.oldalElem);
                }
        });

        this.navbarKosarGomb.addEventListener("click", ()=>{
            console.log(this.navbarKosarGomb.innerHTML)
            this.oldalElem.innerHTML = "";
            for (let index = 0; index < this.lista.length; index++) 
                {
                    new Kosar(index, this.lista, this.oldalElem);
                }
        });
    }

    kosarHozzaad()
    {

    }
}