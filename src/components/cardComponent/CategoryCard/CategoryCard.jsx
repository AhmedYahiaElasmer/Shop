function CategoryCard() {
  return (
    <>
      <div className="p-1">
        <a className="pb-0 no-underline  active:none" href="#">
          <div className="relative">
            <div
              className="relative flex flex-column justify-content-center align-items-center overflow-hidden "
              style={{
                aspectRatio: "1/1",
                width: "265px",
                height: "110px",
              }}
            >
              <div className="absolute z-2 flex justify-content-center align-items-center ">
                <p className="text-50 font-bold ">Women</p>
              </div>
              <img
                style={{
                  objectFit: "cover",
                  borderRadius: "16px",
                  width: "inherit",
                  height: "inherit",
                }}
                src="https://cdn.shopify.com/shop-assets/static_uploads/shop-categories/1_women.png?format=webp"
              />
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default CategoryCard;
