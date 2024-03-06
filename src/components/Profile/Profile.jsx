import Button from "../../utils/Button";
import Input from "../../utils/Input";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__header">
        <p>My personal Info</p>
      </div>

      <ProfileForm>
        <ProfileAvatar />
        <ProfileAccountType />
        <ProfileName />
        <ProfileLocation />
        <ProfileContact />
        <ProfileLink />
        <Button className="profile__btn">
          <button type="button">Cancel</button>
          <button type="button">Save changes</button>
        </Button>
      </ProfileForm>
    </div>
  );
}

function ProfileForm({ children }) {
  return <form action="#">{children}</form>;
}

function ProfileAvatar() {
  return (
    <fieldset className="profile__avatar">
      <div className="profile__avatar--bx">
        <img src="#" alt="avatar" />
      </div>

      <input type="file" id="avatar" />
      <label htmlFor="avatar"># Upload</label>
    </fieldset>
  );
}

function ProfileAccountType() {
  return (
    <fieldset className="profile__type">
      <p className="profile__type--header">Account Type</p>
      <div className="profile__type--student">
        <input type="radio" id="student" name="type" />
        <label htmlFor="student">Student</label>
      </div>
      <div className="profile__type--agent">
        <input type="radio" id="agent" name="type" />
        <label htmlFor="agent">Agent</label>
      </div>
    </fieldset>
  );
}

function ProfileName() {
  return (
    <fieldset className="profile__name">
      <Input label="Name" name="name" />
      <Input label="Company name" name="company" />
    </fieldset>
  );
}

function ProfileLocation() {
  return (
    <fieldset className="profile__location">
      <Input label="Street" name="street" />
      <Input label="City" name="city" />
      <Input label="State" name="state" />
    </fieldset>
  );
}

function ProfileContact() {
  return (
    <fieldset className="profile__contact">
      <Input label="Phone" name="phone" />
      <Input label="Whatsapp" name="whatsapp" />
      <Input label="Email" name="email" type="email" />
    </fieldset>
  );
}

function ProfileLink() {
  return (
    <fieldset className="profile__link">
      <Input label="Facebook profile" name="facebook" />
      <Input label="X/Twitter profile" name="twitter" />
      <Input label="Linkedin profile" name="linkedin" />
    </fieldset>
  );
}
export default Profile;
