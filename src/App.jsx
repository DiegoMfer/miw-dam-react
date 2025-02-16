import { useState, useEffect } from 'react';
import CardList from './components/CardList';
import Scroll from './components/Scroll';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';
import Searcher from './components/Searcher';


function App() {
  const [contacts, setContacts] = useState([]);

 //  useEffect(() => {
 //    fetch('https://randomuser.me/api/?results=20')
 //      .then(response => response.json())
 //      .then(contacts => setContacts(contacts.results));
 //  }, [])

 useEffect(() => {
  // Static JSON data
  const staticData = {
    results: [
      {
        gender: "male",
        name: {
          title: "Mr",
          first: "Harrison",
          last: "Jones"
        },
        location: {
          street: {
            number: 2111,
            name: "Taharoto Road"
          },
          city: "Napier",
          state: "Gisborne",
          country: "New Zealand",
          postcode: 66574,
          coordinates: {
            latitude: "52.3079",
            longitude: "-122.8975"
          },
          timezone: {
            offset: "-8:00",
            description: "Pacific Time (US & Canada)"
          }
        },
        email: "harrison.jones@example.com",
        login: {
          uuid: "6523d73a-2d07-424c-a068-9f71c9297a97",
          username: "happylion649",
          password: "383838",
          salt: "lYdDksXP",
          md5: "2e4422b055ed3beac666fb2e721e6baa",
          sha1: "187f3a85a3cf092d8f1a8319d1729bb0ee1516ad",
          sha256: "5882aa4524106ce6b8fae86821c394ee0542e9a7cc4c766685ef75d44a20d257"
        },
        dob: {
          date: "2000-04-11T12:56:00.734Z",
          age: 23
        },
        registered: {
          date: "2011-11-27T08:23:38.485Z",
          age: 12
        },
        phone: "(861)-546-5460",
        cell: "(874)-612-7750",
        id: {
          name: "",
          value: null
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/8.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/8.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/8.jpg"
        },
        nat: "NZ"
      }
    ],
    info: {
      seed: "2ab9249e4ec0d61a",
      results: 1,
      page: 1,
      version: "1.4"
    }
  };

  // Directly set the contacts state with static data
  setContacts(staticData.results);
}, []);




  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  const searchedContacts = contacts.filter(contact => {
    return (contact.name['first'] + ' ' +
      contact.name['last']).toLowerCase().includes(searchField.toLowerCase())
  });

  const onAZ = () => {
    let az = contacts.sort((a, b) => {
      return (a.name['first'] + " " +
        a.name['last']).localeCompare(b.name['first'] + " " + b.name['last'])
    })
    setContacts([...az]); //clone the list
  }
  const onZA = () => {
    let za = contacts.sort((a, b) => {
      return (b.name['first'] + " " +
        b.name['last']).localeCompare(a.name['first'] + " " + a.name['last'])
    })
    setContacts([...za]); //clone the list
  }

  return (
    <div className='tc'>
      <header>
        <h1 className='f1'>My contacts</h1>
      </header>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Searcher searchChange={onSearchChange} az={onAZ} za={onZA} />
        <Scroll>
          <CardList contacts={searchedContacts} />
        </Scroll>
      </ErrorBoundary>


      <footer>
        <hr /><p>Desarrollo de Software para Dispositivos Moviles.
          {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}



export default App;