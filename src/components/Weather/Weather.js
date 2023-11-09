import axios from "axios";
import React from "react";
// const Weather = () => {
//     return (
//         <div>Insite Weather</div>
//     )
// }
class Weather extends React.Component {
    async componentDidMount() {
        let response = await axios({
            method: 'post',
            url: "http://localhost:8080/get-data-by-url",
            data: { url: "https://www.metaweather.com/api/location/1236594/" },
        });
        console.log("check response", response.data);
    }
    render() {
        return (
            <div>Insite Weather</div>
        )
    }
}
export default Weather;