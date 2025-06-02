import Link from "next/link";
import { Tabs } from "radix-ui";

export async function generateStaticParams() {
  // Assuming you fetch data from an API or a mock
  const newsIds = ["A", "B", "C"]; // Replace with your data fetching logic

  // Return the dynamic paths
  return newsIds.map((id) => ({
    id: id.toString(), // Use the actual field if the ID is a number or string
  }));
}

const Challenge = async ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <div className="container mx-auto px-4 xl:px-24">
      <h1 className="gradient-text text-5xl md:text-6xl font-medium">
        BẢNG {(await params).id}
      </h1>

      {(await params).id === "A" ? (
        <TheLeA />
      ) : (await params).id === "B" ? (
        <TheLeB />
      ) : (await params).id === "C" ? (
        <TheLeC />
      ) : (
        <p></p>
      )}
    </div>
  );
};

const TheLeA = () => {
  return (
    <>
      <img
        src="/20250529-poster-khoi-dong-robocus-2025-16-9.png"
        alt=""
        className="h-[20rem] w-full object-cover object-[25%_40%]"
      />

      <br />
      <h2 className="gradient-text text-2xl">Tổng quan:</h2>
      <p>
        Chủ đề: "Life Beyond Earth" – Cuộc sống bên ngoài Trái Đất, đây không
        còn chỉ là ý tưởng trong các bộ phim khoa học viễn tưởng, mà đang dần
        trở thành một câu hỏi nghiêm túc của thời đại: Liệu con người có thể
        sinh sống và phát triển trên các hành tinh khác? Trong tương lai, khi
        Trái Đất đối mặt với nhiều thách thức như biến đổi khí hậu, cạn kiệt tài
        nguyên, việc tìm kiếm một “ngôi nhà thứ hai” cho nhân loại là điều tất
        yếu. Bảng thi đấu sử dụng bộ dụng cụ Lego Wedo 2.0, các thí sinh sẽ bước
        vào hành trình sáng tạo đầy thử thách với 2 phần thi: Thuyết trình ý
        tưởng và Thi đấu sa bàn.
      </p>

      <br />
      <h2 className="gradient-text text-2xl font-medium">Nội dung chi tiết:</h2>
      <br />
      <Link
        href="https://drive.google.com/file/d/18VJ5ji2PFrrl_o9hDj2r3W0ho6P2tTNu/view?usp=drive_link"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:underline"
      >
        {" "}
        Xem tại đây{" "}
      </Link>
    </>
  );
};
const TheLeB = () => {
  return (
    <>
      <img
        src="/20250529-poster-khoi-dong-robocus-2025-16-9.png"
        alt=""
        className="h-[20rem] w-full object-cover object-[25%_40%]"
      />

      <br />
      <h2 className="gradient-text text-2xl">Tổng quan:</h2>
      <p>
        Con người đang bước vào kỷ nguyên chinh phục không gian sâu. Các nhóm
        Robot tiên phong đóng vai trò quan trọng trong việc xây dựng các căn cứ
        không gian, khai thác tài nguyên và đảm bảo sự sống cho con người ngoài
        Trái Đất. Trong bảng thi đấu này, các đội sẽ thiết kế robot tự động thực
        hiện chuỗi nhiệm vụ mô phỏng các hoạt động cần thiết để sinh tồn và
        chinh phục vũ trụ.
      </p>

      <br />
      <h2 className="gradient-text text-2xl font-medium">Nội dung chi tiết:</h2>
      <br />
      <Link
        href="https://drive.google.com/open?id=1ScqDfjvAOOoKQuqmabZ9od6CiTjaVJwy&usp=drive_copy"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:underline"
      >
        {" "}
        Xem tại đây{" "}
      </Link>
    </>
  );
};

