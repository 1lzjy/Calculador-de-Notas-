function Calcular() {
  //variavel Ad
  var ValorElementoAD = document.getElementById("NotaAD");
  var valorAD = ValorElementoAD.value;
  var valorNumericoAD = parseFloat(valorAD);
  //variavel Simulado
  var ValorElementoS = document.getElementById("NotaS");
  var valorS = ValorElementoS.value;
  var valorNumericoS = parseFloat(valorS);
  //variavel Ab
  var ValorElementoAB = document.getElementById("NotaAB");
  var valorAB = ValorElementoAB.value;
  var valorNumericoAB = parseFloat(valorAB);
  //variavel Formativo
  var ValorElementoF = document.getElementById("NotaF");
  var valorF = ValorElementoF.value;
  var valorNumericoF = parseFloat(valorF);

  //variavel media bimestral
  var MB =
    (valorNumericoAD + valorNumericoS + valorNumericoAB + valorNumericoF) / 2;
  var MBF = MB.toFixed(2);
  //variavel mensagem media anual
  var elementoMB = document.getElementById("MediaB");
  var MB = "Média Bimestral arredonda/aproximada = " + MBF;
  elementoMB.innerHTML = MB;
  //varial mensagem Status
  //variavel faltando
  var MDB = 7
  var MDBP = parseFloat(MDB)
  var MDF = MDBP.toFixed(2)
  
  var falta = MDF - MBF
  var faltaF = falta.toFixed(2)
  
  
  if (MBF > 6.99) {
    var elementoStatus = document.getElementById("Status");
    var Status = "Status = APROVADO";
    elementoStatus.innerHTML = Status;
    // faltando
    var elementoFaltando = document.getElementById("faltando");
    var faltando = " ";
    elementoFaltando.innerHTML = faltando;
  } else {
    var elementoStatus = document.getElementById("Status");
    var Status = "Status = REPROVADO";
    elementoStatus.innerHTML = Status;
    var elementoFaltando = document.getElementById("faltando");
    var faltandoN = "nota necessária para alcança a média = " + faltaF ;
    elementoFaltando.innerHTML = faltandoN;
  }
}