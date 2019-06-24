import React from 'react'

import '../style/app.scss'
import img from '../img/tfe.png'
import * as github from '../img/github.png'

let links = (
    <div className='links'>
            <a className='community' href='#community'>Community</a>
            <a href='https://tf-encrypted.readthedocs.io/en/latest/'>Documentation</a>
            <a className='cta-link' href='https://github.com/tf-encrypted/tf-encrypted'>
                <img src={github}/>
    </a>
    </div>
)

class Overflow extends React.Component {

    render () {
        return (
            <div className='hamburger-links'>
                <div className='close' onClick={this.props.closeClicked.bind(this.props)}>
                </div>
                <div className='background'>
                </div>
                { links }
            </div>
        )
    }
}

class Header extends React.Component {

    handleHamburgerClicked () {
    }

    render () {
        return (
            <div className='header'>
                <div className='logo'>
                    <div className='logo-wrapper'>
                        <img className='logo-icon' src={img}/>
                    </div>
                </div>

                { links }

                <div className='hamburger' onClick={this.props.hamburgerClicked.bind(this.props)}>
                </div>

            </div>
        )
    }
}

export { Overflow, Header }
