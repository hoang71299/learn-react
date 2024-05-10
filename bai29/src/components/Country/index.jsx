import { country } from "../../data/country";
// import './Country.css'
import './Country.scss'
const Country = () => {
  return (
    <div>
      <ul className="country">
        {(country || []).map((itemCountry) => (
          <li className="country_item" key={itemCountry.id}>
            <span className="country_text">{itemCountry.name}</span>
            <ul className="country_sub">
              {(itemCountry.city || []).map((itemCity) => (
                <li className="country_sub-item" key={itemCity.id}>{itemCity.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Country;
