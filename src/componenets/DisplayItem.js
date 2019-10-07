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
                <div className="total">
                    Total Calories:{nameElement.calories}
                    {/* {ruduce function for total cals} */}
                </div> 
                <div className="menuListData">
                    <div className="menuBox">
                        <ul>Name:{nameElement.name}</ul>
                            
                        <ul>Cost:{nameElement.cost}</ul>
                        <ul>Calories:{nameElement.calories}</ul>
                        <ul>Total Fat:{nameElement.totalFat}</ul>
                        <ul>Carbs:{nameElement.Carbohydrates}</ul>
                        <ul>Sugars:{nameElement.sugars}</ul>
                        <ul>Protein{nameElement.protein}</ul>
                    </div>
                    <button className='btn btnH' >Edit</button><button className='btn btnH' onClick={()=> this.props.delete(this.props.myItemList[0].name)}>Delete</button>


                </div>
            </div>
    
        )

    }
}
export default DisplayItem;