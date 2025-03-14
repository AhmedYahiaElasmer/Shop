import { useState, useEffect } from "react";

import { Galleria } from "primereact/galleria";

import { PhotoService } from "./service/PhotoService";
import "./ExploreCard.css";
import { Rating } from "primereact/rating";
import { Image } from "primereact/image";
function ExploreCard() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    PhotoService.getImages().then((data) => setImages(data));
  }, []);

  const itemTemplate = (item) => {
    return (
      <div
        className=" flex flex-column justify-content-center align-items-center "
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
            display: "block",
          }}
          src={item.itemImageSrc}
          alt={item.alt}
        />
      </div>
    );
  };
  const thumbnailTemplate = (item) => {
    return (
      <div
        className=" flex flex-column justify-content-center align-items-center "
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
            display: "block",
          }}
          src={item.itemImageSrc}
          alt={item.alt}
        />
      </div>
    );
  };
  return (
    <div>
      <div className="card mb-0 ">
        <div className="flex flex-column align-items-start  flex-wrap  mb-5 ">
          <Galleria
            value={images}
            numVisible={5}
            style={{ maxWidth: "640px" }}
            circular
            showItemNavigators
            showItemNavigatorsOnHover
            showIndicators
            showThumbnails={false}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
          />
          <div className="flex cursor-pointer justify-content-between">
            <div>
              <a className="no-underline  active:none" href="">
                <div className="flex justify-content-between align-items-center">
                  <div>
                    <div
                      className=" flex align-items-center overflow-hidden m-1 "
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
                  <div className="flex align-items-center gap-5 ">
                    <div>
                      <h3 className="text text-900  font-bold m-0 ">Comfrt</h3>
                    </div>
                    <div className="flex align-items-center  ">
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
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreCard;
