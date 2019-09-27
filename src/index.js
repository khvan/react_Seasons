import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


// const App = ()=>{
//   window.navigator.geolocation.getCurrentPosition(
//     (position)=> {console.log(position)},
//     (err)=>{console.log(err)}
//   )
//   return <div>Hi there</div>

// }




class App extends React.Component {
  state = {lat: null, errorMessage: ''};
  renderContent(){
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage}</div>
    }
  
    if (!this.state.errorMessage && this.state.lat) {
      return <div><SeasonDisplay lat={this.state.lat} /></div>
    }
  
    return <Spinner />
  }
  
  
  render () {
    return(
    <div className = "border red">
      {this.renderContent()}
    </div>
    )
  }

  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition (
      position => this.setState ({lat: position.coords.latitude}),
      err => this.setState ({errorMessage: err.message})
    );
  }
}


ReactDOM.render (<App />, document.querySelector ('#root'));
