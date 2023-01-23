/*
2) Faça uma função que receba uma string contendo um CPF e verifique se ele está
formatado de acordo com a máscara 999.999.999-99. A função deve usar regex para fazer
a validação da máscara e deve retornar verdadeiro ou falso.
cpf = “461.636.517-23”
*/

function verifyCPf(cpf) {
    const regexTeste = /^([0-9]{3})\.?([0-9]{3})\.?([0-9]{3})\-?([0-9]{2})$/gm /
        console.log(regexTeste.test(cpf)); // true
};

verifyCPf("461.636.517-23");
