import NewsArticle from "@/components/partials/newsArticle";
import PageWall from "@/components/partials/pageWall";
import Spacer from "@/components/partials/spacer";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  // Here, you would fetch the available IDs from an API or database
  // Example: Simulating fetching data for multiple articles
  const allNewsIds = ["1", "2", "3"]; // This should be fetched dynamically from your data source

  return allNewsIds.map((id) => ({
    id: id, // This should match the dynamic segment of your file (e.g., [id].js)
  }));
}

const NewsArticlePage = async ({
  params,
}: // searchParams,
{
  params: Promise<{ id: string }>;
  // searchParams: Promise<{ search: string }>;
}) => {
  const news = newsMockData; // Fetch data with params

  if (!news) notFound();

  return (
    <main>
      <PageWall title={""} image={news.thumbnail} />
      <Spacer count={1} />
      <NewsArticle
        news={news}
        // search={(await searchParams).search}
        search={""}
      />
      <Spacer count={6} />
    </main>
  );
};

export default NewsArticlePage;

// Mock data
const newsMockData = {
  id: "1",
  title: "ROBOCUS hợp tác với các trường đại học hàng đầu",
  description:
    "Chương trình hợp tác mới nhằm phát triển thế hệ kỹ sư robotics tương lai và thúc đẩy nghiên cứu đột phá.",
  thumbnail:
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  content: `
    <h1>Hello </h2>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <br/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <br/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <br/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <br/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <br/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
    <style>
    h1 {
      font-size: 2rem;
      font-weight: normal;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: normal;
    }
    h3 {
      font-size: 1.25rem;
      font-weight: normal;
    }
    
    </style>
  `,
  images: [],
  date: new Date(),
};
