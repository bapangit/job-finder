import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
const StyledButton = styled.button`
  background-color: #${({ bgCol, dark }) => `${bgCol}${dark && "00"}`};
  border: 1px solid #${({ borderCol }) => borderCol};
  border-radius: 2px;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  ${({ dark, col, borderCol }) =>
    dark
      ? css`
          color: white;
        `
      : css`
          color: ${col};
        `}

  cursor: pointer;
  padding: 4px 12px;
  ${({ disabled }) => {
    if (disabled) {
      return css``;
    } else {
      return css`
        &:hover {
          border-color: #${({ hvrBdrCol }) => hvrBdrCol};
        }
        &:active {
          background-color: #${({ bgCol }) => bgCol}80;
          box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px 0 inset;
          transform: scale(0.98);
        }
      `;
    }
  }}
`;
function Button({ label, type, dark, disabled, ...rest }) {
  const [theme, setTheme] = useState({
    bgCol: "bbbbbb",
    col: "222222",
    borderCol: "999999",
    hvrBdrCol: "666666",
  });

  useEffect(() => {
    switch (type) {
      case "danger":
        setTheme({
          bgCol: "ffe7e7",
          col: "d33a2c",
          borderCol: "fcd4d4",
          hvrBdrCol: "faa4a4",
        });
        break;
      case "caution":
        setTheme({
          bgCol: "ffffe5",
          col: "4c4d00",
          borderCol: "e5e600",
          hvrBdrCol: "b2b300",
        });
        break;
      case "safe":
        setTheme({
          bgCol: "b8d5b4",
          col: "008d32",
          borderCol: "94ba99",
          hvrBdrCol: "5aa95f",
        });
        break;
    }
  }, []);

  return (
    <StyledButton
      disabled={disabled}
      role="button"
      {...theme}
      dark={dark}
      {...rest}
    >
      <span style={{ fontSize: "12px" }}>{label}</span>
    </StyledButton>
  );
}

export default Button;
