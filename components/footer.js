import React from 'react'

import '../style/app.scss'
import * as tfeImg from '../img/tfe-dark.png'

class Footer extends React.Component {
    render () {
        return (
            <div className='footer'>
                <img src={ tfeImg }/>
            </div>
        )
    }
}

export default Footer


