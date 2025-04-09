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
            console.log(this.navbarKonyvekGomb.innerHTML)
            for (let index = 0; index < this.lista.length; index++) 
                {
                    this.oldalElem.innerHTML = "";
                    //new Konyv(this.lista[index].kep, this.lista[index].cim, this.lista[index].szerzo, this.lista[index].ar, this.lista[index]);
                }
        });

        this.navbarKosarGomb.addEventListener("click", ()=>{
            console.log(this.navbarKosarGomb.innerHTML)
            
            for (let index = 0; index < this.lista.length; index++) 
                {
                    this.oldalElem.innerHTML = "";
                    new Kosar(index, this.lista, this.oldalElem);
                }
        });
    }
}