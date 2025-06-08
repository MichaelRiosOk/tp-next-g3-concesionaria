import "./compra.css";

export default function Compra({ auto, mensaje, comprado }) {
    return (
        <>
            <h1 className={`mensaje-compra ${comprado ? "compra-exitosa" : ""}`}>{mensaje}</h1>
            <div className="detalle-compra">
                <div>
                    <img className="imagen-auto-compra" src={auto.img} alt={auto.modelo}></img>
                </div>
                <div className="detalle-auto">
                    <div>
                    <h3 className="marca-modelo">{auto.marca}</h3>
                    <h2 className="modelo-nombre">{auto.modelo}</h2>
                    </div>
                    <h3><span className="etiqueta">Versión:</span> <span className="valor">{auto.version}</span></h3>
                    <h3><span className="etiqueta">Año de Fabricación:</span> <span className="valor">{auto.anioFabricacion}</span></h3>
                    <h3><span className="etiqueta">Tipo de Vehículo:</span> <span className="valor">{auto.tipoVehiculo}</span></h3>
                    <h3><span className="etiqueta">Kilometraje:</span> <span className="valor">{auto.kilometraje} Km</span></h3>
                    <h3><span className="etiqueta">Precio:</span> <span className="valor">{auto.precio} USD</span></h3>
                </div>
            </div>
        </>
    );
}