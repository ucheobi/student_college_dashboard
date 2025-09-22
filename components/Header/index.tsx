import React from "react";

type HeaderProps = {
    name: string;
    buttonComponent?: React.ReactNode;
    isSmallText?: boolean;
    description?: string;
    color?: string;
}

const Header = ({ name, buttonComponent, description, isSmallText = false, color = "text-cyan-500" }: HeaderProps) => {
  return (
    <div className="flex flex-col py-6 w-full justify-between">
        {buttonComponent}
        <h1 className={`${isSmallText ? "text-sm" : "text-2xl"} ${color} font-bold`}>
            {name}
        </h1>
        <p className="text-[10px] text-gray-500">{description}</p>
    </div>
  )
}

export default Header;