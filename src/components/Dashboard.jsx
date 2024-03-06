import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Outlet />
      <div className="dashboard">
        <div className="dashboard__welcome">
          <p className="dashboard___welcome--text">Welcome</p>
          <p className="dashboard___welcome--user">Jayman</p>
        </div>

        <div className="dashboard__links">
          <DashboardLink route="/profile">
            <p className="dashboard__icon">Icon</p>
            <h2 className="dashboard__heading">My Profile</h2>
            <p className="dashboard__description">
              Add information about yourself
            </p>
          </DashboardLink>

          <DashboardLink route="/listing">
            <p className="dashboard__icon">Icon</p>
            <h2 className="dashboard__heading">My listings</h2>
            <p className="dashboard__description">
              Add, edit and remove listings.
            </p>
          </DashboardLink>

          <DashboardLink route="/requests">
            <p className="dashboard__icon">Icon</p>
            <h2 className="dashboard__heading">My requests</h2>
            <p className="dashboard__description">
              Check the property requests you have made on.
            </p>
          </DashboardLink>

          <DashboardLink route="/saved-property">
            <p className="dashboard__icon">Icon</p>
            <h2 className="dashboard__heading">My saved property</h2>
            <p className="dashboard__description">
              See the saved property, add more.
            </p>
          </DashboardLink>
        </div>
      </div>
    </>
  );
}

function DashboardLink({ children, route }) {
  return <Link to={route}>{children}</Link>;
}
export default Dashboard;
