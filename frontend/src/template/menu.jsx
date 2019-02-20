import React from 'react'

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href="#">
                    <i className='fa fa-black-tie'></i> Home
                </a>
            </div>
            <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                    <li><a href="#/send_email" className='fa fa-share-square'> Contact us</a></li>
                    <li><a href="#/email_list" className='fa fa-list'> Email List</a></li>
                </ul>
            </div>
        </div>
    </nav>
)