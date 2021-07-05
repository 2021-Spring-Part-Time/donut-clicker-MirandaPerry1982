import DonutMaker from './DonutMaker.js';

const myDonutMaker = new DonutMaker(0,0,0,100,10);
const donutBtn = document.getElementById("donutBtn");
donutBtn.addEventListener(
    'click', () => {
      myDonutMaker.addDonut();
      console.log(myDonutMaker.numDonuts)
    document.getElementById("donutCount").innerHTML = "Number of Donuts: " + myDonutMaker.numDonuts; 
    })

    let autoClickBtn = document.getElementById("autoClickBtn");
    autoClickBtn.addEventListener(
        'click', () => {
          myDonutMaker.addAutoClicker();
          console.log(myDonutMaker.numAutoClickers)
        document.getElementById("autoCount").innerHTML = "Number of Auto Clickers: " + myDonutMaker.numAutoClickers; 
        document.getElementById("donutCount").innerHTML = "Number of Donuts: " + myDonutMaker.numDonuts;
        document.getElementById("autoClickCost").innerHTML = "Cost of Auto Clicker: " + myDonutMaker.autoClickCost;
        myDonutMaker.activateAutoClickers();
        console.log(myDonutMaker.numAutoClickers);

        setInterval(function(){
            myDonutMaker.activateAutoClickers(); 
            document.getElementById("donutCount").innerHTML = "Number of Donuts: " + myDonutMaker.numDonuts;
        }, 1000);
         })

    const multiplierBtn = document.getElementById("multiplierBtn");
    multiplierBtn.addEventListener('click', ()=>{
        myDonutMaker.addDonutMultiplier();
        document.getElementById('multiplierCount').innerHTML = "Number of Multipliers: " + myDonutMaker.numDonutMultipliers;
        document.getElementById('multiplierCost').innerHTML = "Cost of Multiplier: " + myDonutMaker.multiplierCost;
        console.log(myDonutMaker.numDonutMultipliers)

    }) 

    const resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener('click', ()=>{
        myDonutMaker.reset();

    })
    









    



        









