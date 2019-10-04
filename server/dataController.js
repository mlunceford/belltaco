const data = require('./data.json')


module.exports = {
    allData: (req, res) => {
        res.status(200).send(data)
    },
    myData: (req, res) => {
        const { name, cost, calories, carbohydrates, sugars, protein } = req.body
        const foods = {
            name: name,
            // cost: cost,
            // calories: calories,
            // carbs: carbohydrates,
            // sugars: sugars,
            // protein: protein
        }
        data.push(foods)
        res.status(200).send(data)
        console.log('work')
    },
    deleteData: (req, res) => {
        console.log('work')
        const { index } = req.params;
        data.splice(index, 1)
        res.status(200).send(data)
    },
    // ! i may have to write this out individually so you can edit individuall or maybe i can 
    // ! hit edit button and edit all of the stuff at once but i might have to keep the info in my input to make that happen.
    renameData: (req, res) => {
        const { index, name1, cost1, calories1, carbohydrates1, sugars1, protein1 } = req.body;
        data[index].name = name1;
        data[index].cost = cost1;
        data[index].calories = calories1;
        data[index].carbohydrates = carbohydrates1;
        data[index].sugars = sugars1;
        data[index].protein = protein1;
        res.status(200).send(data);
        console.log('work')
    }
}