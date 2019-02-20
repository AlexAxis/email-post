import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import EmailForm from './emailForm'

const URL = 'http://localhost:1111/API/contact'

export default class Send_email extends Component {

    constructor(props) {
        super(props)
        this.state = { email: '', message: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)

        this.refresh()
    }

    refresh(email = '', message = '') {
        if (this.state.email) {
            this.setState({ ...this.state, email, message })
        }
    }

    handleChange(e) {
        if (e.target.id === 'email') {
            this.setState({ ...this.state, email: e.target.value })
        }
        if (e.target.id === 'message') {
            this.setState({ ...this.state, message: e.target.value })
        }
    }

    handleAdd() {

        const email = this.state.email
        const message = this.state.message

        let dontadd = false

        const substring = '@'
        if (!email.includes(substring)) {
            alert('The email must contain @')
            dontadd = true
        }
        if (message.length <= 30) {
            alert('The message must be longer than 30 characters')
            dontadd = true
        }

        if (dontadd == false) {
            axios.post(URL, { email, message })
                .then(resp => this.refresh())
        }

    }

    render() {
        return (
            <div>
                <PageHeader name='Email' small='form'></PageHeader>
                <EmailForm
                    email={this.state.email}
                    message={this.state.message}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
            </div>
        )
    }
}