import React from 'react'

class DisplayItem extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        const {menuItemList} = this.props
        return(
            <div className="DisplayItem">
                <ul>Name:{menuItemList[0].name} <button>edit</button> </ul>
                {/* <ul>Cost:{menuItemlist[0].cost}</ul>
                <ul>Calories:{menuItemList[0].calories}</ul>
                <ul>Total Fat:{menuItemList[0].totalFat}</ul>
                <ul>Carbs:{menuItemList[0].Carbohydrates}</ul>
                <ul>Sugars:{menuItemList[0].sugars}</ul>
                <ul>Protein{menuItemList[0].protein}</ul> */}
            </div>
    
        )

    }
}
export default DisplayItem;