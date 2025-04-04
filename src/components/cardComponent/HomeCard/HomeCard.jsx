import { useState } from "react";
import { Rating } from "primereact/rating";
import "./HomeCard.css";
import { Link } from "react-router";
function HomeCard() {
  const [value, setValue] = useState(null);
  return (
    <>
      <div
        className="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0 "
        style={{ width: "11rem" }}
      >
        <Link className="p-2 no-underline  active:none" to="/product/1">
          <div className="relative">
            <div className="absolute left-space-12 top-space-12 z-1">
              <div
                className="flex flex-row align-items-center justify-content-center gap-space-2 rounded-radius-4 p-space-4  surface-900"
                data-testid="saleFilled"
              >
                <p className="p-0 m-0  text-badgeBold text-50 ">50% off</p>
              </div>
            </div>
            <div
              className="relative flex flex-column justify-content-center align-items-center overflow-hidden "
              style={{
                aspectRatio: "1/1",
                width: "172px",
                height: "172px",
              }}
            >
              <img
                style={{
                  objectFit: "cover",
                  borderRadius: "16px",
                  width: "inherit",
                  height: "inherit",
                }}
                src="https://cdn.shopify.com/s/files/1/0293/9277/files/12-04-23Studio7_CB_AL_09-24-57_10_22024053_White_P_0304_CM.jpg?v=17019"
              />
            </div>

            <button
              type="text"
              className="p-ripple p-link w-2rem h-2rem  border-circle shadow-2 inline-flex align-items-center justify-content-center absolute right-space-12 top-space-12 z-1  transition-duration-300 surface-400 hover:surface-500"
            >
              <i
                className="pi pi pi-times text- text-500"
                style={{ color: "var(--primary-color-text) !important" }}
              ></i>
            </button>
            <button
              type="text"
              className="p-ripple p-link w-2rem h-2rem surface-400 hover:surface-500 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute right-space-12 bottom-space-12 z-1  transition-colors transition-duration-300"
            >
              <i
                className="pi pi-heart text text-500 --surface-400"
                style={{ color: "var(--primary-color-text) !important" }}
              ></i>
            </button>
          </div>
          <p className="flex flex-column align-items-start justify-content-between mt-3 mb-2 ">
            <div className="text text-900 font-bold ">
              Kona Cotton -<span className="">White 10 Yard Bolt</span>
            </div>
            <div
              className="card flex justify-content-center"
              style={{ width: "8rem" }}
            >
              <Rating
                readOnly
                value={value}
                onChange={(e) => setValue(e.value)}
                cancel={false}
              />
              <span className="ml-1 text text-900">(99)</span>
            </div>
            <div className="text text-900  font-bold ">
              $14 <span className="text text-700 line-through ">$150.00</span>
            </div>
          </p>
        </Link>
      </div>
    </>
  );
}

export default HomeCard;
