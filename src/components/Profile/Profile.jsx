import React from "react";

import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfilePosts } from "./ProfilePosts/ProfilePosts";

export const Profile = ({ posts }) => {
  return (
    <div>
      <ProfileInfo />
      <ProfilePosts posts={posts} />
    </div>
  );
};
