const Button = ({
  fullWidth,
  iconURL,
  label,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading none rounded-full ${backgroundColor} ? ${textColor} ${borderColor} ${backgroundColor} : bg-coral-red text-white border-coral-red ${
        fullWidth && "w-full"
      }}`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="icons" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
