import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            props.handleAdd()
        }
    }

    return (
        <div role='form' className='emailForm'>

            <Grid colsDetTras='12 9 10'>
                <form >
                    <input
                        id='email'
                        className='form-control'
                        placeholder='Insert email'
                        value={props.email}
                        onChange={props.handleChange}
                        onKeyUp={keyHandler}></input>
                    <input
                        id='message'
                        className='form-control'
                        placeholder='Insert message'
                        value={props.message}
                        onChange={props.handleChange}
                        onKeyUp={keyHandler}></input>
                </form>
            </Grid>

            <Grid colsDetTras='12 3 2'>
                <IconButton style='primary' icon='plus' hide={true} onClickii={props.handleAdd}></IconButton>
            </Grid>

        </div>
    )
}