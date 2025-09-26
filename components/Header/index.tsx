import React from "react";

type HeaderProps = {
    name: string;
    buttonComponent?: React.ReactNode;
    isSmallText?: boolean;
    description?: string;
    color?: string;
}

const Header = ({ name, buttonComponent, description, isSmallText = false, color = "text-sky-500" }: HeaderProps) => {
  return (
    <div className="flex flex-col py-6 w-full justify-between">
        {buttonComponent}
        <h1 className={`${isSmallText ? "text-md " : "text-2xl"} ${color} font-semibold tracking-wide`}>
            {name}
        </h1>
        <p className={`${isSmallText ? "text-[9px]" : "text-[10px]"} font-light text-gray-600`}>{description}</p>
    </div>
  )
}

export default Header;