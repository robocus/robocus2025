import { HTMLAttributes, useEffect, useState } from "react";
import NewsCard from "./newsCard";
import { News } from "./newsArticle";

const NewsArchive = async ({
  searchParams,
  ...props
}: {
  searchParams: { search: string; take: string };
} & HTMLAttributes<HTMLDivElement>) => {
  // const [news, setNews] = useState<News[]>([]);

  const backend = process.env.BACKEND_BASE ?? "http://localhost:8000";

  const response = await fetch(new URL("/graphql", backend), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query {
            newsfeed {
              id, title
            }
          }
            `,
    }),
  });
  // console.log("Response:", await response.json());
  const json = await response.json();
  const news = json.data.newsfeed as News[];

  // console.log("Data:", data);
  return (
    <section {...props}>
      <div className="container mx-auto px-4 xl:px-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsArchive;

// Mock data
const news = [
  {
    id: "1",
    title: "ROBOCUS hợp tác với các trường đại học hàng đầu",
    description:
      "Chương trình hợp tác mới nhằm phát triển thế hệ kỹ sư robotics tương lai và thúc đẩy nghiên cứu đột phá.",
    thumbnail:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    content: "",
    images: [],
    date: new Date(),
  },
];
