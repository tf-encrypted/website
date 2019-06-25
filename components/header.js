import React from 'react'
import Head from 'next/head'

import '../style/app.scss'
import img from '../img/tfe.png'
import * as logo from '../img/tfe-logo.png'
import * as github from '../img/github.png'

class Overflow extends React.Component {

    render () {
        return (
            <div className='hamburger-links'>
                <div className='mobile-close-wrapper' onClick={this.props.closeClicked.bind(this.props)}>
                    <div className='mobile-close'></div>
                </div>
                <div className='background'>
                </div>
                <div className='links'>
                    <div className='logo'>
                        <img src={logo}/>
                    </div>

                    <a className='community' onClick={this.props.closeClicked.bind(this.props)} href='#community'>Community</a>
                    <a href='https://tf-encrypted.readthedocs.io/en/latest/'>Documentation</a>

                    <div className='footer'>
                        <div className='github-wrapper'>
                            <a className='cta-link' href='https://github.com/tf-encrypted/tf-encrypted'>
                                <img src={github}/>
                            </a>
                            <a className='github-button' href='https://github.com/tf-encrypted/tf-encrypted' data-icon='octicon-star' data-size='large' data-show-count='true' aria-label='Star ntkme/github-buttons on GitHub'>Star</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Header extends React.Component {

    handleHamburgerClicked () {
    }

    render () {
        return (
            <div className='header' id='top-header'>
                <Head>
                    <script async defer src='https://buttons.github.io/buttons.js'></script>
                </Head>
                <div className='logo'>
                    <div className='logo-wrapper'>
                        <img className='logo-icon' src={img}/>
                    </div>
                </div>

                <div className='links'>
                    <a className='community' href='#community'>Community</a>
                    <a href='https://tf-encrypted.readthedocs.io/en/latest/'>Documentation</a>
                    <a className='cta-link' href='https://github.com/tf-encrypted/tf-encrypted'>
                        <img src={github}/>
                    </a>
                    <a className='github-button' href='https://github.com/tf-encrypted/tf-encrypted' data-icon='octicon-star' data-size='large' data-show-count='true' aria-label='Star ntkme/github-buttons on GitHub'>Star</a>

                </div>
                <div className='hamburger' onClick={this.props.hamburgerClicked.bind(this.props)}>
                </div>

            </div>
        )
    }
}

export { Overflow, Header }
