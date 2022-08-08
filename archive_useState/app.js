import React from "react";
import { UserAge } from "./user-age";
import {UserName} from './UserName';
// import { EggCounter } from "./EggCounter";
// import { SeedCounter } from "./SeedCounter";

export const App = () => {
  return (
    <div>
      <h1>App</h1>
      <UserAge />
      <UserName />
    </div>
  );
};
