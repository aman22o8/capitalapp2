// Write your code here
import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {initialCountry: countryAndCapitalsList[0]}

  selectedOption = event => {
    // console.log(event.target.value)
    const myArray = countryAndCapitalsList.find(
      each => each.id === event.target.value,
    )
    // console.log(myArray)
    this.setState({initialCountry: myArray})
  }

  render() {
    const {initialCountry} = this.state
    console.log(initialCountry)

    return (
      <div className="main_container">
        <div className="card_container">
          <h1 className="main_heading">Countries And Capitals</h1>
          <p className="para1">
            {' '}
            <select
              value={initialCountry.id}
              className="select_container"
              onChange={this.selectedOption}
            >
              {countryAndCapitalsList.map(eachOption => (
                <option key={eachOption.id} value={eachOption.id}>
                  {eachOption.capitalDisplayText}
                </option>
              ))}
            </select>
            is capital of which country ?
          </p>
          <p className="para2">{initialCountry.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
