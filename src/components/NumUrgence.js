import React from "react";
import "./styles/NumUrgence.css";

function NumUrgence(props) {
  return (
    <div className="numUrgence">
      <h2 className="header2">Numéro d'urgence</h2>
      <div className="troubleFlex">
        <div className="numContainer">
          <div className="numeros">
            <h3>Allo Maltraitance</h3>
            <p>3977</p>
          </div>
          <div className="numeros">
            <h3>SOS Inceste</h3>
            <p>04.76.47.90.93</p>
          </div>
          <div className="numeros">
            <h3>SOS Suicide</h3>
            <p>01.40.50.34.34</p>
          </div>
          <div className="numeros">
            <h3>Harcèlement</h3>
            <p>3020</p>
          </div>
          <div className="numeros">
            <h3>Cyberharcèlement</h3>
            <p>3018</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NumUrgence;
