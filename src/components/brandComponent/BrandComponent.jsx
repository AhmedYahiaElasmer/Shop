import { Rating } from "primereact/rating";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import "./BrandComponent.css";
import HomeCard from "../cardComponent/HomeCard/HomeCard.jsx";
function BrandComponent() {
  return (
    <div className="flex flex-column ">
      <div>
        <div className="flex cursor-pointer justify-content-between">
          <div className="flex ">
            <div>
              <a className="no-underline  active:none" href="">
                <div className="flex align-items-center">
                  <div>
                    <div
                      className=" flex items-center overflow-hidden m-1 "
                      style={{
                        borderRadius: "12px",
                        backgroundColor: "#F5F5F5",
                      }}
                    >
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0569/4029/8284/files/D_1.png?v=1655843709&format=webp&width=88"
                        alt="Image"
                        width="45"
                      />

                      <div className="absolute inset-0 bg-bg-overlay-inverse-04"></div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h3 className="text text-900  font-bold m-0 ">Comfrt</h3>
                    </div>
                    <div className="flex">
                      <span className="ml-1 text-sm font-bold text-900">
                        4.8
                      </span>
                      <Rating
                        className="m-1"
                        readOnly
                        value={1}
                        cancel={false}
                        stars={1}
                        style={{ color: "black" }}
                      />
                      <span className="ml-1 text-sm font-bold text-900">
                        (33.5K)
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="">
            <Button
              label="Follow"
              severity="contrast"
              raised
              className="ml-2"
            />
            <Button
              icon="pi pi-ellipsis-h text text-900"
              rounded
              text
              aria-label="setting"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </div>
  );
}

export default BrandComponent;
