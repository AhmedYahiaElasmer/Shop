import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { Toolbar } from "primereact/toolbar";
import Logo from "../../../Common/Logo.jsx";
import { NavLink } from "react-router";
function Navbar() {
  const start = (
    <nav
      className="flex justify-content-between align-items-center"
      style={{ width: "250px" }}
    >
      <div>
        <Logo />
      </div>
      <div>
        <NavLink
          to="/"
          className="no-underline  font-bold "
          style={({ isActive }) => ({
            color: isActive ? "black" : "#848484",
          })}
        >
          <p>Home</p>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/Explore"
          className="no-underline  font-bold "
          style={({ isActive }) => ({
            color: isActive ? "black" : "#848484",
          })}
        >
          <p>Explore</p>
        </NavLink>
      </div>
    </nav>
  );
  const end = (
    <div
      className="flex justify-content-between align-items-center gap-2 "
      style={{ width: "150px" }}
    >
      <div>
        <i className="pi pi-heart" style={{ fontSize: "1.5rem" }}></i>
      </div>
      <div>
        <i className="pi pi-shopping-cart" style={{ fontSize: "1.5rem" }}></i>
      </div>
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
      />
    </div>
  );
  const center = (
    <IconField iconPosition="left" style={{ width: "500px" }}>
      <InputIcon className="pi pi-search"> </InputIcon>
      <InputText
        placeholder="Search"
        style={{
          borderRadius: "28px",
          backgroundColor: "#f2f4f5",
          width: "100%",
        }}
      />
    </IconField>
  );
  return (
    <>
      <div className="card">
        <Toolbar
          start={start}
          center={center}
          end={end}
          style={{ backgroundColor: "white", border: "0", padding: "16px" }}
        />
      </div>
    </>
  );
}

export default Navbar;
