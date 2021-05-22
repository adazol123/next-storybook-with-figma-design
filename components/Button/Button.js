import PropTypes from 'prop-types';


export default function Button( { primary, backgroundColor, size, label, color, ...props }) {
    const mode = primary ? 'storybook_button--primary' : 'storybook_button--secondary';
    return (
        <div>
            <button 
            type="button"
            className={['storybook_button', `storybook_button--${size}`, mode].join(' ')}
            style={backgroundColor && { backgroundColor }}
            style={color && { color }}
            {...props}
            >{ label }</button>
        </div>
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
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
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
    backgroundColor: null,
    primary: true,
    size: 'small',
    onClick: undefined,
  };


