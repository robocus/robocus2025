import { img } from "motion/react-client";

export const Organizer = () => {
  const organizers = [
    {
      imgUrl: "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/image.png",
      name: "Trường ĐH KHTN, ĐHQG - HCM",
      desc: "Là đơn vị chủ quản, Trường Đại học Khoa học Tự nhiên đóng vai trò then chốt trong việc tổ chức, cung cấp cơ sở vật chất, chuyên môn và tạo điều kiện cho sinh viên phát triển trong lĩnh vực Khoa học và Công nghệ.",
    },
    {
      imgUrl: "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/image%20copy.png",
      name: "CLB Robotics - IoT",
      desc: "Là lực lượng nòng cốt đứng sau cuộc thi Robocus, CLB Robotics - IoT tập hợp những sinh viên đam mê công nghệ, sáng tạo và nghiên cứu trong các lĩnh vực robot, lập trình, và Internet vạn vật.",
    },
    {
      imgUrl: "https://talentmind.edu.vn/wp-content/uploads/2015/03/ITEC-logo.jpg",
      name: "TT Đào tạo Quốc tế ITEC",
      desc: "Đơn vị đồng hành hỗ trợ kỹ thuật và chuyên môn, ITEC tạo cầu nối giữa sinh viên và môi trường công nghệ toàn cầu thông qua các chương trình đào tạo, hợp tác quốc tế và chuyển giao tri thức.",
    },
  ];
  const sponsors = [
    {
      logoUrl:
        "https://talentmind.edu.vn/wp-content/uploads/2015/03/ITEC-logo.jpg",
      sponsorLink: "https://example.com/sponsor2",
    },
  ];

  return (
    <div className="m-auto">
      <h3 className="text-[#d8d8d8]" id="organizer">
        ĐƠN VỊ
      </h3>
      <h1 className="gradient-text text-3xl font-medium mt-4">
        ĐƠN VỊ TỔ CHỨC
      </h1>
      <div className="flex gap-10 [&>*]:grow-0 flex-wrap md:flex-nowrap justify-center mt-8">
        {organizers.map((organizer, index) => (
          <OrganizerCard
            key={index}
            name={organizer.name}
            desc={organizer.desc}
            logo={organizer.imgUrl}
          />
        ))}
      </div>
      <br />
      <h1 className="gradient-text text-3xl font- mt-4">ĐƠN VỊ TÀI TRỢ</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-0 mt-8">
        {sponsors.map((sponsor, index) => (
          <SponsorCard key={index} logoUrl={sponsor.logoUrl} />
        ))}
      </div>
    </div>
  );
};
const OrganizerCard = ({
  name,
  desc,
  logo,
}: {
  name: string;
  desc: string;
  logo?: string;
}) => {
  return (
    <>
      <div className="w-[30rem]">
        <div className="logo w-max h-16 grayscale-25">
          <img
            src={logo}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <h4 className="text-2xl font-medium mt-4">{name}</h4>
        <p className="w-auto font-light mt-4">{desc}</p>
      </div>
    </>
  );
};

const SponsorCard = ({ logoUrl }: { logoUrl: string }) => {
  return (
    <div className="h-40 -m-[0.5px] border border-blue-900 flex items-center justify-center group">
      <img
        className="h-[3rem] w-auto grayscale group-hover:filter-none"
        src={logoUrl}
        alt=""
      />
    </div>
  );
};

export default Organizer;
