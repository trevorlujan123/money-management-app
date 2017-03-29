import React, { Component } from 'react';
import axios from 'axios';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

import './App.css';
import NavBar from './components/NavBar/index';
import InputMoneyForm from './components/InputMoneyForm/index';
import HoursMadeList from './components/HoursMadeList/index';
import AverageMadeList from './components/AverageMadeList/index';
import FindAverage from './components/FindAverage/index';
import Footer from './components/Footer/index';

/* eslint-disable max-len */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newHourlyWageList: [],
      averageMadeList: [],
      averageMonthly: ''
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

    this.setState({
      averageMadeList: newSelectedListItem,
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

  handleFindMonthlyAverage() {
    const numberList = [];
    for (let i = 0; i < this.state.averageMadeList.length; i++) {
      numberList.push(this.state.averageMadeList[i].roundedMathItem);
    }
    console.log(numberList);

    const sum = numberList.reduce(add, 0);

    function add(a, b) {
      return a + b;
    }
    console.log(sum);

    const average = (sum / numberList.length).toFixed(2);
    console.log(average);

    const averageString = average.toString();

    this.setState({
      averageMonthly: averageString
    });
  }

  handleAddAll() {
    this.setState({
      averageMadeList: this.state.newHourlyWageList
    });
  }

  handleRemoveListItem(_id) {
    axios.delete(`http://localhost:3004/newHourlyWageList/${_id}`)
  .then(() => {
    this.setState({
      newHourlyWageList: this.state.newHourlyWageList.filter(listItem => listItem._id !== _id)
    });
  })
  .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Grid>
          <Row className="show-grid">
            <InputMoneyForm
              onSubmit={this.handleNewHourlyWageSubmit.bind(this)}
            />
            <HoursMadeList
              newHourlyWageList={this.state.newHourlyWageList}
              onSelectListItem={this.handleSelectListItem.bind(this)}
              onRemoveListItem={this.handleRemoveListItem.bind(this)}
              onAddAllClick={this.handleAddAll.bind(this)}
            />
            <Col sm={4}>
              <AverageMadeList
                averageMadeList={this.state.averageMadeList}
                onUnselectListItem={this.handleUnselectListItem.bind(this)}
                onFindMonthlyAverageClick={this.handleFindMonthlyAverage.bind(this)}
              />
              <FindAverage
                averageMonthly={this.state.averageMonthly}
              />
            </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}
export default App;
