'use strict';
function cuentas(total, propina, sobreItbms, callback){
  const itbms = 0.07;

  // Anonymous function
  const calcularItbms = function(cb) {
    const results = total * itbms;
    return cb(results);
  };

  // Named function
  function calcularPropina(callback) {
    if (sobreItbms === true){
      return calcularItbms((itbms) => {
        const results = (total + itbms) * propina;
        return callback(results);
      });
    }
    const results = total * propina;
    return callback(results);
  };
  // Arrow function
  const totalDebt = (propina, itbms, callback) => {
    const results = total + propina + itbms;
    return callback(results);
  };

  calcularItbms((results) => {
    const totalItbms = results;

    calcularPropina((results) => {
      const totalPropina = results;

      totalDebt(totalPropina, totalItbms, (results) => {
        const totalDetails = results;
        const totalResults =  Math.round(totalDetails * 100) / 100;
        return callback(totalResults);
      });
    });

  });

};
module.exports = cuentas;