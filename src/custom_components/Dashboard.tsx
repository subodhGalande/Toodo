import DashboardNavbar from "./DashboardNavbar";

const Dashboard = () => {
  const emojis = [
    "😄",
    "😀",
    "😊",
    "😉",
    "😍",
    "😘",
    "😚",
    "😗",
    "😙",
    "😜",
    "😝",
    "😛",
    "😳",
    "😁",
    "🐢",
    "🐛",
    "🐝",
    "🐜",
    "🐞",
    "🐌",
    "🐙",
    "🐚",
    "🐠",
    "🐟",
    "🐬",
    "🐳",
    "🐋",
    "🐄",
    "🐏",
    "🐀",
    "🐃",
    "🐅",
    "🐇",
    "🐉",
    "🐎",
    "🐐",
    "🐓",
    "🐕",
    "🐖",
    "🐁",
    "🐂",
    "🐲",
    "🐡",
    "🐊",
    "🐫",
    "🐪",
    "🐆",
    "🐈",
    "🐩",
    "🐾",
    "💐",
    "🌸",
    "🌷",
    "🍀",
    "🌹",
    "🌻",
    "🌺",
    "🍁",
    "🍃",
    "🍂",
    "🌿",
    "🌾",
    "🍄",
    "🌵",
    "🌴",
    "🌲",
    "🌳",
    "🌰",
    "🌱",
    "🌼",
  ];

  return (
    <>
      <DashboardNavbar />
      <div className="py-10 px-6">
        <span className="float-left">
          <h1 className=" pr-4 text-gray-300 text-5xl align-baseline font-light ">
            Welcome
          </h1>
        </span>{" "}
        <span>
          <h1 className=" text-gray-300 text-5xl align-baseline font-extrabold">
            {localStorage.getItem("username")}{" "}
            {emojis[Math.floor(Math.random() * emojis.length)]}
          </h1>
        </span>
        <div className=" ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          necessitatibus sequi eaque? A dolorem, tenetur nam eos quas excepturi
          expedita velit quod ipsa sint. Esse quisquam temporibus debitis
          laboriosam corporis!
        </div>
      </div>
    </>
  );
};

export default Dashboard;
