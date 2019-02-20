import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import GetList from './getList'

const URL = 'http://localhost:1111/API/contact'

export default class email_list extends Component {

    constructor(props) {
        super(props)
        this.state = { email: '', message: '', list: [] }

        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()
    }

    refresh(email = '') {
        const search = email ? `&email__regex=/${email}/` : ''
        //axios.get(`${URL}?sort=-createdAt`)
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({ ...this.state, email, list: resp.data }))
    }

    handleRemove(todotata) {
        axios.delete(`${URL}/${todotata._id}`)
            .then(resp => this.refresh(this.state.email))
    }

    render() {
        return (
            <div>
                <PageHeader name='Email' small='list'></PageHeader>

                <GetList
                    list={this.state.list}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}

