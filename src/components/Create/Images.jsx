import { useContext, useEffect, useState } from "react";
import Button from "../../utils/Button";
import Heading from "../../utils/Heading";
import listingContext from "../../contexts/ListingContext";

function Images() {
  const [file, setFile] = useState([]);

  const { listing, setListing } = useContext(listingContext);

  const urls = [...file].map((file) => URL.createObjectURL(file));

  function handleFinish() {
    setListing((listing) => ({ ...listing, src: { pictureUrls: urls } }));
  }

  return (
    <div className="images">
      <div className="images__box">
        <div style={{ width: "200px" }}>
          {urls.map((url) => (
            <img style={{ width: "100%" }} src={url} key={url} alt="url" />
          ))}
        </div>
        <div className="images__upload">
          <p>Drag and drop pictures here or</p>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files)}
            multiple
          />
          <p>Maximum of 15 pictures</p>
        </div>

        <Button className="images__btn">
          <button>Edit property details</button>
          <button onClick={handleFinish}>Finish</button>
        </Button>
      </div>

      <div className="images__details">
        <Heading>Property details</Heading>
        <ImagesDetails head="Title" text={listing.title} />
        <ImagesDetails head="Type" text={listing.type} />
        <ImagesDetails
          head="Address"
          text={`${listing.location.address}, ${listing.location.city.city}, ${listing.location.state.state}`}
        />
        <ImagesDetails head="Price" text={listing.price.agentFee} />
        <ImagesDetails
          head="Status"
          text={listing.states ? "publish" : "Unpublish"}
        />
      </div>
    </div>
  );
}

function ImagesDetails({ head, text }) {
  return (
    <div className="images__details--box">
      <h2>{head}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Images;
