import React from "react";
interface LogoProps {
  height: number;
  width: number;
}

const Logo = ({ height, width }: LogoProps) => {
  return (
    <svg width="66" height="81" viewBox="0 0 66 81" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M54.3148 9.01137C56.2686 6.54011 54.4273 3.00011 51.1798 3.00011H25.9943C25.3123 2.99513 24.6405 3.16568 24.0436 3.49536C23.4466 3.82505 22.9444 4.30277 22.5855 4.88261L3.52759 36.5927C2.02381 39.0902 3.91385 42.2064 6.93266 42.2064H19.7917L7.67892 72.4502C5.92764 76.2752 10.6602 79.774 13.8403 77.0065L63 30.4914H37.3158L54.3148 9.01137Z"
        fill="white"
        width={width}
        height={height}
        stroke="#1867FF"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Logo;
