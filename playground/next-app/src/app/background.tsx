import type { FC } from "react";

const Background: FC = () => {
  return (
    <>
      <div className="fixed -right-52 -top-20 -z-40 h-[600px] w-[600px] rounded-full bg-gradient-to-b from-[rgba(111,66,193,0.65)] blur-3xl" />
      <div className="fixed -bottom-10 -left-20 -z-40 h-[350px] w-[350px] rounded-full bg-gradient-to-t from-[rgba(117,149,255,0.3)] blur-3xl" />
      <div className="acme-background" />
    </>
  );
};

export default Background;
