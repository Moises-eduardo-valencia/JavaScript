let mes = 4; 
let dia = 6;
let signo = "";
if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
    signo = "Aries";
} else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
    signo = "Tauro";
} else {
    signo = "Otro signo"; 
}
console.log(dia);
console.log(mes);
console.log("El signo zodiacal es:");
console.log(signo);