function validarFormulario() {
    var campoA = document.getElementById("campoA").value;
    var campoB = document.getElementById("campoB").value;
    if (parseInt(campoB) > parseInt(campoA)) {
        document.getElementById("mensagem").innerHTML = "Formulário válido!";
    } else {
        document.getElementById("mensagem").innerHTML = "Formulário inválido. O valor de B deve ser maior que o valor de A.";
    }
}