import React from 'react'
import Button from './button/button'

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: " ",
        };

    }
    onChange = (evento) => {
        this.setState({ nome: evento.target.value });
    };
    render() {
        return (
            <div>
                Nome: <input name="nome" value={this.state.nome} onChange={e => this.onChange(e)} type="text" />
                {}
                <Button />
            </div>
        );
    }
}

export default Input;