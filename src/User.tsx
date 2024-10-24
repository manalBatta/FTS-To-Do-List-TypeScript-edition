import { useState } from "react";

type UserProp = {
  Uname: string;
  age: number;
};

type Admin = {
  email: string;
};
const User = ({ Uname, age }: UserProp): React.JSX.Element => {
  const [user, setUser] = useState<Admin | null>(null);
  console.log(Uname);
  console.log(age);
  return <div>{age}</div>;
};

export default User;
