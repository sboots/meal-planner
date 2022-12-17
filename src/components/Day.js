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
          <span className="source-name">{currentMeal.source}</span>
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
          {currentMeal.url.length > 0 &&
            <>
             &nbsp;<a href={currentMeal.url} target="_blank" rel="noopener noreferrer">open</a>
            </>
          }
          {currentMeal.rating === 5 &&
            <>
             <br/>⭑⭑⭑⭑⭑
            </>
          }
          {currentMeal.rating === 4 &&
            <>
             <br/>⭑⭑⭑⭑
            </>
          }
          {currentMeal.rating === 3 &&
            <>
             <br/>⭑⭑⭑
            </>
          }
          {currentMeal.rating === 2 &&
            <>
             <br/>⭑⭑
            </>
          }
          {currentMeal.rating === 1 &&
            <>
             <br/>⭑
            </>
          }
        </small>
      </div>
    );
  }
}

export default Day;
