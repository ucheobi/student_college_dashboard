import React from "react";

type HeaderProps = {
    name: string;
    buttonComponent?: React.ReactNode;
    isSmallText?: boolean;
    description?: string
}

const Header = ({ name, buttonComponent, description }: HeaderProps) => {

  return (
    <div className="mb-5 flex flex-col w-full justify-between">
        {buttonComponent}
        <h1 className={`text-lg text-blue-500 font-bold dark:text-white`}>
            {name}
        </h1>
        <p className="text-[8px] text-gray-500">{description}</p>
    </div>
  )
}

export default Header;