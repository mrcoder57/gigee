import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-full overflow-x-hidden top-0 w-full lg:mx-12">
      {children}
    </div>
  );
};

export default Container;
