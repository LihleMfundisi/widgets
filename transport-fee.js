function transportFee(shiftRate){
  if (shiftRate == "morning") {
    return "R20"
  }
    if (shiftRate == "afternoon") {
     return "R10"
    }
     if (shiftRate == "nightshift"){
        return "free"
     }
};