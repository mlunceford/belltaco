import React from 'react';
import './reset.css'
import './App.css';
import axios from 'axios'

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
            
          </div>
        );

    }
}

export default App;
