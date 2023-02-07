import React from 'react';

const formatCurrency = value => {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(value);
};

export default formatCurrency;
