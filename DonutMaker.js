class DonutMaker {
  constructor(numDonuts, numAutoClickers, numDonutMultipliers, autoClickCost, multiplierCost) {
    this.numDonuts = numDonuts;
    this.numAutoClickers = numAutoClickers;
    this.numDonutMultipliers = numDonutMultipliers;
    this.autoClickCost = autoClickCost;
    this.multiplierCost = multiplierCost;
    this.donutsPerClick = donutsPerClick;
  }

  addDonut(){
    this.numDonuts += this.getDonutsPerClick();

    if(this.numDonuts >= this.autoClickCost){
      autoClickBtn.removeAttribute('disabled');
    } else {
        autoClickBtn.setAttribute('disabled', 'disabled');
    }if(this.numDonuts >= this.multiplierCost){
      multiplierBtn.removeAttribute('disabled');
    } else {
      multiplierBtn.setAttribute('disabled', 'disabled');
    }
    
  }

  addAutoClicker() {
    if(this.numDonuts >= 100) {
      this.numAutoClickers++;
      this.numDonuts -= 100;
      this.autoClickCost = Math.round(this.autoClickCost * 1.1);
      
    }
  }

  activateAutoClickers() {
    for (let i = 0; i < this.numAutoClickers; i++) {
      this.addDonut();

    }
  }

  addDonutMultiplier (){
    if(this.numDonuts >= 10){
      this.numDonutMultipliers++;
      this.numDonuts -= 10;
      this.multiplierCost = Math.round(this.multiplierCost * 1.1);
      
    }
    
  }

  getDonutsPerClick (){
    return Math.pow(1.2, this.numDonutMultipliers);
    
  }

  reset(){
    if(this.numDonuts >= 1){
    location.reload();
}
    

  }


}

export default DonutMaker;