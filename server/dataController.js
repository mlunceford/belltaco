const data = require('./data.json')


module.exports = {
    allData: (req, res) => {
        res.status(200).send(data)
    },
    myData: (req, res) => {
        const { name, cost, calories, Carbohydrates, sugars, protein } = req.body
        const foods = {
            name: name,
            // cost: cost,
            // calories: calories,
            // carbs: Carbohydrates,
            // sugars: sugars,
            // protein: protein
        }
        data.push(foods)
        res.status(200).send(data)
        console.log('work')
    },
    deleteData: (req, res) => {
        const { index } = req.params;
        data.splice(index, 1)
        res.status(200).send(data)
        console.log('work damnit')
    },
    renameData: (req, res) => {
        const {index, newData} = req.body;
        data[index] = newData;
        res.status(200).send(list);
        console.log('work damnit')
    }
}