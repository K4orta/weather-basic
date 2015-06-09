import React from 'react';
import WeatherList from './weather-list';
import DayDetail from './day-detail';

export default class App extends React.Component {
	constructor(props = {}) {
		super(props);
		let days = props.days.slice(1,8); 
		this.state = {
			days: days, 
			currentDay: (new Date()).getDay()
		};
	}

	render() {
		return  (
			<div className='page'>
				<DayDetail day={this.state.days[this.state.currentDay]} />
				<WeatherList days={this.state.days} currentDay={this.state.currentDay} dayClick={this._clickDay.bind(this)}/>
			</div>
		);
	}

	_clickDay(e) {
		this.setState({
			currentDay: parseInt(e.currentTarget.dataset.key)
		});
	}
}