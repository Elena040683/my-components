import PropTypes from 'prop-types';
import style from './Title.module.css';

// создадим объект inline стилей
const stylesForTitle = {
  color: 'green',
  textTransform: 'uppercase',
}

const Title = ({value}) => {
  return <h2 className={style.title} style={stylesForTitle}>{value}</h2>
}

export default Title;

// Title.defaultProps = {
//   value: 'COOL!'
// }

Title.propTypes = {
  value: PropTypes.string,
}