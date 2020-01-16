import React from 'react'

import Button from './components/button';


class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: " ",
            sobrenome: " "
        };

    }
    onChange = (evento) => {
        this.setState({ nome: evento.target.value });
        this.setState({sobrenome: evento.target.value});
    };
    render() {
        return (
            <div>
                Nome: <input name="nome" value={this.state.nome} onChange={e => this.onChange(e)} type="text" />
                Sobrenome: <input name="Sobrenome" value={this.state.sobrenome} onChange={e => this.onChange(e)} type="text" />
                <Button />
            </div>
        );
    }
}

export default Input;