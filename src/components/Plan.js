import React from "react";
import Day from "./Day";
import meals from "../meals";

class Plan extends React.Component {
  state = {
    days: [],
    dayMeals: {},
  };

  componentDidMount() {
    const numDays = 7;
    this.generateAllMeals(numDays);
  }

  generateDefaultMeals = () => {
    this.generateAllMeals(7);
  };

  generateAllMeals = (numDays) => {
    const dayMeals = {};
    // Thanks to https://stackoverflow.com/a/10050831
    const days = [...Array(numDays).keys()].map((i) => i + 1);

    days.forEach(function (day, index) {
      dayMeals[day] = meals[Math.floor(Math.random() * meals.length)];
    });

    console.log(dayMeals);

    this.setState({ days, dayMeals });
  };

  changeMeal = (day) => {
    const dayMeals = this.state.dayMeals;
    dayMeals[day] = meals[Math.floor(Math.random() * meals.length)];

    this.setState({ dayMeals });
  };

  render() {
    // console.log("===");
    // console.log(this.state.dayMeals);
    return (
      <div className="plan">
        <h2>Meal plan</h2>
        <button onClick={this.generateDefaultMeals}>Generate list</button>

        {Object.keys(this.state.days).map((key) => (
          <Day
            key={key}
            index={key}
            day={key}
            dayMeals={this.state.dayMeals}
          ></Day>
        ))}
      </div>
    );
  }
}

export default Plan;
