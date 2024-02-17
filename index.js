const colecao_objs =[
    {id: 1, nome: "César", idade: 20,estado: "AM"},
    {id: 2, nome: "Guto", idade: 19,estado: "BA"},
    {id: 3, nome: "Julio", idade: 43,estado: "RJ"},
    {id: 4, nome: "Gaiotto", idade: 80,estado:"SP" },
    {id: 5, nome: "Alves", idade: 53, estado:"ES" }
];

function gerarTabela(){
    var tabelaHTML = "<table border='1'>";

    tabelaHTML += "<tr><th>Nome</th><th>Idade</th><th>Estado</th>";
    
    for(var i = 0; i < colecao_objs.length; i++){

        tabelaHTML += "<tr>";
        tabelaHTML += "<td>" + colecao_objs[i].nome+ "</td>";
        tabelaHTML += "<td>" + colecao_objs[i].idade+ "</td>";
        tabelaHTML += "<td>" + colecao_objs[i].estado+ "</td>";
        tabelaHTML += "</tr>";
    
        };
        tabelaHTML+="</table>";

        document.getElementById("tabela-container").innerHTML = tabelaHTML;
    };
   

    window.onload = function(){
        gerarTabela();
    };