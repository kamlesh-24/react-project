import React , {useState} from 'react';
import './style.css';
import Menu from '../menuApi';
import MenuCard from './MenuCard';
const Restro = () => {
    const [menuData, setMenuData] = useState(Menu);
    const filterItem = (category) =>{
        const updateList = Menu.filter((currElem)=>{
            return currElem.category === category;
        });
        setMenuData(updateList);
    };
    return (
        <>
            <nav class="navMenu">
                <button onClick={() => filterItem("breakfast")}>Breakfast</button>
                <button onClick={() => filterItem("lunch")}>lunch</button>
                <button onClick={() => filterItem("dinner")}>Dinner</button>
                <button onClick={() => setMenuData(Menu)}>All</button>
                
            </nav>
        <MenuCard menuData={menuData}/>
           
        </>
    );
};
export default Restro ;
