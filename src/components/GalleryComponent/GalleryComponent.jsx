import { useState, useEffect } from "react";
import { Galleria } from "primereact/galleria";
import { Button } from "primereact/button";
import { PhotoService } from "../cardComponent/EploreCard/service/PhotoService";
import "./GalleryComponent.css";

export default function GalleryComponent() {
  const [images, setImages] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    PhotoService.getImages().then((data) => setImages(data));
  }, []);

  const next = () => {
    setActiveIndex((prevState) =>
      prevState === images.length - 1 ? 0 : prevState + 1
    );
  };

  const prev = () => {
    setActiveIndex((prevState) =>
      prevState === 0 ? images.length - 1 : prevState - 1
    );
  };

  const itemTemplate = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{ display: "block" }}
      />
    );
  };

  return (
    <div className="cardgallary">
      <div className="imgcard">
        {/* use context menu to pass the data to the gallery component */}
        <Galleria
          value={images}
          activeIndex={activeIndex}
          onItemChange={(e) => setActiveIndex(e.index)}
          numVisible={8}
          circular
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          style={{ maxWidth: "640px" }}
        />
      </div>
      {/* <div className="imgcard">
        <Galleria
          value={images}
          activeIndex={activeIndex}
          onItemChange={(e) => setActiveIndex(e.index)}
          numVisible={5}
          circular
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          style={{ maxWidth: "640px" }}
          showThumbnails={false}
        />
      </div> */}
      <div className="flex justify-content-end mb-3">
        <Button
          icon="pi pi-angle-left"
          rounded
          text
          raised
          severity="secondary"
          aria-label="pi-angle-left"
          onClick={prev}
        />
        <Button
          icon="pi pi-angle-right"
          rounded
          text
          raised
          severity="secondary"
          aria-label="pi-angle-right"
          onClick={next}
        />
      </div>
    </div>
  );
}
