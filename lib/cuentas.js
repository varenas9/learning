'use strict';
function cuentas(total, propina, sobreItbms){
  const itbms = 0.07;

  function calcularItbms(){
    return (total * itbms);
  }
  function calcularPropina(){
    if (sobreItbms === true){
      const itbms = calcularItbms();
      return (total + itbms) * propina;
    }
    return total * propina;
  }
  function totalDebt(propina, itbms){
    return total + propina + itbms;
  }

  const totalItbms = calcularItbms();
  const totalPropina = calcularPropina();
  const totalDetails = totalDebt(totalPropina, totalItbms);
  return Math.round(totalDetails * 100) / 100;
};
module.exports = cuentas;