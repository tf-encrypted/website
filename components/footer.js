import React from 'react'

import '../style/app.scss'
import * as tfeImg from '../img/tfe-dark.png'

class Footer extends React.Component {
    render () {
        return (
            <div className='footer'>
                <img src={ tfeImg }/>
                <div className='links'>
                    <a href='https://github.com/tf-encrypted/tf-encrypted'>View on Github</a>
                    <a href='https://join.slack.com/t/tf-encrypted/shared_invite/enQtNjI5NjY5NTc0NjczLTFkYTRjYWQ0ZWVlZjVmZTVhODNiYTA2ZTdlNWRkMWE4MTI3ZGFjMWUwZDhhYTk1NjJkZTRiZjBhMzMyMjNlZmQ'>Join our Slack Community</a>
                    <a href='https://arxiv.org/abs/1810.08130'>Read our Whitepaper</a>
                    <a href='https://github.com/tf-encrypted/tf-encrypted/tree/master/examples'>Examples</a>
                </div>
            </div>
        )
    }
}

export default Footer


