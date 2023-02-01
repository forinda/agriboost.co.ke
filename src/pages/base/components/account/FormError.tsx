import React from "react";

type FormErrorProps = {
  error: string;
  toggleDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  resetError: React.Dispatch<React.SetStateAction<string>>;
};

const FormError: React.FunctionComponent<FormErrorProps> = ({
  resetError,
  error,
  toggleDisplay,
}) => {
  return (
    <button
      className="block capitalize w-full bg-red-100 border text-center border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
      onClick={(e) => {
        toggleDisplay(false);
        resetError("");
      }}
    >
      <strong className="font-bold block text-sm">Error!</strong>
      <span className="block sm:inline text-sm">{error}</span>
    </button>
  );
};

export default FormError;
