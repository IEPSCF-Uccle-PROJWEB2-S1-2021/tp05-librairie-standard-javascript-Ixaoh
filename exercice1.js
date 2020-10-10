function chuckNorris(msg) {
  let msgBinaire = "";

  for (i in msg){
    msgBinaire += msg[i].charCodeAt(0).toString([2]) + " ";
  }

  let tabMsg = msgBinaire.split("");
  let msgUnaire ="";
  if (tabMsg[0] == '1'){
    msgUnaire += "0 0";
  }
  else {
    msgUnaire += "00 0";
  }

  for (let i = 1; i<tabMsg.length; i++){
    if(tabMsg[i] == tabMsg[(i-1)]){
      msgUnaire+= "0";
    } else if (tabMsg[i] == '1'){
      msgUnaire += " 0 0";
    } else {
      msgUnaire += "00 0";
    }
  }
  return msgUnaire;
}
console.log(chuckNorris("C"));
console.log(chuckNorris("CC"));
