import { useState, useEffect } from 'react';
import Section from './Section';
import Form from './Form';
import Filter from './Filter';
import List from './List';
import { nanoid } from 'nanoid';

const App = () => {

  const [contacts, setContacts] = useState(() => {
    const contactsInLocalStorage = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsInLocalStorage);
    if (parsedContacts) {
      return parsedContacts;
    }
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const submitContactToList = data => {
    if (
      contacts.every(el => {
        return el.name.toLowerCase() !== data.name.toLowerCase();
      })
    ) {
      data.id = nanoid();
      setContacts(() => {
        return [...contacts, data];
      });
    } else {
      alert(
        `${
          contacts.find(el => {
            return el.name.toLowerCase() === data.name.toLowerCase();
          }).name
        } is already exist`
      );
    }
  };

  const deleteContact = id => {
    setContacts(contacts => {
      return contacts.filter(e => e.id !== id);
    });
  };

  const getFilteredData = data => {
    setFilter(() => {
      return data;
    });
  };

  return (
    <Section>
      <h1 className="add-contact-box__heading">Phonebook</h1>
      <Form onSubmit={submitContactToList} />
      <h2 className="display-cotnact-box__heading">Contacts</h2>
      <Filter filter={filter} onChange={getFilteredData} />
      <List contacts={contacts} filteredData={filter} onClick={deleteContact} />
    </Section>
  );
};

export default App;

// class App extends React.Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount(){
//     const contacts = localStorage.getItem('contacts')
//     const parsedContacts = JSON.parse(contacts)
//     if(parsedContacts){
//       this.setState({
//         contacts: parsedContacts,
//       })
//     }
//   }

//   componentDidUpdate(prevProps, prevState){
//     const { contacts } = this.state
//     if( contacts.length !== prevState.contacts.length){
//       localStorage.setItem('contacts', JSON.stringify(contacts))
//     }
//   }

//   SubmitContactToList = data => {
//     if (
//       this.state.contacts.every(el => {
//         return el.name.toLowerCase() !== data.name.toLowerCase();
//       })
//     ) {
//       const { contacts } = this.state;
//       data.id = nanoid();
//       this.setState(() => {
//         return { contacts: [...contacts, data] };
//       });
//     } else {
//       alert(
//         `${
//           this.state.contacts.find(el => {
//             return el.name.toLowerCase() === data.name.toLowerCase();
//           }).name
//         } is already exist`
//       );
//     }
//   };

//   deleteContact = id => {
//     this.setState(({ contacts }) => {
//       return { contacts: contacts.filter(e => e.id !== id) };
//     });
//   };

//   getFilteredData = data => {
//     this.setState(() => {
//       return { filter: data };
//     });
//   };

//   render() {
//     return (
//       <Section>
//         <h1 className="add-contact-box__heading">Phonebook</h1>
//         <Form onSubmit={this.SubmitContactToList} />
//         <h2 className="display-cotnact-box__heading">Contacts</h2>
//         <Filter
//           filter={this.state.filter}
//           onChange={this.getFilteredData}
//         />
//         <List
//           contacts={this.state.contacts}
//           filteredData={this.state.filter}
//           onClick={this.deleteContact}
//         />
//       </Section>
//     );
//   }
// }


