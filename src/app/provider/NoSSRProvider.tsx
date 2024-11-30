import React from "react";
import dynamic from "next/dynamic";
interface NoSSRProviderProps {
  children: React.ReactNode;
}
const NoSSRProvider = ({ children }: NoSSRProviderProps) => (
  <React.Fragment>{children}</React.Fragment>
);
export default dynamic(() => Promise.resolve(NoSSRProvider), {
  ssr: false,
});
