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
            <div>3977</div>
          </div>
          <div className="numeros">
            <h3>SOS Inceste</h3>
            <div>04.76.47.90.93</div>
          </div>
          <div className="numeros">
            <h3>SOS Suicide</h3>
            <div>01.40.50.34.34</div>
          </div>
          <div className="numeros">
            <h3>Harcèlement</h3>
            <div>3020</div>
          </div>
          <div className="numeros">
            <h3>Cyberharcèlement</h3>
            <div>3018</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NumUrgence;
