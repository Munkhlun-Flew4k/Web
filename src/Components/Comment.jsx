import React from "react";
import { Profile3 } from "./Profile3";

const styles = {
  somediv: {
    width: "36vw",
    height: "auto",
    display: "flex",
  },
};
export const Comment = () => {
  return (
    <div style={styles.somediv}>
      <Profile3 name="Flew4k" date="13nd February,2008" />
    </div>
  );
};
