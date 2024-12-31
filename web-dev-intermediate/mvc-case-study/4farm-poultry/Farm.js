const fs = require('fs');
const {Chicken, Duck, Turkey, Quail, Other} = require('./Poultry');

class Farm {
    static readCSV() {
        let temp = fs.readFileSync('./poultries.csv', 'utf8');
        // temp is a string(bacause csv save data in string), so we need to convert it to instance (because this is OOP).
        // console.log(typeof temp);  //string
        let tempSplit = temp.split('\r\n');  //tempSplit to convert string to array
        // console.log(typeof tempSplit);  //object(array) note: in JS array is an object
        // console.log(tempSplit.length)  //test if tempSplit is an array

        // Convert to array 2D
        let tempData = [];
        for (let i = 1; i < tempSplit.length; i++) {
            tempData.push(tempSplit[i].split(','));
        }
        // console.log(tempData);

        // Convert to object/instance (because this is OOP)
        let poultries = tempData.map(data => {
            let [id, category, price, isMature] = data;
            switch (category) {
                case 'chicken':
                    return new Chicken(+id, +price, isMature);
                case 'duck':
                    return new Duck(+id, +price, isMature);
                case 'turkey':
                    return new Turkey(+id, +price, isMature);
                case 'quail':
                    return new Quail(+id, +price, isMature);
                default:
                    return new Other(+id, +price, isMature);
            }
        })
        return poultries
    }
    static total() {
        let poultries = Farm.readCSV();
        let count = {
            chicken: 0,
            duck: 0,
            turkey: 0,
            quail: 0,
            other: 0
        }
        poultries.forEach(poultry => {
            let { category } = poultry;
            switch (category) {
                case 'chicken':
                    count.chicken++;
                    break;
                case 'duck':
                    count.duck++;
                    break;
                case 'turkey':
                    count.turkey++;
                    break;
                case 'quail':
                    count.quail++;
                    break;
                default:
                    count.other++;
                    break;
            }
        })
        console.log('Total poultries: ');
        console.log(`Chicken: ${count.chicken} pcs`);
        console.log(`Duck: ${count.duck} pcs`);
        console.log(`Turkey: ${count.turkey} pcs`);
        console.log(`Quail: ${count.quail} pcs`);
        console.log(`Other: ${count.other} pcs`);
    }
    static addPoultry(category, price) {
        let poultries = Farm.readCSV();
        let id = poultries[poultries.length - 1].id + 1;
        switch(category) {
            case 'chicken':
                poultries.push(new Chicken(id, price));
                break;
            case 'duck':
                poultries.push(new Duck(id, price));
                break;
            case 'turkey':
                poultries.push(new Turkey(id, price));
                break;
            case 'quail':
                poultries.push(new Quail(id, price));
                break;
            default:
                poultries.push(new Other(id, price));
                break;
        }
        this.save(poultries);
    }
    static sellPoultry(id) {
        let poultries = this.readCSV();
        poultries = poultries.filter(poultry => poultry.id !== id);

        this.save(poultries);
    }
    static save(poultries) {
        let temp = [];
        let result = [
          ['id,category,price,isMature']
        ];
        // because 'poultries' var is an object, so we need to convert it back to a string(because .csv store string data type)
        // console.log(poultries);  //object
        for (let i = 0; i < poultries.length; i++) {
          const { id, category, price, isMature } = poultries[i];
          temp.push([id, category, price, isMature]);
        }
        // console.log(temp);  //array 2D

        for (let i=0; i < temp.length; i++) {
          result.push(temp[i].join(','))
        }
        // console.log(result);  //array 1D

        let fixResult = result.join('\r\n')
        // console.log(fixResult);  //string
        fs.writeFileSync('./poultries.csv', fixResult)
    }

    
}



module.exports = Farm;