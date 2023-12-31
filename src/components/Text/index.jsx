import React from "react";

const sizeClasses = {
  txtInterBold30: "font-bold font-inter",
  txtNunitoBold15: "font-bold font-nunito",
  txtNunitoSemiBold14: "font-nunito font-semibold",
  txtInterMedium20: "font-inter font-medium",
  txtInterBold25: "font-bold font-inter",
  txtNunitoRegular12: "font-normal font-nunito",
  txtInterBold14: "font-bold font-inter",
  txtInterBold15: "font-bold font-inter",
  txtInterMedium10: "font-inter font-medium",
  txtInterRegular14: "font-inter font-normal",
  txtInterMedium15: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
