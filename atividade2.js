//atividade do 17/09
//01
var n1 = new Number (300);
console.log(n1);
var n2 = new Number (999);
console.log(n2);
var n3 = new Number (21);
console.log(n3);
//02
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NaN);
//03
var n = new Number (150);
console.log(n);
console.log(n.toString());
console.log(typeof(n));
//atividade 02
//01
var x = 5;
var y = 8;
console.log(x === y );
let x1 = 6;
let y2 = '6';
console.log(x1 !== y2);
const x3 = '7';
const y3 = 7;
console.log(x3 == y3);
//02
var nome = "Fulano";
console.log("Boa noite, " + nome + "!");
//03
var x = 10;
var y = 5;
console.log(x += y);// x = x + y
//Use o operador de atribuição correto que resultará em x = 15 numa expressão reduzida.
x = 15;
console.log(x -= y);
//Use o operador de atribuição correto que resultará em x = 50 numa expressão reduzida.
x = 50;
console.log(x -= y);
//Use o operador de atribuição correto que resultará em x = 0 numa expressão reduzida.
x = 0;
console.log(x -= y);
//Use o operador de atribuição correto que resultará em x = 2 numa expressão reduzida.
x = 2;
console.log(x -= y);
//Use o operador de atribuição correto que resultará em x = 5 numa expressão reduzida.
x = 5;
console.log(x -= y);//x = x - y
//03
console.log(25%3);
var texto1 = "Programa Start - "
var texto2 = "formação Front end: "
var texto3 = "eu faço parte dessa oportunidade."
console.log(texto1 += texto2 += texto3);
var texto1 = "Mariazinha tem ";
var idade =  9;
var  texto2 = " anos e ";
var quantidade_irmaos = 7;
var texto3 = " irmãos.";
console.log(texto1 + idade + texto2 + quantidade_irmaos + texto3)
//04
//Armazenar os valores: 7, -55, 389, 1000, 3.1459, -46.267;
var n1 = new Number (7);
console.log(n1);
var n2 = new Number (-55);
console.log(n2);
var n3 = new Number (389);
console.log(n3);
var n4 = new Number (1000);
console.log(n4);
var n5 = new Number (3.1459);
console.log(n5);
var n6  = new Number (-46.267);
console.log(n6);
// Somar a primeira variável com a última variável;
console.log(n1 + n2);
//Multiplicar a primeira variável com a terceira variável;
console.log(n1 * n3);
//Dividir a quarta variável pela quinta variável;
console.log(n4 / n5);
//02
//Armazenar os valores: 10, 3, 9, 99.9, 721;
var n1 = new Number (10);
console.log(n1);
var n2 = new Number (3);
console.log(n2);
var n3 = new Number (9);
console.log(n3);
var n4 = new Number (99.9);
console.log(n4);
var n5 = new Number (721);
console.log(n5);
//Validar se a primeira variável é menor que o valor Number.MAX_VALUE;
console.log(n1 < Number.MAX_VALUE);
//Validar se a segunda variável possui valor igual a NaN;
console.log(n2 == NaN);
//Validar se a quinta variável é menor ou igual a terceira variável;
console.log(n5 < n3);