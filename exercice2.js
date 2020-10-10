function analyzeTemperature(quantity, data) {

  let tabData = data.split(" ");
  let valProche = 0;


  if (quantity >=0 && quantity <=10000){
    for (let i = 0;i<tabData.length;i++){
      if(valProche ===0){
        valProche = tabData[i];
      }
      else if (tabData[i] > 0 && tabData[i] <= Math.abs(valProche)){
        valProche = tabData[i];
      }
      else if (tabData[i] < 0 && -tabData[i] <= Math.abs(valProche)){
        valProche = tabData[i];
      }

    }
  return valProche;
  }
  else {
    return "Erreur : La quantité comprise entre 0 et 10.000 max";
  }
}

let testData = '2 -5 -7 9 3';

console.log(analyzeTemperature(1000,testData));
