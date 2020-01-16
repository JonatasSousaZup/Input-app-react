import React, { Component } from 'react';

import Input from '../components/Input';

import Button from '../components/Button';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleLogin() {
        console.log('click')
    }

    render() {
        return (
            <div>
                <Input/>
                <Button/>
                <input hintText="nome"
                type="text"
                />
                <input hintText="sobrenome"
                type="text"
                />
            </div>
        )
    }
}
export default Home;