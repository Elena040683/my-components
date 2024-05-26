import PropTypes from 'prop-types';
function Title ({value}){
  return <h2>{value}</h2>
}

export default Title;

// Title.defaultProps = {
//   value: 'COOL!'
// }

Title.propTypes = {
  value: PropTypes.string,
}