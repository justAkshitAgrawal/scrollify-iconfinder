import { BiArrowBack } from "react-icons/bi";

function IconSet({
  setShowIcons,
  setCategories,
  identifier,
  iconSet,
  setLoading,
  options,
  setIcons,
}) {
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
    <div>
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
    </div>
  );
}

export default IconSet;
