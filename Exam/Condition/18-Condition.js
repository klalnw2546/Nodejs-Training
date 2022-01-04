//calculate profit or loss

const ps = require("prompt-sync");
const readline = ps();

let costPrice = readline('Enter Cost Price: ');
let sellPrice = readline('Enter Sell Price: ');
 costPrice = parseInt(costPrice);
 sellPrice = parseInt(sellPrice);

if(sellPrice > costPrice) {
  console.log(`Profit: ${sellPrice - costPrice}`);
} else if(costPrice > sellPrice) {
  console.log(`Loss: ${costPrice - sellPrice}`);
} else if(costPrice === sellPrice) {
  console.log(`sell at cost`);
}






