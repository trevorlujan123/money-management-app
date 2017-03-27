import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import InputMoney from './components/InputMoney';
import HoursMadeList from './components/HoursMadeList'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newHourlyWageList: []
    };
  }

  componentDidMount() {
    axios.get('  http://localhost:3004/newHourlyWageList')
    .then(resp => {
      this.setState({
        newHourlyWageList: resp.data
      });
    })
    .catch(err => {
      console.log(`Error ${err}`);
    });
  }

  handleNewHourlyWageSubmit(attributes) {
    axios.post('http://localhost:3004/newHourlyWageList', attributes)
      .then(resp => {
        this.setState({
          newHourlyWageList: [...this.state.newHourlyWageList, resp.data]
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <InputMoney
          onSubmit={this.handleNewHourlyWageSubmit.bind(this)}
        />
        <HoursMadeList
          newHourlyWageList={this.state.newHourlyWageList}
        />
      </div>
    );
  }
}
export default App;