const TheLeC = () => {
  return (
    <>
      <img
        src="/20250529-poster-khoi-dong-robocus-2025-16-9.png"
        alt=""
        className="h-[20rem] w-full object-cover object-[25%_40%]"
      />

      <br />
      <h2 className="gradient-text text-2xl">Tổng quan:</h2>
      <p>
        Trong một thế giới ngày càng hiện đại, ROBOT hông chỉ nhận sự điều khiển
        của con người mà còn cần khả năng phối hợp thông minh giữa điều khiển và
        tự động để giải quyết những thử thách phức tạp. Bảng C là sân chơi nơi
        các đội sẽ thiết kế và lập trình những chiếc xe điều khiển và tự hành
        bằng vi mạch để cùng nhau thực hiện chuỗi nhiệm vụ phối hợp đa dạng. Các
        ROBOT sẽ cần tương tác nhịp nhàng: một ROBOT đảm nhận việc tìm kiếm và
        thu thập vật phẩm tại các điểm trên sân, trong khi ROBOT còn lại sẽ di
        chuyển qua mê cung để vận chuyển vật phẩm đến đúng vị trí yêu cầu. Tốc
        độ, độ chính xác và sự phối hợp chính là chìa khóa chiến thắng. Đây
        không chỉ là một thử thách kỹ thuật, mà còn là nơi thể hiện tư duy chiến
        thuật, khả năng phối hợp nhuần nhuyễn và sự sáng tạo không giới hạn của
        các bạn trẻ yêu công nghệ.
      </p>

      <br />
      <h2 className="gradient-text text-2xl font-medium">Nội dung chi tiết:</h2>
      <br />
      <Link
        href="https://drive.google.com/open?id=1KZunO8JEyDTTQhnD4H2i_oT9exzLQ-K1&usp=drive_copy"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:underline"
      >
        {" "}
        Xem tại đây{" "}
      </Link>
    </>
  );
};

export default Challenge;

