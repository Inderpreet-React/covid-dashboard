import React, { useContext, useState } from "react";

const CountryData = React.createContext();

export const useCountryData = () => {
	useContext(CountryData);
};

export function CountryDataProvider({ children }) {
	const [country, setCountry] = useState("United");

	const value = {};
	return <CountryData.Provider value={value}>{children}</CountryData.Provider>;
}
