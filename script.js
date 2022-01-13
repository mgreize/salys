"use strict"



var salys = [
    {pavadinimas: "Portugalija", plotas: 92212, gyventojai: 10260000},
    {pavadinimas: "Ispanija", plotas: 505990, gyventojai: 47450795},
    {pavadinimas: "Lietuva", plotas: 65300, gyventojai: 2784279},
    {pavadinimas: "Italija", plotas: 301338, gyventojai: 60317116}
]

// for (var x of salys) {
//     var plotasVienamGyventojui = x.plotas / x.gyventojai * 1000000;
//     console.log(`Šalis: ${x.pavadinimas}, joje gyvena ${x.gyventojai} gyvenotjų. Valstybės plotas: ${x.plotas} km2, plotas tenknatis vienam gyventojui: ${plotasVienamGyventojui.toFixed(2)} m2.`);
//     console.log("=============");
// }

function plotasVienamGyventojui(pavadinimas, plotas, gyventojai){
    var plotasVienam = x.plotas / x.gyventojai * 1000000;
    console.log(`Šalis: ${x.pavadinimas}, joje gyvena ${x.gyventojai} gyvenotjų. Valstybės plotas: ${x.plotas} km2, plotas tenknatis vienam gyventojui: ${plotasVienam.toFixed(2)} m2.`);
    console.log("=============");
}

for (var x of salys) {
    plotasVienamGyventojui(x.pavadinimas, x.plotas, x.gyventojai)
}
