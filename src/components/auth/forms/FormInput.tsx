"use client";
import {
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface TProps extends ComponentPropsWithoutRef<"input"> {
  type: "text" | "password";
  placeholder: string;
  name?: string;
  changeType: boolean;
  rightIcon: ReactNode;
  leftIconIcon: ReactNode;
  errorMessage?: ReactNode;
}

const FormInput: FC<TProps> = ({
  type,
  placeholder,
  name,
  errorMessage,
  changeType,
  onChange,
  rightIcon,
  leftIconIcon,
}) => {
  const [inputType, setInputType] = useState<string>(type);
  const [inputValue, setInputValue] = useState<string>("");

  const leftIconClickHandler = () => {
    if (changeType) {
      if (inputValue != "") {
        if (inputType == "password") {
          setInputType("text");
        } else if (inputType == "text") {
          setInputType("password");
        }
      }
    }
  };

  useEffect(() => {
    if (changeType) {
      if (inputValue == "") setInputType("password");
    }
  }, [inputValue, changeType]);

  return (
    <div className="w-full relative">
      <button className="absolute top-3.5 right-3" type="button">{rightIcon}</button>
      <input
        type={inputType}
        placeholder={placeholder}
        value={inputValue}
        name={name}
        onChange={(event) => {
          setInputValue(event.target.value);
          onChange?.(event);
        }}
        className="w-full outline-0 border-0 bg-lightGray text-gray
        placeholder:text-gray placeholder:text-[15px] text-[15px] p-3 indent-6 rounded-2xl"
      />
      {errorMessage && errorMessage != "" ? (
        <span className="text-red text-xs mr-4 mt-1">{errorMessage}</span>
      ) : (
        <></>
      )}
      <button
        className="absolute top-3.5 left-3 cursor-pointer hover:scale-[1.4] transition-all"
        onClick={leftIconClickHandler}
        type="button"
      >
        {leftIconIcon}
      </button>
    </div>
  );
};

export default FormInput;
