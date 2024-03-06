import { Link, useParams } from "react-router-dom";
import data from "../data/data.json";
import { useState } from "react";
import Heading from "../utils/Heading";

function Details() {
  const { rentId } = useParams();

  const detailsData = data.filter((data) => rentId.includes(data.id))[0];
  return (
    <div className="details">
      <DetailsBox>
        <DetailsInfo data={detailsData}>
          <Photos data={detailsData} />
          <FeatureBox data={detailsData} />
          <Save />
          <DetailsDescription data={detailsData} />
        </DetailsInfo>
      </DetailsBox>
      <AgentDetails />
    </div>
  );
}

function DetailsBox({ children }) {
  return (
    <div className="details__box">
      <BackLink />
      {children}
    </div>
  );
}

function BackLink() {
  return (
    <div className="details__link">
      <Link to="/rent">&larr; Back to property list</Link>
    </div>
  );
}

function DetailsInfo({ data, children }) {
  return (
    <>
      <div className="details__info">
        <Info info={data} />
      </div>
      {children}
    </>
  );
}

function Info({ info }) {
  return (
    <>
      <div className="details__info--address">
        <p>{info.title}</p>
        <address>{`${info.location.address}, ${info.location.city.city}, ${info.location.state.state}`}</address>
      </div>

      <div className="details__info--price">
        <p>{info.price}</p>
        <p>per annum</p>
      </div>
    </>
  );
}

function Photos({ data }) {
  const [page, setPage] = useState(1);

  const pageLength = data.src.pictureUrls.length;
  function handlePaginationLeft() {
    if (page > 1) setPage((prev) => prev - 1);
  }

  function handlePaginationRight() {
    if (page < pageLength) setPage((prev) => prev + 1);
  }
  return (
    <div className="details__photos">
      <button className="left-btn" onClick={handlePaginationLeft}>
        &larr;
      </button>
      <button className="right-btn" onClick={handlePaginationRight}>
        &rarr;
      </button>

      <div className="details__photos--box">
        <img src={data.src.pictureUrls[page - 1]} />
      </div>

      <PhotosPageNum page={page} length={pageLength} />
    </div>
  );
}

function PhotosPageNum({ page, length }) {
  return (
    <>
      <p className="details__photos--page">{`${page}/${length}`}</p>
    </>
  );
}

function DetailsDescription({ data }) {
  return (
    <div className="details__description">
      <div className="details__description--btn">
        <button># Details</button>
        <button># Maps</button>
      </div>

      <div className="details__description--box">
        <h2>Property Details</h2>

        <p>{data.description}</p>
      </div>
    </div>
  );
}

function AgentDetails() {
  return (
    <div className="details__agent">
      <Heading>Posted By:</Heading>
      <Agent />
    </div>
  );
}

function Agent() {
  return (
    <div className="details__agent-box">
      <div className="details__agent--img">
        <img src="#" alt="agent photo" />
      </div>
      <Link>Akhmas Rahman</Link>
      <address># Olohunda, street , alagbede, ilorin</address>
      <p># 08105020317</p>
      <p># 09023123422</p>
    </div>
  );
}

function FeatureBox({ data }) {
  return (
    <div className="details__features">
      <p>
        <span>#</span> <span>{data.features.bathroom} Bathroom</span>
      </p>
      <div></div>
      <p>
        <span>#</span> <span>{data.features.toilet} Toilet</span>
      </p>
      <div></div>

      <p>
        <span>#</span> <span>{data.features.bedroom} Bedroom</span>
      </p>
    </div>
  );
}

function Save() {
  return <button className="details__save-btn"># Save</button>;
}
export default Details;
