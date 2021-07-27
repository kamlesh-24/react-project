import React from 'react'

const MenuCard = ({menuData}) => {
    return (
        <>
        {
            menuData.map((currElem)  => {
                return(
                    <>
                    <div className="container">
                        <div className="card">
                            <div className="box">
                                <div className="content">
                                    <h2 >{currElem.id}</h2>
                                    <img src={currElem.image} alt="images" className="card-media" key={currElem.image} />
                                    <h3 >{currElem.name}</h3>
                                    <p>{currElem.description}</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })
        }
           
        </>
    )
}
export default MenuCard;