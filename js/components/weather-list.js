import React from 'react';
import Day from './weather-list-day';

export default class WeatherList extends React.Component {
	render() {
		let days = this.props.days.map((forecast)=> {
			return <Day weather={forecast} key={forecast.time} />
		});

		return (
			<ul className='forecast-list' >
				{days}
			</ul>
		);
	}
}

