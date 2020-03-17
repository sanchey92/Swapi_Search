import React, {FC, ReactNode} from "react";

interface IPops {
  children: ReactNode
}

const CharacterNavbar: FC<IPops> = ({children}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Star Wars Characters</span>
      {children}
    </nav>
  )
};

export default CharacterNavbar;
