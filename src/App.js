import React from 'react';
import './reset.css'
import './App.css';
import axios from 'axios'
import Header from './componenets/Header'
import TacoCart from './componenets/TacoCart'
import MenuItem from './componenets/MenuItem'
import SecretMenu from './componenets/SecretMenu'
import router from './router'
import { HashRouter } from 'react-router-dom'



class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [{}],
            filterString: '',
            currentItem: '',
            // index: 0
        }
    }
    componentDidMount = () => {
        axios.get('/api/data').then(res => {
            // console.log(res)
            this.setState({ data: res.data })
        })
    }
    getNutrition = (body) => {
        axios.post('/api/data', body).then(res => {
            this.setState({ data: res.data })
        })
    }
    save = (index, body) => {
        axios.put(`/api/data/${index}`, body).then(res => {
            this.setState({ data: res.data })
        })
    }
    delete = (index) => {
        axios.delete(`/api/data/${index}`).then(res => {
            this.setState({ data: res.data })
        })
    }
    handleFilter = val => {
        this.setState({
            filterString: val
        })
    };
    handleInput = e => {
        const {name,value} = e.target;
        this.setState({})
    }
    handleChange = (filter) => {
        this.setState({ filterString: filter });
    }
    setCurrentItem = (itemName) => {
        this.setState({
            currentItem: itemName
        })
    }
    render() {
        // console.log(this.state.data)
        const { data, filterString } = this.state
        let foodsToDisplay = '' //you could default this to null to not do the terinary.
        if (data[1]) {
            foodsToDisplay = data
                .filter((element, index) => {
                    return element.name.toLowerCase().includes(this.state.filterString);
                })
                .map((element, index) => {
                    return <MenuItem
                        key={`${element.name}, ${index}`}
                        data={element} 
                        getNutrition={this.getNutrition}
                        setCurrentItem={this.setCurrentItem}
                        />
                });

        }

        return (
            <div className="App">
                <Header />
                <div className="filter-box">
                    <label>Search:</label>
                    <input
                        type="text"
                        placeholder='Find Taco Bell Item'
                        onChange={e => this.handleChange(e.target.value)}
                    />
                </div>
                <div className="display-box">
                    {foodsToDisplay ? foodsToDisplay : null}
                </div>
                <TacoCart
                data={data}
                currentItem={this.state.currentItem}
                getNutrition={this.getNutrition}
                saveFn={this.save}
                delete={this.delete}

                />
            </div>
        );
    }
}

export default App;
