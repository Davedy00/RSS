import React from "react";

type Props = {
    onClick?: () => void;
    text: string;
    icon?: React.ReactNode; 
    theme?: string;
    type: "submit" | "button" | "reset";
    isLoading?: boolean;
    disabled?: boolean;
};

const Button = ({ onClick, text, icon, type, isLoading }: Props) => {
    return (
        <button
            type={type}
            className={`w-40 flex justify-center gap-2 cursor-pointer text-gray-900 border py-1 px-2 $ {isLoading ? "opacity-65" : "opacity-none"}`}
            onClick={onClick && onClick}
        >  
            {isLoading ? "Loading..." : text}
            {icon && <span className="ml-6">{icon}</span>}
        </button>
    );
};

export default Button;