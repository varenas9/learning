'use strict';
const calcularItbms = require('./lib/itbms');
const calcularPropina = require('./lib/propina');
const color = require('./lib/color');

let vane = 3.99;
let ayleen = 2;
const naths = 5;
const oso = 4.99;

ayleen = ayleen + 1.99;
vane = vane + 8.99;


const ayleenItbms = calcularItbms(ayleen);
const vaneItbms = calcularItbms(vane);
const nathsItbms = calcularItbms(naths);
const osoItbms = calcularItbms(oso);

const vaneProp = calcularPropina((vane + vaneItbms), 0.15);
const nathsProp = calcularPropina(naths, 0.05);
const osoProp = calcularPropina((oso + osoItbms), 0.10);
const ayleenProp = calcularPropina(ayleen + ayleenItbms, 0);

const ayleenTotal = ayleen + ayleenItbms + ayleenProp;
const vaneTotal = vane + vaneItbms + vaneProp;
const nathsTotal = naths + nathsItbms + nathsProp;
const osoTotal = oso + osoItbms + osoProp;

console.log(color('Vane: $' + vaneTotal, 'red'));
console.log(color('Naths: $' + nathsTotal, 'blue'));
console.log(color('Ayleen: $' + ayleenTotal, 'green'));
console.log(color('Oso: $' + osoTotal, 'yellow'));