import PropTypes from 'prop-types';
const Section = ({ title = '', children }) => (
  <div className="Container">
    <h3>{title}</h3>
    {children}
  </div>
);
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
export default Section;
