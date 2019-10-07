import React from 'react'

class DisplayItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            toggleRename: false,
            renameInput: ''
        }
    }
    // toggle =() => {
    //     this.setState(prevState => ({toggleRename: !prevState.toggleRename}))
    // }
    // handleChange= () => {
    //     this.setState({renameInput: e.target.value})
    // }
    // save = () => {
    //     this.props.saveFn(this.props)
    // }
    render(){
        const {nameElement} = this.props
        
        return(
            <div className="DisplayItem">
                <ul>Name:{nameElement.name} 
                    <button >dit</button> </ul>
                <ul>Cost:{nameElement.cost}</ul>
                <ul>Calories:{nameElement.calories}</ul>
                <ul>Total Fat:{nameElement.totalFat}</ul>
                <ul>Carbs:{nameElement.Carbohydrates}</ul>
                <ul>Sugars:{nameElement.sugars}</ul>
                <ul>Protein{nameElement.protein}</ul>
            </div>
    
        )

    }
}
export default DisplayItem;