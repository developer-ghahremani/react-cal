import React from "react";

type Props = { children: React.ReactNode };

const MainLayout = (props: Props) => {
  return (
    <div className="bg-gray-light min-h-screen">
      <div className="md:max-w-lg lg:max-w-3xl mx-auto">{props.children}</div>
    </div>
  );
};

export default MainLayout;
