import missao from '../assets/missao_tratado.png';
import mapa from '../assets/mapa_tratado.png';
import bau from '../assets/bau_tratado.png';
import camera from '../assets/camera_tratado.png';
import { Link } from 'react-router-dom'

const menuItems = [
  { to: "missao", img: missao, label: "Missões" },
  { to: null, img: bau, label: "Inventário" },
  { to: null, img: mapa, label: "GeoLocalização" },
  { to: null, img: camera, label: "Camera" }
];

export function Menu() {
  return (
    <div className="menu">
      <ul>
        {menuItems.map((item, i) => (
          <li key={i}>
            {item.to ? (
              <Link to={item.to}>
                <figure>
                  <img src={item.img} alt={item.label} />
                  <figcaption>{item.label}</figcaption>
                </figure>
              </Link>
            ) : (
              <figure>
                <img src={item.img} alt={item.label} />
                <figcaption>{item.label}</figcaption>
              </figure>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
