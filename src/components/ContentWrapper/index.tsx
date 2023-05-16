import React from "react";

import * as C from "./styles";

interface IContentWrapper {
  children: React.ReactNode;
}

export const ContentWrapper: React.FC<IContentWrapper> = ({ children }) => {
  return <C.Container className="contentWrapper">{children}</C.Container>;
};
