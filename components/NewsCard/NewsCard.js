import './newscard.css'


export const NewsCard = ({ 
    backgroundColor, 
    textColor, 
    heading, 
    summary, 
    tag, 
    cardImage,
    imageSource, 
    author,
    date,
     }) => (
    <div className="card_container">
        <img src={cardImage} alt="card image" className='card_image'/>
        <div className="card_layout">
            <span className="card_tags">
                { tag }
            </span>
            <div className="card_copy">
                <h2 className="card_heading">
                { heading }
                </h2>
                <div className="card_summary">
                    { summary }
                </div>
            </div>
            <div className="buttomInformation">
                    <img src={ imageSource} alt="avatar" className="card_avatar" />
                    <div className="card_info">
                        <div className="card_author">
                           { author }
                        </div>
                        <div className="card_date">
                          {date}
                        </div>
                    </div>
            </div>
        </div>
    </div>
)
