import React from 'react'
import PageHeader from '../template/pageHeader'

import Image from '../images/me'

export default props => (
    <div>
        <PageHeader name='Home' small='page'></PageHeader>
        <img src={Image} height="400" width="400" />
        <h2>My photo (Alexis Sousa)</h2>

    </div>
)