export function BangA() {
  return (
    <div className="p-6 max-w-4xl mx-auto shadow-md rounded-lg mb-8">
      <h1 className="text-2xl font-bold mb-4">NỘI DUNG THI ĐẤU</h1>

      <h2 className="text-xl font-semibold mb-2">Tổng quan:</h2>
      <p className="mb-4">
        Chủ đề: "Life Beyond Earth" - Cuộc sống bên ngoài Trái Đất, đây không
        còn chỉ là ý tưởng trong các bộ phim khoa học viễn tưởng, mà đang dần
        trở thành một câu hỏi nghiêm túc của thời đại: Liệu con người có thể
        sinh sống và phát triển trên các hành tinh khác? Trong tương lai, khi
        Trái Đất đối mặt với nhiều thách thức như biến đổi khí hậu, cạn kiệt tài
        nguyên, việc tìm kiếm một "ngôi nhà thứ hai" cho nhân loại là điều tất
        yếu.
        <br />
        Bảng thi đấu sử dụng bộ dụng cụ Lego Wedo 2.0, các thí sinh sẽ bước vào
        hành trình sáng tạo đầy thử thách với 2 phần thi: Thuyết trình ý tưởng
        và Thi đấu sa bàn.
        <br />
        Các gợi ý về phạm vi tìm hiểu dành cho phần thi "Thuyết trình ý tưởng"
        có thể tham khảo thêm:{" "}
        <a href="#" className="text-blue-600">
          Tại đây
        </a>
      </p>

      <h2 className="text-xl font-semibold mb-2">Nội dung chi tiết:</h2>
      <p className="mb-4">Phần thi đấu sẽ bao gồm 2 phần:</p>
      <table className="table-auto w-full mb-4 border-collapse border border-gray-300">
        <thead>
          <tr className="">
            <th className="border border-gray-300 p-2">Hình thức thi đấu</th>
            <th className="border border-gray-300 p-2">Điểm số</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Thuyết trình ý tưởng</td>
            <td className="border border-gray-300 p-2">70%</td>
          </tr>
          {/* <tr>
            Hình thức thi đấu Điểm số Thuyết trình ý tưởng 70% Thi đấu sa bàn 30%
          </tr> */}
          <tr>
            <td className="border border-gray-300 p-2">Thi đấu sa bàn</td>
            <td className="border border-gray-300 p-2">30%</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-4">
        <strong>Bộ dụng cụ thi đấu:</strong> Lego Wedo 2.0
        <br />
        - 1 bộ dụng cụ sử dụng cho mô hình thuyết trình ý tưởng.
        <br />- 1 bộ dụng cụ sử dụng ở phần thi đấu sa bàn.
      </p>

      <p className="mb-4">
        <strong>Thành viên:</strong>
        <br />
        - Mỗi đội 2 thành viên
        <br />- 1 Huấn luyện viên chính thức & 1 huấn luyện viên phụ (nếu có)
      </p>

      <p className="mb-4">
        <strong>Quy định chung:</strong> Các đội phải tham gia thi đấu ở cả 2
        vòng thi là thuyết trình ý tưởng và thi đấu sa bàn.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        1. Phần thi thuyết trình ý tưởng
      </h2>
      <h3 className="text-lg font-medium mb-2">1.1 Yêu cầu kỹ thuật:</h3>
      <p className="mb-4">
        Ở vòng thi thuyết trình ý tưởng, mỗi đội cần hoàn thành hai phần bắt
        buộc: Mô hình ý tưởng và Poster thuyết trình.
        <br />- <strong>Mô hình:</strong>
        <br />
        Lắp ráp bằng Lego trên tấm nền kích thước 40cm × 40cm.
        <br />
        Sử dụng bộ dụng cụ Lego Wedo 2.0, cho phép tối đa:
        <br />
        1 Hub, 2 động cơ, 1 cảm biến khoảng cách, 1 cảm biến nghiêng.
        <br />- <strong>Poster:</strong>
        <br />
        Kích thước: 80cm × 100cm.
        <br />
        Nên trình bày đầy đủ các nội dung:
        <br />
        - Vấn đề và ý tưởng nhóm lựa chọn.
        <br />
        - Mô hình và cách giải quyết vấn đề.
        <br />
        - Thiết kế, chức năng và hoạt động của mô hình.
        <br />- Quá trình học tập, làm việc nhóm và tinh thần hợp tác.
      </p>

      <h3 className="text-lg font-medium mb-2">1.2 Luật thi đấu:</h3>
      <p className="mb-4">
        - Đội thi bắt đầu xây dựng và hoàn thành giải pháp (bao gồm ý tưởng, mô
        hình, nghiên cứu) sau khi chủ đề chính thức của cuộc thi được công bố.
        <br />
        - Chuẩn bị đầy đủ các thành phần dự thi vào ngày thi đấu
        <br />
        - Bài thuyết trình
        <br />
        - Mô hình ý tưởng
        <br />
        - Poster giới thiệu dự án
        <br />- Trình bày bài thuyết trình, mô hình và poster trực tiếp trước
        ban giám khảo.
      </p>

      <h3 className="text-lg font-medium mb-2">1.3 Hình thức đánh giá:</h3>
      <p className="mb-4">
        - Ban giám khảo sẽ đánh giá dựa trên các tiêu chí chính thức và ghi điểm
        vào phiếu chấm điểm tương ứng.
        <br />
        - Quy trình chấm điểm:
        <br />
        - Mỗi đội sẽ lần lượt trình bày đầy đủ nội dung theo yêu cầu với các
        giám khảo.
        <br />
        - Mỗi giám khảo sẽ chấm điểm độc lập theo cùng một hệ thống tiêu chí.
        <br />
        - Kết quả của phần thi được tổng hợp từ điểm số của tất cả giám khảo.
        <br />
        Bảng tiêu chí chấm điểm có thể tham khảo thêm{" "}
        <a href="#" className="text-blue-600">
          Tại đây
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Phần thi đấu sa bàn</h2>
      <p className="mb-4">
        Một hành tinh để tồn tại sự sống cần 6 yếu tố: nước, không khí, năng
        lượng, nhiệt độ phù hợp, nguyên tố hóa học, môi trường ổn định. Phần thi
        đấu sa bàn mô phỏng hành trình robot kiến tạo sự sống cho một hành tinh.
      </p>

      <h3 className="text-lg font-medium mb-2">2.1 Yêu cầu kỹ thuật:</h3>
      <p className="mb-4">
        Robot sử dụng bộ dụng cụ Lego Wedo 2.0, cho phép tối đa 1 Hub, 2 động
        cơ.
      </p>

      <h3 className="text-lg font-medium mb-2">2.2 Luật thi đấu:</h3>
      <p className="mb-4">
        <strong>Nhiệm vụ:</strong> Điều khiển Robot đưa các khối hình học tượng
        trưng bàn.
        <br />
        <strong>Cách chơi:</strong>
        <br />
        - Thời gian thi đấu: tối đa 3 phút / trận
        <br />
        - Đội thi điều khiển Robot di chuyển trong khu vực thi đấu của đội mình,
        từ vị trí xuất phát, để nhặt khối hình trụ tròn, và đưa vào vị trí ô
        chứa có màu cùng màu với trụ tròn. Sau khi đã đặt hết các khối trụ tròn
        vào vị trí chính xác đội thi mới được phép đưa khối vuông - tượng trưng
        cho yếu tố quan trọng nhất: NƯỚC, vào vị trí ô chứa trung tâm.
        <br />
        - Robot có thể cùng lúc đem nhiều hơn 1 khối trụ tròn, không được phép
        di chuyển khối vuông khi chưa đặt thành công 5 khối trụ tròn.
        <br />
        - Trong quá trình di chuyển, Robot hoặc khối hình học rơi vào vùng CẤM
        thì đội thi phải đem Robot và các khối hình học đó về vị trí xuất phát
        và thi đấu lại.
        <br />
        - Khối hình học phải hoàn toàn nằm trong ô chứa mới được tính là thành
        công.
        <br />- Mỗi thành viên trong đội phải điều khiển robot tối thiểu 2 lần
        thực hiện nhiệm vụ thành công (đưa 1 khối hình học vào vị trí tương ứng
        chính xác được tính là nhiệm vụ thành công).
      </p>

      <h3 className="text-lg font-medium mb-2">2.3 Hình thức đánh giá:</h3>
      <p className="mb-4">
        <strong>Cách tính điểm trận:</strong>
        <br />
        - Đặt khối tròn vào vị trí chính xác +10 điểm / khối
        <br />
        - Đặt khối vuông vào vị trí chính xác, dành chiến thắng tuyệt đối +100
        điểm/ trận.
        <br />
        Trong thời gian 3 phút không đội nào dành chiến thắng tuyệt đối thì đội
        giành được nhiều điểm hơn, sớm hơn sẽ dành chiến thắng trận.
        <br />
        <strong>Xếp hạng đội thi theo thứ tự từ:</strong>
        <br />
        1. Số trận thắng.
        <br />
        2. Tổng điểm ghi được.
        <br />
        3. Số trận thắng tuyệt đối.
        <br />
        4. Các thông số phụ (thời gian dành chiến thắng tuyệt đối, số lần phạm
        lỗi)
        <br />
        Hình ảnh & Phụ lục bản đồ thi đấu:
      </p>
    </div>
  );
}

