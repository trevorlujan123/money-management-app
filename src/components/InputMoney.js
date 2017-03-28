import React, { Component, PropTypes } from 'react';
import './InputMoneyForm.css';

export default class InputMoneyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moneyMade: '',
      hoursWorked: '',
      minutesWorked: '',
      hourlyWage: '',
      newHourlyWage: '',
      date: ''
    };
  }

  handleMoneyMadeChange(event) {
    this.setState({
      moneyMade: event.target.value
    });
  }

  handleHoursWorkedChange(event) {
    this.setState({
      hoursWorked: event.target.value
    });
  }

  handleMinutesWorkedChange(event) {
    this.setState({
      minutesWorked: event.target.value
    });
  }

  handleHourlyWageChange(event) {
    this.setState({
      hourlyWage: event.target.value
    });
  }

  handleDateChange(event) {
    this.setState({
      date: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.hourlyWage === '') {
      this.setState({
        hourlyWage: 0,
      });
    }

    if (this.state.hoursWorked === '') {
      this.setState({
        hoursWorked: 0,
      });
    }

    if (this.state.minutesWorked === '') {
      this.setState({
        minutesWorked: 0,
      });
    }

    const moneyMadeNumber = Number(this.state.moneyMade);
    const hoursWorkedNumber = Number(this.state.hoursWorked);
    const minutesWorkedNumber = Number(this.state.minutesWorked);
    const hourlyWageNumber = Number(this.state.hourlyWage);

    const timeWorkedNumber = hoursWorkedNumber + (minutesWorkedNumber / 60);

    const newHourlyWageMathItem = (moneyMadeNumber / timeWorkedNumber) + hourlyWageNumber;

    const newHourlyWageString = newHourlyWageMathItem.toFixed(2).toString();

    const date = this.state.date;

    this.props.onSubmit({newHourlyWageString, date});

    this.setState({
      moneyMade: '',
      hoursWorked: '',
      minutesWorked: '',
      hourlyWage: '',
      date: '',
      newHourlyWage: newHourlyWageString
    });
  }


  render() {
    return (
      <form className="money-input-form" onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="moneyMade">How much money did you make?</label>
        <input
          type="text"
          name="moneyMade"
          value={this.state.moneyMade}
          onChange={this.handleMoneyMadeChange.bind(this)}
        />

        <label htmlFor="hoursWorked">Hours</label>
        <input
          type="text"
          name="hoursWorked"
          value={this.state.hoursWorked}
          onChange={this.handleHoursWorkedChange.bind(this)}
        />

        <label htmlFor="minutesWorked">Minutes</label>
        <input
          type="text"
          name="minutesWorked"
          value={this.state.minutesWorked}
          onChange={this.handleMinutesWorkedChange.bind(this)}
        />

        <label htmlFor="hourlyWage">Input your other hourly wage if you have one.</label>
        <input
          type="text"
          name="hourlyWage"
          value={this.state.hourlyWage}
          onChange={this.handleHourlyWageChange.bind(this)}
        />

        <label htmlFor="date">What day</label>
        <input
          type="date"
          name="date"
          value={this.state.date}
          onChange={this.handleDateChange.bind(this)}
        />

        <input
          type="submit"
          value="Find your Hourly Wage"
        />
      </form>
    );
  }
}

InputMoneyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
