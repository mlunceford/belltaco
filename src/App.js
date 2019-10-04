import React from 'react';
import './reset.css'
import './App.css';
import axios from 'axios'
import Header from './componenets/Header'
import TacoCart from './componenets/TacoCart'
import Nutrition from './componenets/Nutrition'
import SecretMenu from './componenets/SecretMenu'
import router from './router'



class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [{}],
            filterString: '',
            // index: 0
        }
    }
    componentDidMount = () => {
        axios.get('/api/data').then(res => {
            console.log(res)
            this.setState({ data: res.data })
        })
    }
    post = (body) => {
        axios.post('/api/data', body).then(res => {
            this.setState({ data: res.data })
        })
    }
    edit = (index, body) => {
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
    handleChange=(filter)=> {
        this.setState({ filterString: filter });
      }
   
    render() {
        // console.log(this.state.data)
        const {data, filterString} = this.state
        let foodsToDisplay = ''
        if(data[1]){
            foodsToDisplay = data
            .filter((element, index) => {
                return element.name.toLowerCase().includes(this.state.filterString);
            })
            .map((element, index) => {
                return <Nutrition 
                    key={`${element.name}, ${index}`}
                    data={element}/>
            });

        } 
        
        return (
            // <HashRouter>
                <div className="App">
                    <Header />
                    {/* <Router></Router> */}
                    <div className="filter-box">
                        <label>Search:</label>
                        <input 
                        type="text"
                        placeholder='Find Taco Bell Item'
                        onChange={e => this.handleChange(e.target.value)}
                        />
                    </div>
                    <div className="display-box">
                        {foodsToDisplay ? foodsToDisplay : null }
                        
                    </div>
                </div>

            // </HashRouter>
        );

    }
}

export default App;
