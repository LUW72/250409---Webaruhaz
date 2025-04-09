import Konyvek from "./Konyvek.js";
import { KONYVLISTA } from "./konyvLista.js";



const pElem = document.querySelector(".container");

new Konyvek(pElem, KONYVLISTA);