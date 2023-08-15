import { createContext, useContext } from "react";
import london from '../assets/destinationsTwo.jpg'
import italy from '../assets/destinationsThree.png'
import fullEurope from '../assets/destinationsOne.png'

const DestinationsContext = createContext();

// eslint-disable-next-line react/display-name, no-undef, react/prop-types
export const DestionationsProvider = ({ children }) => {
    const values = [
        {
            country: 'Italy ,',
            city: 'Rome',
            price: 5.2,
            days: 10,
            picture: italy
        },
        {
            country: 'UK , ',
            city: 'London',
            price: 4.2,
            days: 12,
            picture: london
        },
        {
            country: 'Full Europe',
            city: null,
            price: 15,
            days: 28,
            picture: fullEurope
        },

    ]
    return (
        <DestinationsContext.Provider value={values}>
            {children}
        </DestinationsContext.Provider>
    );
};


export const useDestinations = () => useContext(DestinationsContext);