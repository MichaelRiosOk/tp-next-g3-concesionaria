import "./compra.css";

export default function Compra({auto, mensaje}) {
    return (
        <>
            <h1>{mensaje}</h1>
            <div>
                <div>
                    <img src={auto.img} alt={auto.modelo}></img>
                </div>
                <div>
                    <h3>{auto.marca}</h3>
                    <h3>{auto.modelo}</h3>
                    <h3>{auto.version}</h3>
                    <h3>{auto.anioFabricacion}</h3>
                    <h3>{auto.tipoVehiculo}</h3>
                    <h3>{auto.kilometraje}</h3>
                    <h3>{auto.precio}</h3>
                </div>
            </div>
        </>
    );
}