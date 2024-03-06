import { Link, Outlet, useParams } from "react-router-dom";
import data from "../../data/data.json";

import SearchForm from "../../utils/Search";
import Heading from "../../utils/Heading";

function Listings() {
  const { create } = useParams();

  return create ? (
    <Outlet />
  ) : (
    <div className="listing">
      <div className="listing__box">
        <SearchForm />
        <ListButton />
        <Properties data={data} />
      </div>

      <div className="listing__stats">
        <Stats data={data} />
      </div>
    </div>
  );
}

function ListButton() {
  return (
    <div className="listing__btn">
      <Link to="create">Add property</Link>
      <button>Delete all listings</button>
    </div>
  );
}

function Properties({ data }) {
  return (
    <div className="listing__properties">
      {data.map((d) => (
        <Property key={d.id} property={d} />
      ))}
    </div>
  );
}

function Property({ property }) {
  return (
    <div className="listing__property">
      <Link>{property.title}</Link>
      <div className="listing__property--info">
        <div className="listing__property--img-box">
          <img src={property.src.pictureUrls[0]} alt="image" />
        </div>
        <div className="listing__property--details">
          <address>{`${property.location.address}, ${property.location.city.city}, ${property.location.state.state}`}</address>
          <p>{property.date}</p>
          <p>
            <span>{property.price}</span> <span>per annum</span>
          </p>
        </div>
      </div>
      <div className="listing__property--btn">
        <Link># Edit</Link>
        <div>&nbsp;</div>
        <Link># Pictures</Link>
        <div>&nbsp;</div>

        <button>{property.publish ? "Published" : "Unpublished"}</button>
        <div>&nbsp;</div>

        <button># Delete</button>
      </div>
    </div>
  );
}

function Stats({ data }) {
  const published = data.filter((d) => d.publish).length;
  const unPublished = data.filter((d) => !d.publish).length;
  const total = published + unPublished;

  return (
    <>
      <Heading># Quick statistics</Heading>
      <div>
        <p>
          Published Listing: <span>{published}</span>
        </p>
        <p>
          Upublished Listing: <span>{unPublished}</span>
        </p>
        <p>
          Total Listing: <span>{total}</span>
        </p>
      </div>
    </>
  );
}
export default Listings;
