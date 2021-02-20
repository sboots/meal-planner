import React from "react";

class Day extends React.Component {
  render() {
    const currentDay = this.props.day / 1 + 1;
    const dayMeals = this.props.dayMeals;
    const currentMeal = dayMeals[currentDay];

    return (
      <div className="day">
        <h3>Day {currentDay}</h3>
        <p>{currentMeal.recipe}</p>
        <small>
          {currentMeal.source}
          {currentMeal.sourceDetails.length > 0 &&
            <>
            : {currentMeal.sourceDetails}
            </>
          }
          {currentMeal.pageNumber > 0 &&
            <>
            : page {currentMeal.pageNumber}
            </>
          }
        </small>
      </div>
    );
  }
}

export default Day;
