import { useState } from "react";
import React from "react";


//create your first component
function Semaforo() {
	const [color, setcolor] = useState("red");
  
	const cambiarColor = () => {
	  if (color === "red") setcolor("yellow");
	  else if (color === "yellow") setcolor("green");
	  else setcolor("red");
	};
  
	return (
	  <>
		<div className="container">
		  <div className="top"></div> {/* Poste o parte superior */}
		  <div className="traffic-light">
			<div
			  className={`redLight ${color === "red" ? "active" : ""}`}
			  onClick={() => setcolor("red")}
			></div>
			<div
			  className={`yellowLight ${color === "yellow" ? "active" : ""}`}
			  onClick={() => setcolor("yellow")}
			></div>
			<div
			  className={`greenLight ${color === "green" ? "active" : ""}`}
			  onClick={() => setcolor("green")}
			></div>
		  </div>
		<button className="changeColor" onClick={cambiarColor}>
		  Cambiar luz
		</button>
		</div>
	  </>
	);
  }
  
  export default Semaforo;