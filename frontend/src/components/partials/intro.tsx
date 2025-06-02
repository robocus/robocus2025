import { Cpu } from "lucide-react";

const Intro = () => {
  const data = [
    {
      topic: "STEAM",
      content:
        "Giúp các em tiếp cận kiến thức Khoa học, Công nghệ, Kỹ thuật, Nghệ thuật và Toán học qua trải nghiệm thực hành, lắp ráp và lập trình robot.",
    },
    {
      topic: "SÁNG TẠO",
      content:
        "Không ngừng đổi mới qua từng năm, cuộc thi mang đến sân chơi tri thức đầy thú vị, bất ngờ và bứt phá dành cho các bạn có niềm đam mê công nghệ và sáng tạo robot",
    },
  ];

  return (
    <div className="m-auto">
      <h3 className="text-[#d8d8d8]" id="intro">
        GIỚI THIỆU
      </h3>
      <h1 className="gradient-text text-5xl md:text-6xl font-medium">ROBOCUS 2025</h1>
      <p className="max-w-[46rem] text-[#d8d8d8] font-light mt-3">
      Cuộc thi Robot được CLB Robotics - IoT, Trường ĐH KHTN, ĐHQGHCM tổ chức và thực hiện với sự đồng hành của Trung tâm Đào tạo Quốc tế ITEC
      </p>

      <div className="mt-8 flex flex-wrap lg:flex-nowrap gap-3">
        <div className="h-[24rem] w-[120rem] bg-gray-900">
          <img src="/20250529-poster-khoi-dong-robocus-2025-16-9-large.png" alt="" className="w-full h-full object-cover"/>
        </div>

        <div className="flex flex-col flex-wrap gap-8">
          {data.map((item, index) => (
            <div className="flex items-start" key={index}>
              <Cpu
                size={1}
                className="w-8 h-auto mx-4 flex-none"
                color="#a6efff"
              />
              <div className="h-auto">
                <h3 className="text-3xl">{item.topic}</h3>
                <p className="font-light mt-3">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
