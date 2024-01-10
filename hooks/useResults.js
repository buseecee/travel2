import React, { useState, useEffect } from "react";
import YelpApi from "../src/screens/api/YelpAPI";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, seterrorMessage] = useState("");
    console.log("Rendering HomeScreen");

    const YelpApi = async () => {
        console.log("hi there");
        try {
            const response = await YelpApi.get("/search", {
                params: {
                    limit: 50,
                    term,
                    location: "Istanbul",
                },
            });
            setResults(response.data.businesses);
        } catch (err) {
            seterrorMessage("Something went wrong");
        }
    }

    useEffect(()=>{
        YelpApi("pasta");
    }, []);

    return [yelpApi, results, errorMessage];
}