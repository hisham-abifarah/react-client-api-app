// rscp + enter
import React from 'react';
import PropTypes from 'prop-types';

// const InlineError = ({ text }) => (
//         <span style = {{ color: '#ae5856' }}>
//         {/* {text} is a proptype have to install prop-types  */}
//             { text }            
//         </span>
//     );

    const InlineError = ({ text }) => (
        <span style={{ color: "#ae5856" }}>{text}</span>
      );

 // proptypes def
InlineError.propTypes = {
    text: PropTypes.string.isRequired
};

export default InlineError;