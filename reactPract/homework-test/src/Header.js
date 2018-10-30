import React from 'react';

class Header extends React.Component{
    render() {
        return (
            <div>
                <header className='App-header'>
                    <p>
                        Todo<span className='designLogo'>App</span>
                    </p>
                </header>
            </div>
        )
    }
}

export default Header;