import React from 'react'

import Button from '../Button';


class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: " ",
            sobrenome: " "
        };

    }
    onChangeSobrenome = (evento) => {
        
        this.setState({sobrenome: evento.target.value});
    };
    onChangeName = (evento) => {
        this.setState({ nome: evento.target.value });
    }
    render() {
        return (
            <div>
                Nome: <input name="nome" value={this.state.nome} onChange={e => this.onChangeName(e)} type="text" />
                Sobrenome: <input name="Sobrenome" value={this.state.sobrenome} onChange={e => this.onChangeSobrenome(e)} type="text" />
                <Button onClick={() => alert(this.state.nome + this.state.sobrenome)} />
            </div>
        );
    }
}

export default Input;