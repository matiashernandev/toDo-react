import "./App.css";
import image from "./images/freecodecamp-logo.png";

import ListaDeTareas from "./components/ListaDeTareas";

function App() {
    return (
        /* ------------------------ hacer componente al logo ------------------------ */
        <div className="aplicacion-tareas">
            <div className="freecodecamp-logo-contenedor">
                <img className="freecodecamp-logo" src={image} alt="logo" />
            </div>
            <div className="tareas-lista-principal">
                <h1>Mis Tareas</h1>
                <ListaDeTareas />
            </div>
        </div>
    );
}

export default App;
