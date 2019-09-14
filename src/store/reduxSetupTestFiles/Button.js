import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions';

const Button = (props) => {
  const { getNews: news } = props;

  return (
    <button
      type='submit'
      onClick={news}
    >
      Press to see news
    </button>
  );
};
const mapDispatchToProps = {
  getNews,
};
const ButtonComponent = connect(null, mapDispatchToProps)(Button);
export default ButtonComponent;