const BangASaBan = () => {
  return (
    <div className="border border-blue-900">
      <h3 className="text-3xl mt-6 border-b border-blue-900 pb-5 px-4">
        Nội dung
      </h3>

      <Tabs.Root
        orientation="vertical"
        defaultValue="tab3"
        className="grid grid-cols-5 gap-4"
      >
        <Tabs.List className="flex flex-col items-start gap-4 [&>*]:text-left p-4 border-r border-blue-900 col-span-1">
          <Tabs.Trigger value="tab3" className="data-[state=active]:underline">
            Quy định chung
          </Tabs.Trigger>
          <Tabs.Trigger value="tab4" className="data-[state=active]:underline">
            Mô tả
          </Tabs.Trigger>
          <Tabs.Trigger value="tab5" className="data-[state=active]:underline">
            Giải thưởng
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="tab3" className="col-span-4 p-4">
          <p className="font-light">
            <span className="font-medium">Độ tuổi:</span> 5 - 10 tuổi
          </p>
          <p className="font-light">
            <span className="font-medium">Số lượng thành viên:</span> 2 - 3
            thành viên/đội
          </p>
          <p className="font-light">Mỗi đội chơi tham gia 2 nội dung thi đấu</p>
          <span className="font-medium">Tỷ lệ điểm:</span>
          <ul>
            <li>
              <p className="font-light">
                Tìm hiểu vấn đề & Xây dựng giải pháp [Thuyết trình]: 80%
              </p>
            </li>
            <li>
              <p className="font-light">
                Xây dựng lập trình Robot [Sa bàn Bowlings]: 20%
              </p>
            </li>
          </ul>
        </Tabs.Content>
        <Tabs.Content value="tab4" className="col-span-4  p-4">
          Mô tả: Nhóm học sinh lắp ráp Robot, lập trình tham gia phần thi
          Bowling. <br />
          Dụng cụ thi đấu: LEGO WEDO 2.0, Máy tính bảng, Laptop. <br />
          Quy định: <br />
          <ul className="list-disc">
            <li>
              Kích thước Robot: không giới hạn <br />
            </li>
            <li>
              Robot phải được tháo rời trước khi thi đấu. <br />
            </li>
            <li>
              Chương trình lập trình có thể được chuẩn bị sẵn. <br />
            </li>
          </ul>
          Luật chơi:
          <ul className="list-disc">
            <li>
              Trước khi thi đấu chính thức, nhóm học sinh sẽ có thời gian lắp
              ráp Robot.
            </li>
            <li>
              Robot phải được đặt ngay sau vạch thi đấu và các bộ phận của Robot
              (trừ dây điện) phải nằm sau vạch thi đấu theo góc nhìn từ trên
              xuống.
            </li>
            <li>
              Mỗi nhóm học sinh dùng máy tính bảng điều khiển Robot và thả banh
              bowling.
            </li>
            <li>Điểm = Số trụ Bowling bị ngã.</li>
          </ul>
          Sa bàn thi đấu
          <ul className="list-disc">
            <li>Sa bàn có kích thước: 50 cm x 100 cm</li>
            <li>
              Vạch xuất phát là một thanh ngăn cách được lắp bằng LEGO có kích
              thước X cm x Y cm x Z cm và được gắn cố định.
            </li>
            <li>
              Có 10 trụ bowling được đặt tại các vị trí đánh dấu. Đường kính đáy
              X cm. Chiều cao trụ Y cm
            </li>
          </ul>
        </Tabs.Content>
        <Tabs.Content value="tab5" className="col-span-4 p-4"></Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

const BangAThuyetTrinh = () => {
  return (
    <div className="border border-blue-900">
      <h3 className="text-3xl mt-6 border-b border-blue-900 pb-5 px-4">
        Nội dung
      </h3>

      <Tabs.Root
        orientation="vertical"
        defaultValue="tab3"
        className="grid grid-cols-5 gap-4"
      >
        <Tabs.List className="flex flex-col items-start gap-4 [&>*]:text-left p-4 border-r border-blue-900 col-span-1">
          <Tabs.Trigger value="tab3" className="data-[state=active]:underline">
            Quy định chung
          </Tabs.Trigger>
          <Tabs.Trigger value="tab4" className="data-[state=active]:underline">
            Mô tả
          </Tabs.Trigger>
          <Tabs.Trigger value="tab5" className="data-[state=active]:underline">
            Giải thưởng
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab3" className="col-span-4 p-4">
          <p className="font-light">
            <span className="font-medium">Độ tuổi:</span> 5 - 10 tuổi
          </p>
          <p className="font-light">
            <span className="font-medium">Số lượng thành viên:</span> 2 - 3
            thành viên/đội
          </p>
          <p className="font-light">Mỗi đội chơi tham gia 2 nội dung thi đấu</p>
          <span className="font-medium">Tỷ lệ điểm:</span>
          <ul>
            <li>
              <p className="font-light">
                Tìm hiểu vấn đề & Xây dựng giải pháp [Thuyết trình]: 80%
              </p>
            </li>
            <li>
              <p className="font-light">
                Xây dựng lập trình Robot [Sa bàn Bowlings]: 20%
              </p>
            </li>
          </ul>
        </Tabs.Content>
        <Tabs.Content value="tab4" className="col-span-4 p-4">
          Chủ đề: Animals <br />
          Mô tả: Nhóm học sinh tìm hiểu ít nhất 2 loài động vật khác nhau và đưa
          ra so sánh giữa chúng. Sản phẩm của nhóm là một mô hình và một poster
          minh họa ý tưởng của nhóm. <br />
          Dụng cụ thi đấu: Bao gồm nhưng không giới hạn LEGO WEDO 2.0, Máy tính
          bảng, Laptop và các vật dụng khác. <br />
          Quy định: <br />
          Kích thước Mô hình: 50cm x 50cm <br />
          Kích thước Poster: 80 cm x 120 cm <br />
          Luật chơi: Nhóm học sinh thuyết trình cho Ban giám khảo về giải
          pháp,mô hình và về poster của nhóm.
        </Tabs.Content>
        <Tabs.Content value="tab5" className="col-span-4 p-4"></Tabs.Content>
      </Tabs.Root>
    </div>
  );
};
