const Footer = () => {
  const navigation = [
    {
      name: "Tổng quan",
      items: [
        { name: "Trang chủ", href: "/" },
        { name: "Giới thiệu", href: "/#intro" },
        { name: "Đơn vị", href: "/#organizer" },
        { name: "Bảng vinh danh", href: "/#awards" },
      ],
    },
    {
      name: "Thể lệ",
      items: [
        { name: "Nội dung - Bảng A", href: "/challenges/A" },
        { name: "Nội dung - Bảng B", href: "/challenges/B" },
        { name: "Nội dung - Bảng C", href: "/challenges/C" },
      ],
    },
    {
      name: "Hành trình",
      items: [
        // { name: "Robocus 2023", href: "" },
        { name: "Robocus 2024", href: "https://robocus.org/robocus2024/" },
      ],
    },
    {
      name: "Liên hệ",
      items: [
        { name: "Địa chỉ: 227 Nguyễn Văn Cừ, P.4, Q.5, TP.HCM", href: "https://maps.app.goo.gl/VAWCdYoRM6pz15JX9" },
        { name: "Hotline / Zalo: 0366.399.748", href: "tel:+84366399748" },
        { name: "Email: robotics@hcmus.edu.vn", href: "mailto:robotics@hcmus.edu.vn" },
        { name: "Fanpage: facebook.com/RoboticsHCMUS", href: "https://www.facebook.com/RoboticsHCMUS" },
      ],
    }
  ];
  return (
    <div className="p-10" id="contact">
      <div className="flex items-center gap-1">
        <img
          src="/02-robocus-2025-logo-white.png"
          className="h-[4rem]"
          alt="logo"
        />
      </div>

      <div className="w-full flex flex-wrap justify-between mt-10 gap-4">
        <div className="flex flex-wrap gap-8">
          {navigation.map((nav, index) => (
            <NavigationCol key={index} name={nav.name} items={nav.items} />
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h3>Email</h3>
          <div className="flex flex-wrap gap-4">
            <input
              type="email"
              className="p-3 px-4 w-min rounded-full border font-light"
              placeholder="Nhập thông tin email"
            />
            <button
              type="submit"
              className="p-3 px-5 rounded-full bg-[#7b8ce5]"
            >
              QUAN TÂM
            </button>
          </div>
        </div>
      </div>

      <hr className="h-[.1rem] bg-linear-to-r from-[#f2c3fb] via-[#7e92e6] to-[#a6efff] mt-10" />

      <p className="text-xs font-extralight mt-8">
        Copyright &copy; {new Date().getFullYear()} Robocus
      </p>
    </div>
  );
};

const NavigationCol = ({
  name,
  items,
}: {
  name: string;
  items: { name: string; href: string }[];
}) => {
  return (
    <div className="">
      <h3 className="text-lg font-medium md:mb-5">{name}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mt-2">
            <a href={item.href} className="font-extralight">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
