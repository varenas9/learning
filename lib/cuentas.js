'use strict';
function cuentas(total, propina, itbms){
  function calcularItbms(total){
    return (total * 0.07);
  }
  function calcularPropina(total, propina, sobreItbms){
    if (sobreItbms === true){
      const itbms = calcularItbms(total);
      return (total + itbms) * propina;
    }
    return total * propina;
  }
  function totalDebt(total, propina, itbms){
    return total + propina + itbms;
  }

  const totalItbms = calcularItbms(total);
  const totalPropina = calcularPropina(total, propina, itbms);
  const totalDetails = totalDebt(total, totalPropina, totalItbms);
  return Math.round(totalDetails * 100) / 100;
};
module.exports = cuentas;