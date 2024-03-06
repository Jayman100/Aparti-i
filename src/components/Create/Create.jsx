import { useState } from "react";
import Images from "./Images";
import Input from "../../utils/Input";
import Button from "../../utils/Button";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const initialInputs = {
  title: "",
  status: "available",
  type: "select type",
  city: "",
  address: "",
  state: "",
  country: "",
  institution: "",
  agent: "",
  property: "",
  bedroom: "",
  toilet: "",
  bathroom: "",
};

function Create() {
  const [inputValues, setInputValues] = useState(initialInputs);
  const [state, setState] = useState("");
  const [step, setStep] = useState(1);

  function handleChange(e) {
    const { name, value } = e.target;

    setInputValues({ ...inputValues, [name]: value });
  }

  function handleState(e) {
    setState(e.target.value);
  }

  const { create } = useParams();
  const navigate = useNavigate();

  function handleNavigation() {
    if (step < 2) setStep((step) => step + 1);
    navigate("../637267/images");
  }

  return (
    <div className="create">
      <div className="create__heading">
        <p>Add listing</p>
        <p>{inputValues.bedroom}</p>
        <p>{inputValues.toilet}</p>
        <p>{inputValues.bathroom}</p>
      </div>

      <div className="create__steps">
        <Step className="create__steps--1" step="Property detailas" />
        <Step className="create__steps--2" step="Pictures" />
        <Step className="create__steps--3" step="Done" />
      </div>

      <div>
        {step === 1 && (
          <CreateForm>
            <State onChange={handleState} inputValues={State} />
            <Info onChange={handleChange} inputValues={inputValues} />
            <Location onChange={handleChange} inputValues={inputValues} />
            <Price onChange={handleChange} inputValues={inputValues} />
            <Features onChange={handleChange} inputValues={inputValues} />
            <Button className="create__btn">
              <button type="button">Cancel</button>
              <button type="button" onClick={handleNavigation}>
                Next
              </button>
            </Button>
          </CreateForm>
        )}

        {step === 2 && <Images />}
      </div>
    </div>
  );
}

function Step({ className, step }) {
  return (
    <div className={className}>
      <div>&nbsp;</div>
      <p>{step}</p>
    </div>
  );
}

function CreateForm({ children }) {
  return <form action="">{children}</form>;
}

function State({ onChange, inputValues }) {
  return (
    <fieldset className="create__state">
      <div className="create__state--publish">
        <input
          type="radio"
          name="state"
          id="publish"
          onChange={onChange}
          value="publish"
        />
        <label htmlFor="publish">Publish</label>
      </div>
      <div className="create__state--unpublish">
        <input
          type="radio"
          name="state"
          id="unpublish"
          onChange={onChange}
          value="unpublish"
        />
        <label htmlFor="unpublish">Unpublish</label>
      </div>
    </fieldset>
  );
}

function Info({ onChange, inputValues }) {
  return (
    <fieldset className="create__info">
      <Input
        label="Title"
        name="title"
        value={inputValues.title}
        onChange={onChange}
      />

      <div className="create__selects">
        <Select
          label="Property Status"
          name="status"
          options={["Available", "Rented"]}
          value={inputValues.status}
          onChange={onChange}
        />
        <Select
          label="Type"
          name="type"
          options={["Select type", "Flat/Apartment", "Self con"]}
          value={inputValues.type}
          onChange={onChange}
        />
      </div>
    </fieldset>
  );
}

function Location({ onChange, inputValues }) {
  return (
    <fieldset className="create__location">
      <Input
        label="City"
        name="city"
        value={inputValues.city}
        onChange={onChange}
      />
      <Input
        label="Address"
        name="address"
        value={inputValues.address}
        onChange={onChange}
      />
      <Input
        label="State"
        name="state"
        value={inputValues.state}
        onChange={onChange}
      />
      <Input
        label="Country"
        name="country"
        value={inputValues.country}
        onChange={onChange}
      />
      <Input
        label="Institution"
        name="institution"
        value={inputValues.institution}
        onChange={onChange}
      />
    </fieldset>
  );
}

function Price({ onChange, inputValues }) {
  return (
    <fieldset className="create__price">
      <Input
        label="Agent fee"
        name="agent"
        value={inputValues.agent}
        onChange={onChange}
      />
      <Input
        label="Property fee"
        name="property"
        value={inputValues.property}
        onChange={onChange}
      />
    </fieldset>
  );
}

function Features({ onChange, inputValues }) {
  return (
    <fieldset className="create__features">
      <Input
        label="Bedroom"
        name="bedroom"
        value={inputValues.bedroom}
        onChange={onChange}
      />
      <Input
        label="Toilet"
        name="toilet"
        value={inputValues.toilet}
        onChange={onChange}
      />
      <Input
        label="Bathroom"
        name="bathroom"
        value={inputValues.bathroom}
        onChange={onChange}
      />
    </fieldset>
  );
}

function Select({ label, name, options, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Create;
