import Link from "next/link";

const Overview = () => {
  return (
    <div className="">
      <h3 className="text-[#d8d8d8]" id="overview">
        THỂ LỆ CUỘC THI
      </h3>
      <h1 className="gradient-text text-5xl md:text-6xl font-medium">
        NỘI DUNG BẢNG ĐẤU
      </h1>

      <div className="mt-8 flex flex-wrap justify-center gap-6">
        <OverviewCard
          name="BẢNG A"
          link="/challenges/A"
          desc="Dành cho lứa tuổi nhỏ hơn, bảng A khuyến khích sự sáng tạo thông qua việc lắp ráp và lập trình bằng LEGO WEDO 2.0. Các đội thi sẽ sử dụng máy tính bảng, laptop và trình bày ý tưởng trước ban giám khảo."
        />
        <OverviewCard
          name="BẢNG B"
          link="/challenges/B"
          desc="Hướng đến các bạn học sinh lớn hơn, bảng B tập trung vào việc giải quyết các vấn đề thực tiễn bằng việc lắp ráp và lập trình robot sử dụng LEGO SPIKE PRIME hoặc LEGO MINDSTORMS EV3. Các đội sẽ tìm hiểu các chủ đề, xây dựng giải pháp và trình bày trước hội đồng"
        />
        <OverviewCard
          name="BẢNG C"
          link="/challenges/C"
          desc="Bảng thi mang tính kỹ thuật cao nhất với việc học sinh tự thiết kế, lập trình và điều khiển robot để hoàn thành các nhiệm vụ trên sa bàn. Khuyến khích tư duy logic, kỹ năng teamwork và khả năng giải quyết tình huống."
        />
      </div>
    </div>
  );
};

const OverviewCard = ({
  name,
  desc,
  link,
}: {
  name: string;
  desc: string;
  link: string;
}) => {
  return (
    <div className="w-[24rem] min-h-[18rem] bg-gray-900 hover:bg-blue-950 p-6">
      <div className="w-12 h-12 gradient-text text-6xl font-medium">
        {name.charAt(name.length - 1)}
      </div>
      <h2 className="text-3xl font-medium mt-4">{name}</h2>
      <p className="font-light mt-4">{desc}</p>
      <Link href={link} className="text-[#7b8ce5] inline-block mt-6">
        TÌM HIỂU THÊM
      </Link>
    </div>
  );
};

export default Overview;
