import './weather_card.css'


export const WeatherCard = ({date, image, degree_min, degree_max, temp})=> {
    return (<div className="weather-info-card">
    <h2>{date}</h2>
    <img src={image} alt="weatherIcon" />
    <p className="weather-info-degree-min-max"><span className="weather-max">{degree_max}{temp ? <>&#8451;</>: <>&#8457;</>}</span> <span className="weather-min">{degree_min}{temp ? <>&#8451;</>: <>&#8457;</>}</span></p>
</div>);
}