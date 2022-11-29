import React from "react";
import Categories from "./Categories";
import Icons from "./Icons";
import IconSet from "./IconSet";
import Loading from "./Loading";

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
        "Bearer dVd6UYbpLJoiRmaegUlPe5wSJ4LaDGNn8S6ZYVg7SuBlIBldXIMuc7VVWCiyn4vl",
    },
  };

  return (
    <>
      {loading && <Loading />}

      {categories && (
        <Categories
          buttonState={buttonState}
          options={options}
          setButtonState={setButtonState}
          setCategories={setCategories}
          data={data}
          setData={setData}
          setLoading={setLoading}
          setIdentifier={setIdentifier}
          setIconSet={setIconSet}
        />
      )}

      {!categories && !showIcons && !loading && (
        <IconSet
          setShowIcons={setShowIcons}
          setCategories={setCategories}
          identifier={identifier}
          iconSet={iconSet}
          setLoading={setLoading}
          options={options}
          setIcons={setIcons}
        />
      )}

      {showIcons && (
        <Icons
          setShowIcons={setShowIcons}
          setCategories={setCategories}
          identifier={identifier}
          icons={icons}
        />
      )}
    </>
  );
}

export default Hero;
