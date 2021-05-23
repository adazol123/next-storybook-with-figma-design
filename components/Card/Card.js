import PropTypes from 'prop-types';

export  function Card({ card_title, card_content, card_author, card_date , size, backgroundColor, color }) {
    return (
        <div
            className={['card', `card__${size}`].join(' ')}
            style={{ backgroundColor, color }}
        >
            <div className="card-image">

            </div>

            <div className="card-content">
                <div className="card-context">
                    <div className="card-tags">
                        Investing
                    </div>
                    <h1>{ card_title }</h1>
                    <div className='card-author'>
                        <p>{ card_author }</p>
                        <p>{ card_date }</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

Card.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    // backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    card_title: PropTypes.string.isRequired,
    card_author: PropTypes.string,
    card_date: PropTypes.string.date,
    /**
     * Optional click handler
     */
    // onClick: PropTypes.func,
};