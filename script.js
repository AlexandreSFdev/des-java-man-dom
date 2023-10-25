let elementoH1 = document.getElementById("titulo");
let elementoUl = document.querySelector("ul");
let elementoA = document.querySelector("a");
let elementoOl = document.getElementById("lista-ordenada");

elementoH1.innerText = "Proz Educação";

elementoUl.innerHTML = `
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
`;

elementoA.innerText = "Acesse o nosso site.";

elementoOl.innerHTML = `
<li><a href="https://www.w3schools.com/html/default.asp">Tutorial HTML</a></li>
<li><a href="https://www.w3schools.com/css/default.asp">Tutrial CSS</a></li>
<li><a href="https://www.w3schools.com/js/default.asp">Tutorial JavaScript</a></li>
`