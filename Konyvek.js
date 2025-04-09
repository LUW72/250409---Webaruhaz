
export default class Konyvek
{
    pElem;
    #kosarLista = [
        {

        }
    ];

    constructor(pElem, KONYVLISTA)
    {
        this.pElem = pElem;
        this.navbarKonyvekGomb = document.querySelector(".konyvek");
        this.navbarKosarGomb = document.querySelector(".kosar");
        this.lista = KONYVLISTA;
        this.megjelenit();
    }


    megjelenit()
    {
        this.navbarKonyvekGomb.addEventListener("click", ()=>{
            console.log(this.navbarKonyvekGomb.innerHTML)
            

        });

        this.navbarKosarGomb.addEventListener("click", ()=>{
            console.log(this.navbarKosarGomb.innerHTML)
            
            for (let index = 0; index < this.lista.length; index++) 
                {
                    new Kosar(this.lista[index], this.lista[index].cim, this.lista[index].szerzo, this.lista[index].ar);
                }
        });
    }
}