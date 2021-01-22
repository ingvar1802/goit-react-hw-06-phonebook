import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phoneBook-actions';
// import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={s.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// ContactList.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
// };

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// // const mapStateToProps = (state) => {
// //   const { filter, items } = state.contacts;
// //   const visibleContacts = getVisibleContacts(items, filter);
// //   return {
// //     contacts: visibleContacts,
// //   }
// // };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisibleContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: (id) => dispatch(deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);