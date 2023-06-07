import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) =>
    props.boderColor ? `1px solid ${props.boderColor}` : "none"};
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.bgColor};
  font-weight: 500;
  line-height: 21px;
  color: ${(props) => props.textColor};
  color: ${(props) => props.fontSize};
  cursor: pointer;
  img {
    margin-right: 8px;
  }
`;

export const ScrollToTopButton = ({
  label,
  width,
  height,
  textColor,
  bgColor,
  boderColor,
  percent,
  fontSize,
  borderRadius,
  children,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <StyledButton
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      percent={percent}
      width={width}
      height={height}
      textColor={textColor}
      bgColor={bgColor}
      boderColor={boderColor}
      fontSize={fontSize}
      borderRadius={borderRadius}
      {...rest}
    >
      {label ? label : children}
    </StyledButton>
  );
};
