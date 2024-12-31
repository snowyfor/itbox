/*
> poultries.csv (copy it)
> Poultry.js
-Create class Poultry with (id, category||'', price||0) attributes
-Create sub-class Chicken, Duck, Turkey, Quail, Other & add isMature||'n' attribute for all sub-classes
-Export all sub-classes
> Farm.js
-Create readCSV(), total(), addPoultry(), sellPoultry(), save()
> run these commands one-by-one while opening poultries.csv
Farm.readCSV();
Farm.total();
Farm.addPoultry('turkey', 123000);
Farm.sellPoultry(11);
*/

const Farm = require("./Farm");

// Farm.readCSV();
// Farm.total();
// Farm.addPoultry('turkey', 123000);
// Farm.sellPoultry(11);