import React, {Component} from 'react';
import "./Styles/pagInicio.css";



function CardOfParque(props) {
    return (
        <div className="CardOfParque">
            <img width="100%" src={props.imgsrc}/>
            <div className="Content">
                <h3 className="title">{props.title}</h3>
                <p className="description">{props.description}</p>
                <div>Ver más ➕</div>
            </div>
        </div>
    )
    
}

class BannerParques extends Component {
    render() {
        return (
        <div className="BannerParques">
        <div className="tituloParques">
            <span>Destinos Maravillosos para el goce de la naturaleza</span>
        </div>
        <div className="gridContainer">
            <CardOfParque 
            imgsrc = "https://www.iagua.es/sites/default/files/lago_portada.jpg"
            title = "EMBALSE NEUSA"
            description={[<strong>Disfruta en familia </strong>, "un atractivo escenario de bosque natural."]}/>
            
            <CardOfParque 
            imgsrc = "https://cdn-blog1.fibrasynormasdecolombia.com/wp-content/uploads/2018/02/Portada-10.jpg"
            title = "GUATAVITA"
            description={["En este maravilloso complejo ecoturístico ", <b>conoce de primera mano todo sobre la cultura Muisca.</b>]}/>
            
            <CardOfParque 
            imgsrc ="https://i.ytimg.com/vi/XIUBuhqylUc/maxresdefault.jpg"
            title = "RIO NEUSA"
            description={["Comparte junto a tus amigos, las zonas verdes para camping y picnic."]}/>
            
            <CardOfParque 
            imgsrc ="https://i.ytimg.com/vi/XIUBuhqylUc/maxresdefault.jpg"
            title = "PUENTE SOPÓ"
            description={["Recorre senderos adornados decolorida vegetación y hermosas aves a su paso. "]}/>
            
            <CardOfParque 
            imgsrc = "https://www.car.gov.co/uploads/blog/yZoSgCdjRM.jpeg"
            title = "EL HATO"
            description={["Sal de la rutina y programa un día de pesca deportiva mientras contemplas el hermoso paisaje."]}/>
            
            <CardOfParque 
            imgsrc= "https://situr.boyaca.gov.co/wp-content/uploads/2017/05/parque-juanpablo.jpg"
            title = "JUAN PABLO II"
            description={["Visita este destino ideal para el turismo religioso, de meditación y esparcimiento." ]}/>
        </div>
        <button className="btnReservas">💻 RESERVAS</button>
        </div>


        )
    }
}

class PagInicio extends Component {
    render() {
        return (
        <div className="pagInicio">
            <div className="ContainerVideo">
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/P3MY6vPdgZM?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
            </div>
            <BannerParques/>
        </div>
        )
    }
  

}

export default PagInicio;