import React from "react";
import "../Styles/models.css";
import { Link } from "react-router-dom";

function Models() {
  const models = [
    {
      id: 1,
      name: "Cheerios",
    },
    {
      id: 2,
      name: "Familia",
    },
    {
      id: 3,
      name: "Softasilk",
    },
    {
      id: 4,
      name: "Rice Roni",
    },
    {
      id: 5,
      name: "Farfalle",
    },
    {
      id: 6,
      name: "Minute",
    },
    {
      id: 7,
      name: "Nature Valley",
    },
    {
      id: 8,
      name: "Earl Grey",
    },
    {
      id: 9,
      name: "Kellogs - Special",
    },
    {
      id: 10,
      name: "Kellogs - Muesli Fruit Magic",
    },
    {
      id: 11,
      name: "Kellogs - Corn Flakes",
    },
  ];
  return (
    <div>
      <div id="model">
        <div className="dark-overlay">
          <div className="row">
            <h2 className="text-center display-2 text-white">
              The list of models:
            </h2>
            {models.map((model) => (
              <Link
                style={{ textDecoration: "none" }}
                className="display-5 text-center text-white"
                key={model.id}
                to="/view"
              >
                {model.id}. {model.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Models;
