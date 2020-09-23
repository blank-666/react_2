import React from 'react';
import MALE_IMAGE from '../img/mars.svg';
import FEMALE_IMAGE from '../img/female.svg';
import ANONYMOUS_IMAGE from '../img/anonymous.svg'
import CALL_IMAGE from '../img/call.svg'

class Contact extends React.Component {
    render() {
        const sex = this.props.gender ? (this.props.gender === 'male' ? MALE_IMAGE: FEMALE_IMAGE) : ANONYMOUS_IMAGE;
        const genderClass = `gender-image-container ${this.props.gender}-image-container`;
        
      return (
        <div className='wrapper'>
          <section className='section'>
            <div className={genderClass}>
                <img className='gender-image' src={sex} alt={this.props.gender}></img>
            </div>
            <div className='contact-data'>
                <h3 className='contact-name'>{this.props.firstName} {this.props.lastName}</h3>
                <span className='contact-number'>Мобільний: {this.props.phone}</span>
                <img className='call-image' src={CALL_IMAGE} alt='call'></img>
            </div>
          </section>
        </div>
          )
    }
  }

export default Contact;