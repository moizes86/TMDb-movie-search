
import React from 'react';

export const  getValue = suggestion => (
  suggestion.title
);

export const renderSuggestion = suggestion => (
  <span>{suggestion.title}</span>
);

