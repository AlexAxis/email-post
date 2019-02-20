import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(tata => (
            <tr key={tata._id}>
                <td>{tata.email}</td>
                <td>{tata.message}</td>
                <td>
                    <IconButton style='danger' icon='trash-o' onClickii={() => props.handleRemove(tata)} hide={false}></IconButton>
                </td>
            </tr>
        ))

    }

    return (
        <table className='table'>

            <thead>
                <tr>
                    <th>Email</th>
                    <th>Message</th>
                    <th className='tableActions'>Actions</th>
                </tr>
            </thead>

            <tbody>
                {renderRows()}
            </tbody>

        </table>
    )
}