import React from "react";

type Props = { children: React.ReactNode };

const MainLayout = (props: Props) => {
  return (
    <div className="font-iransans">
      <div className="lg:max-w-4xl mx-auto">{props.children}</div>
    </div>
  );
};

export default MainLayout;
