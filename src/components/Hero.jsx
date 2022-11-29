import React from "react";
import { BiArrowBack } from "react-icons/bi";

function Hero() {
  const [data, setData] = React.useState(null);
  const [categories, setCategories] = React.useState(true);
  const [identifier, setIdentifier] = React.useState([]);
  const [iconSet, setIconSet] = React.useState([]);
  const [showIcons, setShowIcons] = React.useState(false);
  const [icons, setIcons] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [buttonState, setButtonState] = React.useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer bI2UMoUYn5LZPufmUx77YCRDZ92ceaaSupZpkVz7Iwlj5nP7tMq2yBDLHmGrWsmb",
    },
  };

  const fetchClick = () => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.iconfinder.com/v4/categories?count=100",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setButtonState(false);
        setData(response);
      })
      .catch((err) => console.error(err));
  };

  const handleClick = (identifier) => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.iconfinder.com/v4/categories/${identifier}/iconsets?count=100`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setIdentifier(identifier);
        setIconSet(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const handleClickIcons = (id) => {
    console.log(id);
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.iconfinder.com/v4/iconsets/${id}/icons?count=100`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setIcons(response);
        setShowIcons(true);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      {loading ? (
        <div className="min-h-screen p-5 text-white bg-gray-800">
          <h1 className="pt-5 pb-10 text-4xl text-center">
            Scrollify Iconfinder
          </h1>
          <hr />
          <div role="status" className="flex items-center justify-center pt-20">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        ""
      )}

      {categories && (
        <div className="min-h-screen p-5 text-white bg-gray-800 pb-14 ">
          <div>
            <h1 className="pt-5 pb-10 text-4xl text-center">
              Scrollify Iconfinder
            </h1>
            <hr />
          </div>
          {buttonState && (
            <div className="flex items-center justify-center pt-20">
              <button
                className="px-4 py-2 text-xl rounded-md bg-black/20"
                onClick={fetchClick}
              >
                Display Categories
              </button>
            </div>
          )}

          <div className="grid grid-cols-5 px-10 pt-24 text-center gap-y-20 gap-x-10">
            {data &&
              data.categories?.map((category) => (
                <div
                  key={category.identifier}
                  className="self-center p-4 text-xl text-gray-400 rounded-md cursor-pointer hover:bg-black/20 hover:text-white hover:transition-all hover:scale-110 hover:shadow-lg"
                  onClick={() => {
                    setCategories(false);
                    setLoading(true);
                    handleClick(category.identifier);
                  }}
                >
                  {category.name}
                </div>
              ))}
          </div>
        </div>
      )}

      {!categories && !showIcons && !loading && (
        <div className="min-h-screen p-5 text-white bg-gray-800 pb-14 ">
          <div
            className="fixed pt-1 pl-2"
            onClick={() => {
              setShowIcons(false);
              setCategories(true);
            }}
          >
            <BiArrowBack className="w-10 h-10 text-white cursor-pointer " />
          </div>
          <div className="flex items-center justify-center pb-10">
            <h1 className="text-4xl ">Scrollify Iconfinder</h1>
          </div>
          <hr />
          <div className="grid grid-cols-5 px-10 pt-24 text-center gap-y-20 gap-x-10">
            {identifier &&
              iconSet.iconsets?.map((category) => (
                <div
                  key={category.identifier}
                  className="self-center p-4 text-xl text-gray-400 rounded-md cursor-pointer hover:bg-black/20 hover:text-white hover:transition-all hover:scale-110 hover:shadow-lg"
                  onClick={() => {
                    setLoading(true);
                    handleClickIcons(category.iconset_id);
                  }}
                >
                  {category.name}
                  <br />
                  <span className="text-xs ">({category.identifier})</span>
                </div>
              ))}
          </div>
        </div>
      )}

      {showIcons && (
        <div className="min-h-screen p-5 text-white bg-gray-800 pb-14 ">
          <div
            className="fixed pt-1 pl-2"
            onClick={() => {
              setShowIcons(false);
              setCategories(false);
            }}
          >
            <BiArrowBack className="w-10 h-10 text-white cursor-pointer " />
          </div>
          <div className="flex items-center justify-center pb-10">
            <h1 className="text-4xl ">Scrollify Iconfinder</h1>
          </div>
          <hr />
          <h1 className="pt-4 text-xl text-center">
            {identifier.charAt(0).toUpperCase() + identifier.slice(1)}
          </h1>
          <div className="grid grid-cols-5 px-10 pt-20 text-center gap-y-20 gap-x-10">
            {identifier &&
              icons.icons?.map((category) => (
                <div
                  key={category.icon_id}
                  className="flex flex-col items-center p-4 text-xl text-gray-400 rounded-md cursor-pointer hover:bg-black/20 hover:shadow-xl justify-items-center hover:text-white hover:transition-all hover:scale-110"
                >
                  <img
                    src={category.raster_sizes[6].formats[0].preview_url}
                    alt=""
                  />
                  <h1 className="pt-3 text-sm">ID: {category.icon_id}</h1>
                  <h1 className="text-sm">
                    Premium: {category.is_premium ? "Yes" : "No"}
                  </h1>
                  <h1 className="text-xs">
                    Tags:{" "}
                    {category.tags.map((tag, i, row) => {
                      if (i + 1 === row.length) {
                        return `${tag.charAt(0).toUpperCase() + tag.slice(1)}`;
                      } else {
                        return `${
                          tag.charAt(0).toUpperCase() + tag.slice(1)
                        }, `;
                      }
                    })}
                  </h1>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
