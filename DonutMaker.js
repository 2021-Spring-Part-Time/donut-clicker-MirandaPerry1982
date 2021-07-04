class DonutMaker {
  constructor(numDonuts, numAutoClickers, numDonutMultipliers) {
    this.numDonuts = numDonuts;
    this.numAutoClickers = numAutoClickers;
    this.numDonutMultipliers = numDonutMultipliers;
  }

  addDonut(){
    this.numDonuts++;
  }

  addAutoClicker() {
    if(this.numDonuts >= 100) {
      this.numAutoClickers++;
      this.numDonuts -= 100;
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
    }
  }


}

export default DonutMaker;