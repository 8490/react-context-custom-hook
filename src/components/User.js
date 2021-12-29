import React from "react";

const User = ({ user }) => {
  // user bilgisini parent'tan props ile aldık
  const { id, login, avatar_url, width } = user;

  // Ancak,  changeImageWidth fonksiyonunu useUserContext yardımıyla Context'ten okuduk
  const { changeImageWidth } = useUserContext();

  return <div></div>;
};

export default User;
