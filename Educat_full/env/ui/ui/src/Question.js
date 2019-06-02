import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ question, children }) => (
  <>
    <h3>{question}</h3>
    {children}
  </>
);

Question.propTypes = {
  question: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Question;
