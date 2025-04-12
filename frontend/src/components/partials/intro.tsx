import { Codesandbox, Cpu } from "lucide-react";

const Intro = () => {
  const data = [
    {
      topic: "Robotics",
      content:
        "Cuộc thi thử thách khả năng thiết kế và lắp ráp robot thông minh. Thí sinh sẽ vận dụng kiến thức về cơ khí, điện tử và IoT để tạo ra các mô hình robot hoàn chỉnh, có khả năng tự hành và thực hiện nhiệm vụ trong môi trường mô phỏng thực tế.",
    },
    {
      topic: "Programming",
      content:
        "Lập trình là chìa khóa điều khiển robot và xử lý dữ liệu cảm biến. Các đội thi sẽ viết phần mềm điều hướng, xử lý ảnh, và giao tiếp với phần cứng, sử dụng các ngôn ngữ lập trình như Arduino hoặc các nền tảng lập trình nhúng phổ biến.",
    },
  ];

  return (
    <div className="m-auto">
      <h3 className="text-[#d8d8d8]" id="#intro">
        GIỚI THIỆU
      </h3>
      <h1 className="gradient-text text-5xl md:text-6xl font-medium">ROBOCUS 2025</h1>
      <p className="max-w-[46rem] text-[#d8d8d8] font-light mt-3">
        Cuộc thi Robocus được CLB Robotics - IoT, Trường ĐH KHTN, ĐHQGHCM tổ
        chức và thực hiện với sự đồng hành của Trung tâm Đào tạo Quốc tế ITEC
      </p>

      <div className="mt-8 flex flex-wrap lg:flex-nowrap gap-3">
        <div className="h-[24rem] w-[120rem] bg-gray-900">
          <img src="https://pub-56dff0b35bda462099f1145617bde151.r2.dev/480740289_1046959440572965_8248390217217583053_n.jpg" alt="" className="w-full h-full object-cover"/>
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
                <p className="font-light mt-6">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
