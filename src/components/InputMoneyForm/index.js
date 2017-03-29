import React, { Component, PropTypes } from 'react';
import {Col} from 'react-bootstrap';
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

    const roundedMathItem = Number(newHourlyWageMathItem.toFixed(2));

    const newHourlyWageString = roundedMathItem.toString();

    const date = this.state.date;

    this.props.onSubmit({newHourlyWageString, date, roundedMathItem});

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
      <Col sm={4}>
        <form className="money-input-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="money-made">
            <label htmlFor="moneyMade">How much money did you make?</label>
            <input
              type="text"
              name="moneyMade"
              value={this.state.moneyMade}
              onChange={this.handleMoneyMadeChange.bind(this)}
            />
          </div>

          <div className="time-worked">
            <label className="time-worked-title">How long did you work?</label>
            <div className="hours-minutes-worked">
              <div className="hours-worked">
                <label htmlFor="hoursWorked">Hours</label>
                <input
                  type="text"
                  name="hoursWorked"
                  value={this.state.hoursWorked}
                  onChange={this.handleHoursWorkedChange.bind(this)}
                />
              </div>

              <div className="divide"><p>:</p></div>

              <div className="minutes-worked">
                <label htmlFor="minutesWorked">Minutes</label>
                <input
                  type="text"
                  name="minutesWorked"
                  value={this.state.minutesWorked}
                  onChange={this.handleMinutesWorkedChange.bind(this)}
                />
              </div>
            </div>
          </div>

          <div className="hourly-wage">
            <label htmlFor="hourlyWage">Hourly wage (if you have any):</label>
            <input
              type="text"
              name="hourlyWage"
              value={this.state.hourlyWage}
              onChange={this.handleHourlyWageChange.bind(this)}
            />
          </div>

          <div className="date">
            <label htmlFor="date">What day:</label>
            <input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleDateChange.bind(this)}
        />
          </div>

          <input
            className="button"
            type="submit"
            value="Find your Hourly Wage"
          />
        </form>
      </Col>
    );
  }
}

InputMoneyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
