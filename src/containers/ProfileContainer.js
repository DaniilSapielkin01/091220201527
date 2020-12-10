import React from "react";

import data from "../data/data.json";
import { Profile } from "../components/Profile/Profile";

export const ProfileContainer = () => {
  return (
    <>
      <Profile posts={data} />
    </>
  );
};
