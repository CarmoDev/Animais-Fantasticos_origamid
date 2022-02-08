//modulos(é uma forma de dividir o codigo em modulos, oque ajuda no compartilhamento e na manuteção do código)
//para transformamos em modulo basta
<script type="module" src="js/script.js"></script>

//para exportamos um modulo temos que
// arquivo scroll-suave.js

/*export default function scrollSuave() {
    ...
   };(adicionamos o default quando estamos exportando apenas uma função*/


//e para importa o arquivo
// arquivo script.js

import scrollSuave from './scroll-suave.js.js';
scrollSuave();