import { styled } from "../../../../../stitches.config";

export const Fieldset = styled("fieldset", {
  all: "unset",
  display: "flex",
  gap: 20,
  alignItems: "center",
});

export const Label = styled("label", {
  fontSize: 13,
  color: "$orange80",
  width: 75,
});

export const Input = styled("input", {
  all: "unset",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "1",
  borderRadius: 8,
  padding: "0 10px",
  fontSize: 16,
  lineHeight: 1,
  color: "$neutral100",
  boxShadow: `0 0 0 1px ${"$neutral20"}`,
  background: "$neutral0",
  height: 36,

  "&:focus": { boxShadow: `0 0 0 2px ${"$orange50"}` },
});

export const Text = styled("p", {
  margin: 0,
  color: "$orange30",
  fontSize: 15,
  lineHeight: "19px",
  fontWeight: 500,
});
