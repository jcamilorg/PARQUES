import React from 'react';

function CardOfParque(props) {
    return (
        <div className="CardOfParque">
            <div className="ContainerImg">
                <img src={props.imgsrc}/>
            </div>
            <div className="Content">
                <h3 className="title">{props.title}</h3>
                <p className="description">{props.description}</p>
                <div className="link">Ver más ➕</div>
            </div>
        </div>
    )
}

export default CardOfParque;