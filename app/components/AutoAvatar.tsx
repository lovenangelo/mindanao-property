const AutoAvatar = ({ email }: { email: string }) => {
  const getInitial = (email: string) => {
    const name = email.split("@")[0];
    const initials = name.split(".").map((part) => part[0].toUpperCase());
    return initials.join("");
  };

  const getRandomColor = () => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-yellow-500",
      "bg-green-500",
      "bg-indigo-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-teal-500",
      "bg-orange-500",
      "bg-gray-500",
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const initial = getInitial(email);
  const bgColor = getRandomColor();

  return (
    <div
      className={`flex items-center justify-center w-16 h-16 rounded-full ${bgColor} text-white text-2xl font-bold uppercase`}
    >
      {initial}
    </div>
  );
};

export default AutoAvatar;
