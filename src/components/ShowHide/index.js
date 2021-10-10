import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  showFirstName = () => {
    this.setState(prevState => ({first: !prevState.first}))
  }

  showLastName = () => {
    this.setState(prevState => ({last: !prevState.last}))
  }

  render() {
    const {first, last} = this.state

    return (
      <div className="app-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="names-container">
          <div className="inner-names-container">
            <button
              type="button"
              onClick={this.showFirstName}
              className="button"
            >
              Show/Hide Firstname
            </button>
            {first && <p className="name">Joe</p>}
          </div>
          <div className="inner-names-container">
            <button
              type="button"
              onClick={this.showLastName}
              className="button"
            >
              Show/Hide Lastname
            </button>
            {last && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
