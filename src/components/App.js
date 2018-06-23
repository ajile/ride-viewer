import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Ride from 'ride-viewer/components/Ride';
import Header from 'ride-viewer/components/Header';
import Footer from 'ride-viewer/components/Footer';
import Spinner from 'ride-viewer/components/fractions/Spinner';

class App extends Component {

  render() {
    if (this.props.ride.error) {
      return <div>{this.props.ride.error}</div>;
    }

    return <div className="container">
      <Header />
      <main className="main">
        {this.props.ride.status ? <Ride data={this.props.ride} /> : <Spinner />}
      </main>
      <Footer />
    </div>;
  }

}

function mapStateToProps(state) {
  return {
    ride: state.ride
  };
}

App.propTypes = {
  ride: PropTypes.object
};

export default connect(mapStateToProps)(App);