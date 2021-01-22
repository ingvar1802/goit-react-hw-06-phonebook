import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/phoneBook-actions';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label>
      Find contacts by name:
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({
  value: state.contacts,
})

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
