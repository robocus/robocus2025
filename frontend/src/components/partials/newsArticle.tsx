import Link from "next/link";

const NewsArticle = ({ news, search }: { news: News; search: string }) => {
  const otherNews: News[] = [news, news, news, news, news, news]; // Fetch data with search

  return (
    <section>
      <div className="container mx-auto px-4 xl:px-24 grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-x-12">
        <div className="col-span-2">
          <p className="text-gray-500 text-md">
            {news.date.toLocaleDateString()}
          </p>
          <div className="mb-8 text-4xl font-medium">{news.title}</div>
          <p className="font-light">{news.description}</p>
          <div
            className="font-light"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </div>
        <div className="overflow-hidden p-2">
          {otherNews.length ? (
            otherNews.map((news, idx) => (
              <Link
                key={idx}
                href=""
                className="grid grid-cols-4 shadow-[gray_0_0_4px] rounded-lg overflow-hidden my-4"
              >
                <div>
                  <img
                    src={news.thumbnail}
                    alt="News"
                    width={160}
                    height={160}
                    className="h-full aspect-square object-cover"
                  />
                </div>
                <div className="col-span-3 h-full px-4 py-2 flex flex-col justify-between">
                  <p className="text-primary mb-2 h-12 overflow-hidden">
                    {news.title}
                  </p>
                  <p className="text-gray-600 text-sm text-right">
                    {news.date.toLocaleDateString()}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center text-gray-500">
              Không có bài viết liên quan. Các bạn hãy quay lại sau nhé!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsArticle;

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
