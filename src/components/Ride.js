import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ride extends Component {

  render() {
    const ride = this.props.data;

    return <div>
      <div className="ride__subtitle">{ride.status}</div>
      <hr />
      <div>status: {ride.status}</div>
      <div>support_phone: {ride.support_phone}</div>
      <div>pickup_at: {ride.pickup_at}</div>
      <div>driver: {ride.driver}</div>
      <div>current_eta: {ride.current_eta}</div>
      <div>car: {ride.car}</div>
      <hr />
      <div className="ride__info">
        <div className="ride__info__datetime">{ride.pickup_at}</div>
        <div className="ride__info__hint"></div>
        <div className="ride__info__map"></div>
        <div className="ride__info__addresses"></div>
      </div>
      <hr />
    </div>;
  }

}

Ride.propTypes = {
  data: PropTypes.object
};

export default Ride;