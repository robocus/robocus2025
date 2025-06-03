import Link from "next/link";

// Mock type
type News = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  content: string;
  images: string[];
  date: Date;
};

const NewsCard = ({ news }: { news: News }) => {
  return (
    <div className="bg-gray-900 rounded-md overflow-hidden">
      <div className="h-[12rem]">
        {news.images?.[0] && (
          <img
            src={news.images[0]}
            alt=""
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="p-4">
        <Link href={`/news/${news.id}`} className="flex flex-col h-full">
          <div className="text-[#22d3ee] text-xs">
            {new Date().toLocaleDateString()}
          </div>
          <h2 className="text-lg mt-2">{news.title}</h2>
          <p className="font-light mt-2">{news.description}</p>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
