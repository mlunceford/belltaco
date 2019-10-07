import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import DisplayItem from './DisplayItem'
class TacoCart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // menuItemList: []
        }
    }

    render(){
        const {data} = this.props;
        const menuItems = data.filter(element => element.name === this.props.currentItem)
        if(menuItems.length === 0 ){
            return null
        } 
        console.log(this.props.currentItem)
        // const menuItemList = menuItems.push(menuItems)
        // const menuItem = menuItemList
        // console.log(menuItemList)
        
        const menuItem = menuItems.pop()
        const menuItemList = []
        menuItemList.push(menuItem)

        return (
            <div className="TacoCart">
                <div className="total">
                    {/* Total Calories:{menuItem.calories} */}
                    {/* {ruduce function for total cals} */}
                </div>
                <div className="menuItemStats">
                    {menuItemList.map((element, index) =>{
                        return <DisplayItem
                            key={`${element}, ${index}`}
                            name={element}
                            />
                        })}                
                </div>

            </div>
        )
    }
}
export default TacoCart;