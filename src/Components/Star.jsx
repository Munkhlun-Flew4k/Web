import star from "../star.png";

import React from "react";

const styles = {
  stardiv: {
    display: "flex",
    gap: 10,
  },
  stars: {
    width: 17.11,
    height: 16.36,
  },
};

export const Stars = () => {
  return (
    <div style={styles.stardiv}>
      <img style={styles.stars} src={star} alt="" />
    </div>
  );
};
