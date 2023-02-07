import React from 'react';

const HumanReadableDate = time => {
  // Type the code for the body of your function or hook here.
  // Functions can be triggered via Button/Touchable actions.
  // Hooks are run per ReactJS rules
  return new Date(time).toLocaleString();
};

export default HumanReadableDate;
