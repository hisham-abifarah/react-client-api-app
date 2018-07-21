import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import Navbar from '../nav/Navbar';

 // functional component
const DashboardPage = ({ isConfirmed }) => (
    <div>
    <Navbar/>
        <div>
            {/* if not confirmed, get confirmemailmessage and display it */}
            {/* we take isConfirmed from redux state , we connect with {connect} in export default */}
            {!isConfirmed && <ConfirmEmailMessage/>}
        </div>
        </div>
        );

DashboardPage.propTypes = {
    isConfirmed:PropTypes.bool.isRequired
}

function mapStateToProps(state){
    return{
        isConfirmed: !!state.user.confirmed
    }
}

export default connect(mapStateToProps)(DashboardPage);