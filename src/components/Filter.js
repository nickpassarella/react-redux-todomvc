import { connect } from 'react-redux';
import FilterLink from './FilterLink';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (state) => ({
  currentFilterState: state.visibilityFilter
});

const mapDispatchToProps = (dispatch) => ({
  onClick(filter) {
    dispatch(setVisibilityFilter(filter));
  }
});

const Filter = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);

export default Filter;
