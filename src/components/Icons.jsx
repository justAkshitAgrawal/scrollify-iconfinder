import { BiArrowBack } from "react-icons/bi";

function Icons({ setShowIcons, setCategories, identifier, icons }) {
  return (
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
                    return `${tag.charAt(0).toUpperCase() + tag.slice(1)}, `;
                  }
                })}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Icons;
