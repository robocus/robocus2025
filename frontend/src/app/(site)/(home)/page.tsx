import Banner from "@/components/partials/banner";
import Header from "@/components/partials/header";
import Intro from "@/components/partials/intro";
import Spacer from "@/components/partials/spacer";
import Organizer from "@/components/partials/organizer";
import Stats from "@/components/partials/stats";
import Overview from "@/components/partials/overview";
import Timeline from "@/components/partials/timeline";
import Lookback from "@/components/partials/lookback";
import Awards from "@/components/partials/awards";
import Footer from "@/components/partials/footer";

export default function HomePage() {
  const pastEventImages = [
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/480565389_1046962913905951_2239948198005505432_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/480598426_1046964583905784_5630213917150119062_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/480646616_1046965887238987_2803053169881174122_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/480647752_1046964833905759_8558515011474341311_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/480651987_1046964690572440_8491655475896948259_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/480701394_1046965863905656_6859282197475333588_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/480740308_1046963533905889_7629950792962641802_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/480767898_1046962300572679_1077960172371135765_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/480767905_1046962837239292_9162451196546339933_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/480877531_1046964980572411_7832838466914087369_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481239105_1055629939705915_4085810234084050514_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481268829_1055630049705904_3731670872716588251_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481321841_1046962323906010_8576928210595253918_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481443208_1055630086372567_7708801784645247163_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481907481_1055630206372555_1296425555820948762_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481963594_1055089689759940_8947739646974759472_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/481987516_1055629929705916_3973244124335617998_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/482003430_1055630066372569_5977656733846319275_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/482020227_1055630123039230_5784166226377557292_n.jpg",
    "https://pub-56dff0b35bda462099f1145617bde151.r2.dev/482214837_1055629876372588_8280188240043023722_n.jpg"
  ];
  
  return (
    <div className="container mx-auto px-4 xl:px-24 ">
      <Spacer count={1} />
      <Banner />
      <Spacer count={4} />
      <Intro />
      <Spacer count={2} />
      <Timeline />
      <Spacer count={4} />
      <Organizer />
      <Spacer count={4} />
      <Stats />
      <Spacer count={4} />
      <Overview />
      <Lookback images={pastEventImages}/>
      <Spacer count={4} />
      <Awards />
    </div>
  );
}
