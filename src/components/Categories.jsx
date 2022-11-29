import React from "react";

function Categories({
  buttonState,
  options,
  setButtonState,
  setCategories,
  data,
  setData,
  setLoading,
  setIdentifier,
  setIconSet,
}) {
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
  return (
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
  );
}

export default Categories;
