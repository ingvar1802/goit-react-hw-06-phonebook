import React, { Component } from 'react';
// import { connect } from 'react-redux';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // filter: '',
  };

  // componentDidMount() {
  //   console.log('componentDidMount');
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   };
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('componentDidUpdate');
  //   if (this.state.contacts !== prevState.contacts) {
  //     console.log('Updated contacts');
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  //   };
  // };

  render() {
    return (
      
      <>
        <h1>Phonebook</h1>
        <ContactForm  />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    
    );
  }
};

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// connect(mapStateToProps)
// });


export default App;
