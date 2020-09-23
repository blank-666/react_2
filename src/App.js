import React from 'react';
import Contact from './components/contact';

const contacts = [{
  firstName: "Барней",
  lastName: "Стинсовський",
  phone: "+380956319521",
  gender: "male"
}, {
  firstName: "Робін",
  lastName: "Щербатська",
  phone: "+380931460123",
  gender: "female"
}, {
  firstName: "Анонімний",
  lastName: "Анонімус",
  phone: "+380666666666"
}, {
  firstName: "Лілія",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female"
}, {
  firstName: "Маршен",
  lastName: "Еріксонян",
  phone: "+380739432123",
  gender: "male"
}, {
  firstName: "Теодор",
  lastName: "Мотсбес",
  phone: "+380956319521",
  gender: "male"
}, {
  firstName: "Снуп",
  lastName: "Дог",
  phone: "+380420420420",
  gender: "male"
}];

const serchableFields = ["firstName", "lastName", "phone"];  

class App extends React.Component {
  state = {
    search: '',
    activeGenders: ["male", "female", undefined]
  };

  handleSearchChange = (event) =>{
    this.setState({
      search: event.currentTarget.value.toLowerCase()
    });
  }

  filterContacts = () =>
    contacts.filter((contact)=>
      serchableFields.some((fieldName) =>
        contact[fieldName].toLowerCase().includes(this.state.search) &&
        this.state.activeGenders.includes(contact.gender)
      )
    );
  
  isGenderActive = (gender) =>{
    return this.state.activeGenders.includes(gender)
  }

  onCheckBoxChange = (event) =>{
    event.persist();
    if(event.currentTarget.name === 'unknown'){ 
      event.target.checked ? 
      this.setState((state) => ({
        activeGenders: state.activeGenders.concat(undefined)
      })) :
      this.setState({
        activeGenders: this.state.activeGenders.filter(
          (gender) => gender
        )
      });
    } else {
      event.target.checked ? 
      this.setState((state) => ({
        activeGenders: state.activeGenders.concat(event.target.name)
      })) :
      this.setState({
        activeGenders: this.state.activeGenders.filter(
          (gender) => gender !== event.currentTarget.name
        )
      });
    }
  }

  render() {
    return (
      <div className="search-panel">
        <input placeholder='Search contacts...' className='search-input' type='text' value={this.state.search} onChange={this.handleSearchChange}></input>

      <div className='checkbox-panel'>
              <label htmlFor='male'>Male:</label>
                <input name='male' className='checkbox' type="checkbox" onChange={this.onCheckBoxChange} checked={this.isGenderActive('male')}></input>
              <label htmlFor='female'>Female:</label>
                <input name='female' className='checkbox' type="checkbox" onChange={this.onCheckBoxChange} checked={this.isGenderActive('female')}></input>
              <label htmlFor='unknown'>Unknown gender:</label>
                <input name='unknown' className='checkbox' type="checkbox" onChange={this.onCheckBoxChange} checked={this.isGenderActive(undefined)}></input>
      </div>
          {this.filterContacts().map((contact) => 
            <Contact {...contact} />)}
      </div>
    );
  }
}

export default App;
