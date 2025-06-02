import "./compra.css";

export default function Compra(props) {
    return (
        <>
            <h1>Usted esta por comprar este increible auto.</h1>
            <div>
                <div>
                    <img src={props.img} alt={props.modelo}></img>
                </div>
                <div>
                    <h3>

                    </h3>
                    <h3>

                    </h3>
                </div>
            </div>
        </>
    );
}