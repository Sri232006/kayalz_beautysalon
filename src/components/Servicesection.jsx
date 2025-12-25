// import { useState } from 'react';
import './Servicesection.css'


const services = [

    {
        "s": "Haircut",
        "price": 150
    },
    {
        "s": "Shaving",
        "price": 100
    },
    {
        "s": "Haircut + Shave",
        "price": 250
    },
    {
        "s": "Face Cleanup"
        , "price": 200
    },

    {
        "s": "Oil Massage",
        "time": 15,
        "price": 200
    },
    {
        "s": "Premium Head Massage",
        "time": 30,
        "price": 500
    },
    {
        "s": "Hair Colouring Black",
        "price": 200
    },
    {
        "s": "Black Henna",
        "price": 200
    },
    {
        "s": "D-Tan",
        "price": 350
    },
    {
        "s": "Fruit Facial",
        "price": 500
    },
    {
        "s": "Wine Facial",
        "price": 800
    },
    {
        "s": "Silver Facial",
        "price": 1500
    },
    {
        "s": "Gold Facial",
        "price": 2000
    },
    {
        "s": "Diamond Facial",
        "price": 2500
    },
    {
        "s": "Warts Removal (per wart)",
        "price": 100
    },
    {
        "s": "Hair Wash",
        "price": 100
    },
    {
        "s": "Hair Straightening",
        "price": "Depends on length"
    }
]
const combo = [
    { title: "Combo Offer", desc: "Haircut + Shave + Cleanup", price: "₹349" },
    { title: "Premium Grooming", desc: "Haircut + Shave + D-Tan", price: "₹499" },
    { title: "Coloring Combo", desc: "Haircut + Shave + Black Coloring", price: "₹399" },
    { title: "Massage Combo", desc: "Haircut + Shave + Oil Massage", price: "₹399" },
];

function Servicesection( {comboscroll,servicescroll}) {

    // const [selectedService, setSelectedService] = useState(null);

    return (
        <>




            <div className="Service-section" >
                <h1 className="service-heading" ref={servicescroll}>SELECT SERVICE</h1>
                <div className="service-grid">

                    {services.map((s) => (

                        <div className="service" >
                            <p className="service-label">{s.s}({s.time}min)</p>
                            <h1 className="service-value">₹{s.price}</h1>
                        </div>
                    ))}
                </div>

                <div className="combo-section" ref={comboscroll}>

                    <h1 className="combo-heading">Combo Offers</h1>
                    <div className="combo-grid" >


                        {combo.map((combo) => {
                            return (
                                <div className="combo">
                                    <p className="combo-label">{combo.title}</p>
                                    <p className="combo-desc">{combo.desc}</p>
                                    <h1 className="combo-value">{combo.price}</h1>

                                </div>

                            )
                        })
                        }

                    </div>
                </div>
            </div>
        </>
    );
}

export default Servicesection;