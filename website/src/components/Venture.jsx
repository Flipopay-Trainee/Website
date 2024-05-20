import building from '..//assets/building.png'  
import spoon from '..//assets/spoon.png'
import money from '..//assets/money.png'
import hotel from '..//assets/hotel.png'
import hairdresser from '../assets/hairdresser.png'
import cup from '..//assets/cup.png'
import scrap from '..//assets/scrap.png'
import van from '..//assets/van.png'
import React from 'react'


function Venture(){
    const venturesData = [{
        img: building,
        name: "Properties"
    },
    {
        img: spoon,
        name: "Restaurant & Bar"
    },
    {
        img: money,
        name: "Finance"
    },
    {
        img: hotel,
        name: "Hotel & Homestay"
    },
    {
        img: hairdresser,
        name: "Barber Shop"
    },
    {
        img: cup,
        name: "Chai Kadai @ India"
    },
    {
        img: building,
        name: "Show & Entertainment"
    },
    {
        img: scrap,
        name: "Scrap & Metal Recycle"
    },
    {
        img: van,
        name: "Logistics"
    },
    {
        img: scrap,
        name: "Banquet hall"
    }]

    return(    
            <div className='conatiner'>
                <div className="venture-container">
                    <h1 className='head1-vent'>our</h1>
                    <h1 className='head2-vent'>VENTURES</h1>
                    <hr className='line1'></hr>
                     <div className="venture-content">
                        {venturesData.map((item)=>(
                            <div className='cont1'>
                                 <img className='img-venture' src={item.img} alt='venture-img' />
                                 <p className='para1'>{item.name}</p>
                            </div>
                           
                            
                        ))} 
                     </div> 
                    
                </div>
            </div>
                

    )

}













export default Venture