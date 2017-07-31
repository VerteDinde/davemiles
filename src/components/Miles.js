import React, { Component } from 'react';

export default class Miles extends Component {
  constructor() {
    super();
  }

  //TODO: Refactor this ridiculous if statement
  computeMiles = (miles) => {
    if (miles <= 3) {
      return 'You\'re probably hiking 3 miles today. Dave\'s pretty reliable with that distance.';
    } else if (3.1 <= miles <= 9) {
      return 'You\'re probably hiking closer to 12 miles today. Bring some water.';
    } else if (9.1 <= miles <= 13) {
      return 'Oh geez, you\'re probably hiking around 16 miles today. Make sure you bring food.';
    } else if (13.1 <= miles) {
      return 'Wow, you\'re a sadist. Looks like you\'re doing 20,000,000 miles today. God speed.';
    } else {
      return 'Did you enter a number of miles? I don\'t think those are miles.';
    }
  }

  //TODO: Form function through props.
  render() {
    return (
      <main>
        <h2>How many miles are you actually hiking today?</h2>
        <h3>Dave Says:</h3>
        <form action="#" onSubmit="">
          <input type="text" />
        </form>
        <div id="feedback"></div>
      </main>
    );
  }
}