import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
import Axios from 'axios';

class App extends Component {
  state = {
    habits: [],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits }); // this.setState({ habits: habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    // const habits = this.state.habits.filter((item) => item.id !== habit.id);
    // this.setState({ habits });
    Axios.delete(`http://localhost:3001/habit/${habit.id}`, { id: habit.id }).then(() => {
      this.componentDidMount();
    });
  };

  // handleAdd = (name) => {
  //   const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
  //   this.setState({ habits });
  // };

  handleAdd = (name) => {
    Axios.post('http://localhost:3001/habit/insert', {
      name,
      count: 0,
    }).then(() => {
      alert('등록 완료!');
      this.componentDidMount();
    });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  componentDidMount() {
    fetch('http://localhost:3001/habit')
      .then((res) => res.json())
      .then((data) => this.setState({ habits: data.habits }));
  }

  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter((item) => item.count > 0).length} />
        <Habits
          key={this.state.habits.id}
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
