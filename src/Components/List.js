import React, { useState, useEffect } from "react";
import MapList from "./MapList";
import Loader from "../Assets/Loader";
const List = ({ data, isLoading, child, filter }) => {
  const [elRef, setElRef] = useState([]);

  useEffect(() => {
    const ref = Array(33)
      .fill()
      .map((_, i) => elRef[i] || React.createRef());
    setElRef(ref);
  }, [data]);

  return (
    <div>
      <MapList filter={filter} />
      <div className="" style={{ height: "75vh", overflowY: "hidden" }}>
        {isLoading ? (
          <Loader />
        ) : (
          <div
            className="ps-4 pe-4 p-2 pt-3"
            style={{ maxWidth: "45rem", height: "100%", overflowY: "scroll",backgroundColor:'black' }}
          >
            {data?.map((el, index) => {
              const photo = el.photo ? el.photo : "";
              const img = photo.images ? photo.images : "";
              const newaddress = el.address ? el.address.split(",") : null;

              if (!el.name) {
                return null;
              }

              return (
                <div
                  key={index}
                  className="card mb-3   shadow"
                  style={{ width: "26rem" }}
                  ref={elRef[index]}
                >
                  <Detail
                    img={img}
                    newaddress={newaddress}
                    el={el}
                    refProp={elRef[index]}
                    index={index}
                    child={child}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const Detail = ({ el, img, newaddress, child, refProp, index }) => {
  if (index == Number(child)) {
    refProp?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <div
      className={`d-flex`}
      style={{
        borderBottom: index == Number(child) ? "4px  solid #4285F4" : null,
      }}
    >
      <div>
        <div
          style={{
            width: "170px",
            height: "100%",
            backgroundImage: `url(${
              img.medium ? img.medium.url : img.small.url
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="  ">
        <div className="card-body p-2 ">
          <p className=" m-0" style={{ fontWeight: "500", fontSize: "15px" }}>
            {typeof el.name === "string" ? el.name.slice(0, 30) : ""}
          </p>
          <p className="card-text fs-8 mt-1 m-0 ">
            {newaddress ? newaddress[0] : el.ranking}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            
            <a
              href={el.website}
              target="_blank"
              className="card-text fs-8 mt-1 m-0 "
            >
            <h4>Website</h4>
            </a>
          </div>
          <div className="row align-items-center mt-1  m-0 ">
            <span className="d-flex fs-7 gap-1  col-3 justify-content-center">
              <p className="m-0 p-0">
                {" "}
                <Location />
              </p>
              <p className="m-0 p-0 text-danger">
                {Math.floor(
                  el.distance
                    ? el.distance
                    : el.distance_string
                    ? el.distance_string
                    : 0
                ) < 1
                  ? 1
                  : Math.floor(
                      el.distance
                        ? el.distance
                        : el.distance_string
                        ? el.distance_string
                        : 0
                    )}
                km
              </p>
            </span>
            <span className="d-flex fs-7  gap-1  align-items-center col-2 justify-content-start">
              <p className="m-0 p-0">⭐</p>

              <p className="m-0 p-0  text-danger">
                {Math.floor(el.hotel_class ? el.hotel_class : el.rating)}
              </p>
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

const Location = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="gray"
      className="bi bi-geo-alt-fill"
      viewBox="0 0 16 16"
    >
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );
};

const Moeny = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="gray"
      className="bi bi-currency-exchange"
      viewBox="0 0 16 16"
    >
      <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z" />
    </svg>
  );
};
const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="orange"
      className="bi bi-star-fill"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );
};