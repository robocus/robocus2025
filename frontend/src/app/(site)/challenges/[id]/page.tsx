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
        src="/20250529-poster-khoi-dong-robocus-2025-16-9-large.png"
        alt=""
        className="h-[20rem] w-full object-cover object-center sm:object-[50%_40%]"
      />

      <br />
      <h2 className="gradient-text text-2xl">Tổng quan:</h2>
      <p className="text-justify">
        Chủ đề: "Life Beyond Earth" – <i>Cuộc sống bên ngoài Trái Đất</i>, đây
        không còn chỉ là ý tưởng trong các bộ phim khoa học viễn tưởng, mà đang
        dần trở thành một câu hỏi nghiêm túc của thời đại: Liệu con người có thể
        sinh sống và phát triển trên các hành tinh khác? Trong tương lai, khi
        Trái Đất đối mặt với nhiều thách thức như biến đổi khí hậu, cạn kiệt tài
        nguyên, việc tìm kiếm một “ngôi nhà thứ hai” cho nhân loại là điều tất
        yếu.
      </p>
      <p>
        Bảng thi đấu sử dụng bộ dụng cụ Lego Wedo 2.0, các thí sinh sẽ bước vào
        hành trình sáng tạo đầy thử thách với 2 phần thi: Thuyết trình ý tưởng
        và Thi đấu sa bàn.
      </p>

      <br />
      <h2 className="gradient-text text-2xl font-medium">Nội dung chi tiết:</h2>
      <br />
      <Link
        href="https://drive.google.com/file/d/1p1tTOHSLvSs_6TBsStREemMs2f0SJUc6/view?usp=drive_link"
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
        src="/20250529-poster-khoi-dong-robocus-2025-16-9-large.png"
        alt=""
        className="h-[20rem] w-full object-cover object-center sm:object-[50%_40%]"
      />

      <br />
      <h2 className="gradient-text text-2xl">Tổng quan:</h2>
      <p className="text-justify">
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
        href="https://drive.google.com/file/d/16iVB0vjtGIzshQXLBIstDAzZD8fRmSWM/view?usp=drive_link"
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
        src="/20250529-poster-khoi-dong-robocus-2025-16-9-large.png"
        alt=""
        className="h-[20rem] w-full object-cover object-center sm:object-[50%_40%]"
      />

      <br />
      <h2 className="gradient-text text-2xl">Tổng quan:</h2>
      <p className="text-justify">
        Trong một thế giới ngày càng hiện đại, ROBOT không chỉ nhận sự điều
        khiển của con người mà còn cần khả năng phối hợp thông minh giữa điều
        khiển và tự động để giải quyết những thử thách phức tạp. Bảng C là sân
        chơi nơi các đội sẽ thiết kế và lập trình những chiếc xe điều khiển và
        tự hành bằng vi mạch để cùng nhau thực hiện chuỗi nhiệm vụ phối hợp đa
        dạng.
      </p>
      <p>
        Các ROBOT sẽ cần tương tác nhịp nhàng: một ROBOT đảm nhận việc tìm kiếm
        và thu thập vật phẩm tại các điểm trên sân, trong khi ROBOT còn lại sẽ
        di chuyển qua mê cung để vận chuyển vật phẩm đến đúng vị trí yêu cầu.
        Tốc độ, độ chính xác và sự phối hợp chính là chìa khóa chiến thắng. Đây
        không chỉ là một thử thách kỹ thuật, mà còn là nơi thể hiện tư duy chiến
        thuật, khả năng phối hợp nhuần nhuyễn và sự sáng tạo không giới hạn của
        các bạn trẻ yêu công nghệ.
      </p>

      <br />
      <h2 className="gradient-text text-2xl font-medium">Nội dung chi tiết:</h2>
      <br />
      <Link
        href="https://drive.google.com/file/d/1CHx7eB1CJ506RnR1GWVYUESEWOtiaSXK/view?usp=drive_link"
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
