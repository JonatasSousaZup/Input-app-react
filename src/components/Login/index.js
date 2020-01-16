import React, { Component } from 'react';

import Input from '../Input';


class Login extends React.Component {
    constructor(props) {
        super(props)

       // this.handleLogin = this.handleLogin.bind(this)
    }
    handleLogin =() => {
        console.log('click')
    }

    render() {
        return (
            <div>
                <Input/>
            </div>
        )
    }
}
export default Login;