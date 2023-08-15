import { createContext, useContext } from "react";
import calculatedweather from '../assets/calculatedweather.svg'
import flights from '../assets/flıghts.svg'
import local from '../assets/local.svg'
import customization from '../assets/customization.svg'


const ServicesContext = createContext()

// eslint-disable-next-line react/display-name, no-undef, react/prop-types
export const ServicesProvider = ({ children }) => {
    const values = [
        {

            title: "Calculated Weather",
            content: "Built Wicket longer admire do barton vanity itself do in it.",
            img: calculatedweather,
            id: 1,
            idx: 'weather'
        },
        {

            title: "Best Flights",
            content: "Copy Engrossed listening. Park gate sell they west hard for the.",
            img: flights,
            id: 2
            ,
            idx: 'flight'
        },
        {

            title: "Local Events",
            content: "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
            img: local,
            id: 3,
            idx: 'local'
        },
        {

            title: "Customization",
            content: "We deliver outsourced aviation services for military customers",
            img: customization,
            id: 4,
            idx: 'customization'
        }
    ]

    return (
        <ServicesContext.Provider value={values}>
            {children}
        </ServicesContext.Provider>
    )
}

export const useServices = () => useContext(ServicesContext);