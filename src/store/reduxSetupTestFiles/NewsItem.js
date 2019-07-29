import React from 'react';
import { connect } from 'react-redux';

const NewsItem = ({ articles }) => (articles
  ? (
    <h1>Header</h1>
  )
  : null
);
const mapStateToProps = state => ({
  articles: state.test.data,
});
const NewsItemComponent = connect(mapStateToProps, null)(NewsItem);
export default NewsItemComponent;
