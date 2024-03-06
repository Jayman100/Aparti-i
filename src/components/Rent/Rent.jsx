import { Link, Outlet, useParams } from "react-router-dom";
import data from "../../data/data.json";
import { useState } from "react";
import Heading from "../../utils/Heading";
import SearchForm from "../../utils/Search";

function Rent() {
  const [rentData, setRentData] = useState(data);
  const { rentLocation } = useParams();
  const { rentId } = useParams();

  const publishData = rentLocation
    ? rentData.filter(
        (data) => data.institution.name === rentLocation && data.publish
      )
    : rentData.filter((data) => data.publish);

  return rentId ? (
    <Outlet />
  ) : (
    <div className="rent">
      <div className="rent__box">
        <SearchForm />
        <QuickSearchFilter data={rentData} />
        <ListedApartment data={publishData} />
      </div>
      <div className="rent__filter">
        <Filter />
      </div>
    </div>
  );
}

function QuickSearchFilter({ data }) {
  const searchData = [...new Set(data.map((data) => data.institution.name))];

  return (
    <div className="rent__quick-filter">
      <h2>Quick search</h2>
      <ul>
        {searchData.map((d) => (
          <li key={d}>
            <Link to={d}>{d}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ListedApartment({ data }) {
  return (
    <div className="rent__list">
      <ul>
        {data.map((d) => (
          <Listings key={d.id} data={d} />
        ))}
      </ul>
    </div>
  );
}

function Listings({ data }) {
  console.log(data);

  const route = data.title.split(" ").join("-");

  console.log(route);
  return (
    <li>
      <div className="rent__list--details">
        <div className="rent__list--img-box">
          <img
            src={data.src.pictureUrls[0]}
            alt={data.title}
            className="rent__list--img"
          />
        </div>

        <div className="rent__list--details-box">
          <Link to={`${data.institution.name}/${data.id}-${route}`}>
            {data.title}
          </Link>
          <address>
            <span>{data.location.address}</span>,
            <span>{data.location.city.city}</span>
          </address>
          <p>{data.description}</p>
          <Link>More details...</Link>
          <p>
            <span>posted:</span>
            <span>{data.date}</span>
          </p>

          <p>
            <span>{data.price} per annum</span>
          </p>

          <p>Akhmas Rahman</p>
          <p>08128219218</p>
        </div>
      </div>

      <div className="rent__list--features">
        <div>
          <p>#{data.features.bedroom} bedroom</p>
          <p>#{data.features.bathroom} bathroom</p>
          <p>#{data.features.toilet} toilet</p>
        </div>
        <button># save</button>
      </div>
    </li>
  );
}

function Filter() {
  return (
    <div className="rent__filter-box">
      <Heading>Advanced filter</Heading>
      <FilterForm />
    </div>
  );
}

function FilterForm() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("all");
  const [bedroom, setBedroom] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  return (
    <form>
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <label htmlFor="type">Type</label>
      <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
        <option value="all">All</option>
        <option value="self con">Self Con</option>
        <option value="flat">Flat</option>
      </select>

      <label htmlFor="bedroom">Bedroom</label>
      <input
        type="number"
        id="bedroom"
        value={bedroom}
        onChange={(e) => setBedroom(e.target.value)}
      />

      <label htmlFor="min">Min price</label>
      <input
        type="text"
        id="min"
        value={min}
        onChange={(e) => setMin(e.target.value)}
      />

      <label htmlFor="max">Max price</label>
      <input
        type="text"
        id="max"
        value={max}
        onChange={(e) => setMax(e.target.value)}
      />

      <button>Search</button>
    </form>
  );
}

export default Rent;
