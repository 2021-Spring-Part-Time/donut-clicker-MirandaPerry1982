class DonutMaker {
  constructor(numDonuts, numAutoClickers, numDonutMultipliers, autoClickCost, multiplierCost) {
    this.numDonuts = numDonuts;
    this.numAutoClickers = numAutoClickers;
    this.numDonutMultipliers = numDonutMultipliers;
    this.autoClickCost = autoClickCost;
    this.multiplierCost = multiplierCost;
  }

  addDonut(){
    this.numDonuts++;
    if(this.numDonuts >= 100){
      autoClickBtn.removeAttribute('disabled');
    } else {
        autoClickBtn.setAttribute('disabled', 'disabled');
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
    if (this.numAutoClickers > 0) {
      this.numDonuts += this.numAutoClickers * 1;

    }
  }

  addDonutMultiplier (){
    if(this.numDonuts >= 10){
      this.numDonutMultipliers++;
      this.numDonuts -= 10;
      this.multiplierCost = Math.round(this.multiplierCost * 1.1);
      this.numDonuts = Math.pow(1.2, this.numDonutMultipliers);
    }
  }

  reset(){
    if(this.numDonuts >= 1){
    location.reload();
}
    

  }


}

export default DonutMaker;