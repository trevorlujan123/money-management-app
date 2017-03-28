import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import InputMoney from './components/InputMoney';
import HoursMadeList from './components/HoursMadeList';
import AverageMadeList from './components/AverageMadeList';

/* eslint-disable max-len */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newHourlyWageList: [],
      averageMadeList: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3004/newHourlyWageList')
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

  handleSelectListItem(listItem) {
    const newSelectedListItem = [
      ...this.state.averageMadeList,
      listItem
    ];

    const newHourlyWageListArray = this.state.newHourlyWageList.filter(listItemSelected => listItemSelected !== listItem);

    this.setState({
      averageMadeList: newSelectedListItem,
      newHourlyWageList: newHourlyWageListArray
    });
  }

  handleUnselectListItem(listItem) {
    const newSelectedListItem = [
      ...this.state.newHourlyWageList,
      listItem
    ];

    const newAverageMadeArray = this.state.averageMadeList.filter(listItemSelected => listItemSelected !== listItem);

    this.setState({
      newHourlyWageList: newSelectedListItem,
      averageMadeList: newAverageMadeArray
    });
  }

  render() {
    return (
      <div className="App">
        <InputMoney
          onSubmit={this.handleNewHourlyWageSubmit.bind(this)}
        />
        <HoursMadeList
          newHourlyWageList={this.state.newHourlyWageList}
          onSelectListItem={this.handleSelectListItem.bind(this)}
        />
        <AverageMadeList
          averageMadeList={this.state.averageMadeList}
          onUnselectListItem={this.handleUnselectListItem.bind(this)}
        />
      </div>
    );
  }
}
export default App;
