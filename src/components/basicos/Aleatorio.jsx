import React from 'react';

export default (props) => {
    const aleatorio =
        parseInt(Math.floor(Math.random() * (props.max - props.min)) + props.min);

    const { min, max } = props;

    return (
        <div>
            <h2>Valor aleatório</h2>
            <p>
                <strong> Valor mínimo: {min} </strong>
            </p>
            <p>
                <strong> Valor máximo: {max} </strong>
            </p>
            <p>
                <strong> Valor aleatório: {aleatorio} </strong>
            </p>
        </div >
    );
};