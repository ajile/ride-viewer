import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Spinner from 'ride-viewer/components/fractions/Spinner';

class Footer extends Component {

  render() {
    let phoneNumberChank;
    if (this.props.supportPhone) {
      phoneNumberChank = <a href={'tel:' + this.props.supportPhone}>Позвонить в службу поддержки</a>;
    } else {
      phoneNumberChank = <Spinner />;
    }
    return <footer className="footer">{phoneNumberChank}</footer>;
  }

}

function mapStateToProps(state) {  
  return {
    supportPhone: state.ride.support_phone
  }
}

Footer.propTypes = {
  supportPhone: PropTypes.string
};

export default connect(mapStateToProps)(Footer)