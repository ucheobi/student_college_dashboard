import React from "react";

type HeaderProps = {
    name: string;
    buttonComponent?: React.ReactNode;
    isSmallText?: boolean;
    description?: string
}

const Header = ({ name, buttonComponent, description, isSmallText = false }: HeaderProps) => {

  return (
    <div className="flex flex-col py-6 w-full justify-between">
        {buttonComponent}
        <h1 className={`${isSmallText ? "text-lg" : "text-2xl"} text-blue-500 font-bold dark:text-white`}>
            {name}
        </h1>
        <p className="text-[10px] text-gray-500">{description}</p>
    </div>
  )
}

export default Header;