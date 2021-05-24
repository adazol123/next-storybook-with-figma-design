import PropTypes from 'prop-types';


export function Button( { primary, backgroundColor, size, label, color, ...props }) {
    const mode = primary ? 'storybook_button--primary' : 'storybook_button--secondary';
    return (
            <button 
            type="button"
            className={['storybook_button', `storybook_button__${size}`, mode].join(' ')}
            style={{ backgroundColor }}
            style={{ color }}
            {...props}
            >{ label }</button>
    )
}








Button.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
        /**
     * What text color to use in component
     */
    color: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    backgroundColor: '#2DCC9E',
    color:'#F8F8FF',
    primary: true,
    label: 'Button',
    size: 'md',
    onClick: 'click',
  };


