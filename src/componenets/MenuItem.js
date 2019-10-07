import React from 'react'
import {Link} from 'react-router-dom'


class MenuItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {data} = this.props;
        return(
            <div 
                className="menuItem btn"
                onClick={() => this.props.setCurrentItem(data.name)}
            > 
                {data.name}
            </div>
            

        )
    }
}
export default MenuItem;

// .filter((element)=>{
//     if(data.name === this.props.currentItem){
//         return true
//     } else{return false}
// })
// // ! this is that same.
// .filter((element)=>{
//     return data.name === this.props.currentItem
// })
// // or 

// .filter(element => data.name === this.props.currentItem)
