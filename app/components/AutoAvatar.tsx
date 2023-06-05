const AutoAvatar = ({ email }: { email: string }) => {
  const getInitial = (email: string) => {
    const name = email.split("@")[0];
    const initials = name.split(".").map((part) => part[0].toUpperCase());
    return initials.join("");
  };

  const initial = getInitial(email);

  return (
    <div
      className={
        "flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white text-lg font-bold uppercase shadow-md"
      }
    >
      {initial}
    </div>
  );
};

export default AutoAvatar;
