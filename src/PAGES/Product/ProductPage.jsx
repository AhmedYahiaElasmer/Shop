import BrandComponent from "../../components/brandComponent/BrandComponent";
import GalleryComponent from "../../components/GalleryComponent/GalleryComponent";
import { Skeleton } from "primereact/skeleton";

function ProductPage() {
  return (
    <>
      <div>
        <div className="">
          <div className="flex">
            <div>
              <GalleryComponent />
              <div>
                <div className="border-round border-1 surface-border p-4 surface-card">
                  <div className="flex mb-3">
                    <Skeleton
                      shape="circle"
                      size="4rem"
                      className="mr-2"
                    ></Skeleton>
                    <div>
                      <Skeleton width="10rem" className="mb-2"></Skeleton>
                      <Skeleton width="5rem" className="mb-2"></Skeleton>
                      <Skeleton height=".5rem"></Skeleton>
                    </div>
                  </div>
                  <Skeleton width="100%" height="150px"></Skeleton>
                  <div className="flex justify-content-between mt-3">
                    <Skeleton width="4rem" height="2rem"></Skeleton>
                    <Skeleton width="4rem" height="2rem"></Skeleton>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-column ">
              <div className="w-full md:w-6 p-3">
                <h5>Under construction</h5>
                <Skeleton className="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton
                  width="10rem"
                  className="mb-2"
                  borderRadius="16px"
                ></Skeleton>
                <Skeleton
                  width="5rem"
                  borderRadius="16px"
                  className="mb-2"
                ></Skeleton>
                <Skeleton
                  height="2rem"
                  className="mb-2"
                  borderRadius="16px"
                ></Skeleton>
                <Skeleton
                  width="10rem"
                  height="4rem"
                  borderRadius="16px"
                ></Skeleton>
                <div className="flex">
                  <Skeleton
                    shape="circle"
                    size="4rem"
                    className="mr-2"
                  ></Skeleton>
                  <Skeleton
                    shape="circle"
                    size="4rem"
                    className="mr-2"
                  ></Skeleton>
                  <Skeleton
                    shape="circle"
                    size="4rem"
                    className="mr-2"
                  ></Skeleton>
                  <Skeleton
                    shape="circle"
                    size="4rem"
                    className="mr-2"
                  ></Skeleton>
                  <Skeleton
                    shape="circle"
                    size="4rem"
                    className="mr-2"
                  ></Skeleton>
                </div>
              </div>
              <div className="w-full md:w-6 p-3">
                <h5>Under construction</h5>
                <Skeleton className="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton
                  width="10rem"
                  className="mb-2"
                  borderRadius="16px"
                ></Skeleton>
                <Skeleton
                  width="5rem"
                  borderRadius="16px"
                  className="mb-2"
                ></Skeleton>
                <Skeleton
                  height="2rem"
                  className="mb-2"
                  borderRadius="16px"
                ></Skeleton>
                <Skeleton
                  width="10rem"
                  height="4rem"
                  borderRadius="16px"
                ></Skeleton>
                <div className="flex">
                  <Skeleton
                    shape="circle"
                    size="4rem"
                    className="mr-2"
                  ></Skeleton>
                  <Skeleton
                    shape="circle"
                    size="4rem"
                    className="mr-2"
                  ></Skeleton>
                  <Skeleton
                    shape="circle"
                    size="4rem"
                    className="mr-2"
                  ></Skeleton>
                  <Skeleton
                    shape="circle"
                    size="4rem"
                    className="mr-2"
                  ></Skeleton>
                  <Skeleton
                    shape="circle"
                    size="4rem"
                    className="mr-2"
                  ></Skeleton>
                </div>
              </div>
              <div className="w-full md:w-6 p-3">
                <h5>Under construction</h5>
                <Skeleton className="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton
                  width="10rem"
                  className="mb-2"
                  borderRadius="16px"
                ></Skeleton>
                <Skeleton
                  width="5rem"
                  borderRadius="16px"
                  className="mb-2"
                ></Skeleton>
                <Skeleton
                  height="2rem"
                  className="mb-2"
                  borderRadius="16px"
                ></Skeleton>
                <Skeleton
                  width="10rem"
                  height="4rem"
                  borderRadius="16px"
                ></Skeleton>
                <div className="flex">
                  <Skeleton
                    shape="circle"
                    size="4rem"
                    className="mr-2"
                  ></Skeleton>
                  <Skeleton
                    shape="circle"
                    size="4rem"
                    className="mr-2"
                  ></Skeleton>
                  <Skeleton
                    shape="circle"
                    size="4rem"
                    className="mr-2"
                  ></Skeleton>
                  <Skeleton
                    shape="circle"
                    size="4rem"
                    className="mr-2"
                  ></Skeleton>
                  <Skeleton
                    shape="circle"
                    size="4rem"
                    className="mr-2"
                  ></Skeleton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <BrandComponent IsFollowButton={false} />
          <BrandComponent IsFollowButton={false} />
          <BrandComponent IsFollowButton={false} />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
