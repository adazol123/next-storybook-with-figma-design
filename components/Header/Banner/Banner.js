export const Banner = (params) => {

    var counter = 1;
    setInterval(() =>{
        document.getElementById('radio' + counter).checked = true;
        counter = counter + 1;
        if ( counter > 4) {
            counter = 1
        } 
    }, 5000);
    return (
        <div className="banner-container">
            <div className="slider">
                <div className="slides">
                    <input type="radio" name='radio-button'
                    id='radio1' />
                    <input type="radio" name='radio-button'
                    id='radio2' />
                    <input type="radio" name='radio-button'
                    id='radio3' />
                    <input type="radio" name='radio-button'
                    id='radio4' />

                    <div className="slide first">
                        <img src="https://images.unsplash.com/photo-1614102073832-030967418971?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://images.unsplash.com/photo-1602131010835-412c62f26aaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://images.unsplash.com/photo-1612128655379-e9f988483661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://images.unsplash.com/photo-1605007493699-af65834f8a00?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
                    </div>

                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                    </div>
                </div>

                <div className="navigation-manual">
                    <label htmlFor="radio1" className='manual-btn'></label>
                    <label htmlFor="radio2" className='manual-btn'></label>
                    <label htmlFor="radio3" className='manual-btn'></label>
                    <label htmlFor="radio4" className='manual-btn'></label>
                </div>
            </div>
        </div>
    )
}


