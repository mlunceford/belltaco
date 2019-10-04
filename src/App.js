import React from 'react';
import './reset.css'
import './App.css';
import axios from 'axios'
import Header from './componenets/Header'
import TacoCart from './componenets/TacoCart'
import Nutrition from './componenets/Nutrition'
import SecretMenu from './componenets/SecretMenu'



class App extends React.Component {
    constructor(){
        super()
        this.state = {
            data: []
        }
    }
    // componentDidMount = () => {
    //     axios.get('/api/data').then(res => {
    //         this.setState({food: res.data})
    //     })
    // }
    render(){
        return (
          <div className="App">hey man
            <Header/>
          </div>
        );

    }
}

export default App;
