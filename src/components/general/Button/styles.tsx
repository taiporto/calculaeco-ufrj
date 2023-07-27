import { styled } from "../../../../stitches.config";

export const Button = styled("button", {
  width: "100%",
  fontSize: "1rem",
  padding: "16px",
  borderRadius: "10px",
  color: "$neutral0",
  backgroundColor: "$neutral100",
  border: "none",
  transition: "all .2s",

  "&:hover": {
    backgroundColor: "$neutral80",
    cursor: "pointer",
  },
});
