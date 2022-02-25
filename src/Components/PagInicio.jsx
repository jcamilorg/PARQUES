import React, {Component} from 'react';
import "./Styles/pagInicio.css";



function CardOfParque(props) {
    return (
        <div className="CardOfParque">
            <img width="100%" height="175px" src={props.imgsrc}/>
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

function CardInfo(props){
    return(
        <div className="CardInfo">
            <img  width="140px"src={props.imgsrc}/>
            <p>{props.description}</p>
        </div>

    )
}

class BannerInformativo extends Component {
    render() {
        return (
            <div className="BannerInformativo">

                <div className="containerProgramate">
                    <span className="title">¡Prográmate!</span>
                    <hr className="hrProgramate"/>
                    <div className="Slider">
                        <img  width="400px"src="https://www.car.gov.co/uploads/blog/cyiAeOmdFc.jpeg"/>
                    </div>
                </div>

                <div className="containerInformate">
                    <span className="title">Infórmate</span>
                    <hr className="hrInformate"/>
                    <div className="listOfCardInfo">
                        <CardInfo
                        imgsrc = "https://www.car.gov.co/uploads/blog/zeQbdINWIf.jpeg" 
                        description="La CAR prohibe plásticos de un solo uso en sus parques ecoturísticos"
                        />

                        <CardInfo
                        imgsrc = "https://www.car.gov.co/uploads/blog/zeQbdINWIf.jpeg" 
                        description="La CAR prohibe plásticos de un solo uso en sus parques ecoturísticos"
                        />

                        <CardInfo
                        imgsrc = "https://www.car.gov.co/uploads/blog/zeQbdINWIf.jpeg" 
                        description="La CAR prohibe plásticos de un solo uso en sus parques ecoturísticos"
                        />

                    </div>
                </div>
            </div>
        )
    }
}

class BannerExperiencias extends Component {
    render() {
        return (
        <div className="BannerExperiencias">
            <h2>Experiencias de nuestros visitantes</h2>
            <hr/>
            <div className = "ContainerImg"></div>
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
            <BannerInformativo/>
            <BannerExperiencias/>
        </div>
        )
    }
  

}

export default PagInicio;