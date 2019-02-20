import React from 'react'
import If from './if'

export default props => (
    <div>
        <If test={!props.hide}>
            <button className={'btn btn-' + props.style} onClick={props.onClickii}>
                <i className={'fa fa-' + props.icon}></i>
            </button>
        </If>
        <If test={props.hide}>
            <button className={'btn btn-' + props.style} onClick={props.onClickii}>
                <i>Submit</i>
            </button>
        </If>
    </div>
)