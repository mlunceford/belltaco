import React from 'react'
import {Link} from 'react-router-dom'


class Nutrition extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {data} = this.props;
        return(
            <div className="Nutrition btn">
                {data.name}   
                {/* <button className='btn add'>ADD</button>                 */}
            </div>

        )
    }
}
export default Nutrition;