'use strict';
function cupsToMl(cup){
  return cup * 250;
}

function mlToCups(ml){
  return ml * 0.004;
}

exports.cupsToMl = cupsToMl;
exports.mlToCups = mlToCups;