"use client";

import { useRef } from "react";
import Spacer from "./spacer";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "../../../lib/utils";

const Timeline = ({
  images = [
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/481090142_1052800946655481_9009005542754165241_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFsxV7y-EkJ0fN2Z4XDhZVV-Ty8Iy27BQX5PLwjLbsFBYhrOfRlZGXubWjJQy-OwVBCITcI2OigDJCQdhCnrevY&_nc_ohc=nd2zcfrQn-kQ7kNvgFNxakm&_nc_oc=Adk6niSSD-o_pbqJhye3sf8BNGXor7E7SyjMzoyleePEkivANUGYHTTNyKLoBpMXY_8&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=IHNZERw4ID3GH6Nv1Zvidw&oh=00_AYFFuPAlcUSnLsIxBPgm8dV8KhGpwtctKYTcSIQnaeMo_g&oe=67E1E21D",
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/481090142_1052800946655481_9009005542754165241_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFsxV7y-EkJ0fN2Z4XDhZVV-Ty8Iy27BQX5PLwjLbsFBYhrOfRlZGXubWjJQy-OwVBCITcI2OigDJCQdhCnrevY&_nc_ohc=nd2zcfrQn-kQ7kNvgFNxakm&_nc_oc=Adk6niSSD-o_pbqJhye3sf8BNGXor7E7SyjMzoyleePEkivANUGYHTTNyKLoBpMXY_8&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=IHNZERw4ID3GH6Nv1Zvidw&oh=00_AYFFuPAlcUSnLsIxBPgm8dV8KhGpwtctKYTcSIQnaeMo_g&oe=67E1E21D",
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/481090142_1052800946655481_9009005542754165241_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFsxV7y-EkJ0fN2Z4XDhZVV-Ty8Iy27BQX5PLwjLbsFBYhrOfRlZGXubWjJQy-OwVBCITcI2OigDJCQdhCnrevY&_nc_ohc=nd2zcfrQn-kQ7kNvgFNxakm&_nc_oc=Adk6niSSD-o_pbqJhye3sf8BNGXor7E7SyjMzoyleePEkivANUGYHTTNyKLoBpMXY_8&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=IHNZERw4ID3GH6Nv1Zvidw&oh=00_AYFFuPAlcUSnLsIxBPgm8dV8KhGpwtctKYTcSIQnaeMo_g&oe=67E1E21D",
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/481090142_1052800946655481_9009005542754165241_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFsxV7y-EkJ0fN2Z4XDhZVV-Ty8Iy27BQX5PLwjLbsFBYhrOfRlZGXubWjJQy-OwVBCITcI2OigDJCQdhCnrevY&_nc_ohc=nd2zcfrQn-kQ7kNvgFNxakm&_nc_oc=Adk6niSSD-o_pbqJhye3sf8BNGXor7E7SyjMzoyleePEkivANUGYHTTNyKLoBpMXY_8&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=IHNZERw4ID3GH6Nv1Zvidw&oh=00_AYFFuPAlcUSnLsIxBPgm8dV8KhGpwtctKYTcSIQnaeMo_g&oe=67E1E21D",
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/481090142_1052800946655481_9009005542754165241_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFsxV7y-EkJ0fN2Z4XDhZVV-Ty8Iy27BQX5PLwjLbsFBYhrOfRlZGXubWjJQy-OwVBCITcI2OigDJCQdhCnrevY&_nc_ohc=nd2zcfrQn-kQ7kNvgFNxakm&_nc_oc=Adk6niSSD-o_pbqJhye3sf8BNGXor7E7SyjMzoyleePEkivANUGYHTTNyKLoBpMXY_8&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=IHNZERw4ID3GH6Nv1Zvidw&oh=00_AYFFuPAlcUSnLsIxBPgm8dV8KhGpwtctKYTcSIQnaeMo_g&oe=67E1E21D",
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/481090142_1052800946655481_9009005542754165241_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFsxV7y-EkJ0fN2Z4XDhZVV-Ty8Iy27BQX5PLwjLbsFBYhrOfRlZGXubWjJQy-OwVBCITcI2OigDJCQdhCnrevY&_nc_ohc=nd2zcfrQn-kQ7kNvgFNxakm&_nc_oc=Adk6niSSD-o_pbqJhye3sf8BNGXor7E7SyjMzoyleePEkivANUGYHTTNyKLoBpMXY_8&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=IHNZERw4ID3GH6Nv1Zvidw&oh=00_AYFFuPAlcUSnLsIxBPgm8dV8KhGpwtctKYTcSIQnaeMo_g&oe=67E1E21D",
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/481090142_1052800946655481_9009005542754165241_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFsxV7y-EkJ0fN2Z4XDhZVV-Ty8Iy27BQX5PLwjLbsFBYhrOfRlZGXubWjJQy-OwVBCITcI2OigDJCQdhCnrevY&_nc_ohc=nd2zcfrQn-kQ7kNvgFNxakm&_nc_oc=Adk6niSSD-o_pbqJhye3sf8BNGXor7E7SyjMzoyleePEkivANUGYHTTNyKLoBpMXY_8&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=IHNZERw4ID3GH6Nv1Zvidw&oh=00_AYFFuPAlcUSnLsIxBPgm8dV8KhGpwtctKYTcSIQnaeMo_g&oe=67E1E21D",
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/481090142_1052800946655481_9009005542754165241_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFsxV7y-EkJ0fN2Z4XDhZVV-Ty8Iy27BQX5PLwjLbsFBYhrOfRlZGXubWjJQy-OwVBCITcI2OigDJCQdhCnrevY&_nc_ohc=nd2zcfrQn-kQ7kNvgFNxakm&_nc_oc=Adk6niSSD-o_pbqJhye3sf8BNGXor7E7SyjMzoyleePEkivANUGYHTTNyKLoBpMXY_8&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=IHNZERw4ID3GH6Nv1Zvidw&oh=00_AYFFuPAlcUSnLsIxBPgm8dV8KhGpwtctKYTcSIQnaeMo_g&oe=67E1E21D",
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/481090142_1052800946655481_9009005542754165241_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFsxV7y-EkJ0fN2Z4XDhZVV-Ty8Iy27BQX5PLwjLbsFBYhrOfRlZGXubWjJQy-OwVBCITcI2OigDJCQdhCnrevY&_nc_ohc=nd2zcfrQn-kQ7kNvgFNxakm&_nc_oc=Adk6niSSD-o_pbqJhye3sf8BNGXor7E7SyjMzoyleePEkivANUGYHTTNyKLoBpMXY_8&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=IHNZERw4ID3GH6Nv1Zvidw&oh=00_AYFFuPAlcUSnLsIxBPgm8dV8KhGpwtctKYTcSIQnaeMo_g&oe=67E1E21D",
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/481090142_1052800946655481_9009005542754165241_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFsxV7y-EkJ0fN2Z4XDhZVV-Ty8Iy27BQX5PLwjLbsFBYhrOfRlZGXubWjJQy-OwVBCITcI2OigDJCQdhCnrevY&_nc_ohc=nd2zcfrQn-kQ7kNvgFNxakm&_nc_oc=Adk6niSSD-o_pbqJhye3sf8BNGXor7E7SyjMzoyleePEkivANUGYHTTNyKLoBpMXY_8&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=IHNZERw4ID3GH6Nv1Zvidw&oh=00_AYFFuPAlcUSnLsIxBPgm8dV8KhGpwtctKYTcSIQnaeMo_g&oe=67E1E21D",
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/481090142_1052800946655481_9009005542754165241_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFsxV7y-EkJ0fN2Z4XDhZVV-Ty8Iy27BQX5PLwjLbsFBYhrOfRlZGXubWjJQy-OwVBCITcI2OigDJCQdhCnrevY&_nc_ohc=nd2zcfrQn-kQ7kNvgFNxakm&_nc_oc=Adk6niSSD-o_pbqJhye3sf8BNGXor7E7SyjMzoyleePEkivANUGYHTTNyKLoBpMXY_8&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=IHNZERw4ID3GH6Nv1Zvidw&oh=00_AYFFuPAlcUSnLsIxBPgm8dV8KhGpwtctKYTcSIQnaeMo_g&oe=67E1E21D",
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/481090142_1052800946655481_9009005542754165241_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFsxV7y-EkJ0fN2Z4XDhZVV-Ty8Iy27BQX5PLwjLbsFBYhrOfRlZGXubWjJQy-OwVBCITcI2OigDJCQdhCnrevY&_nc_ohc=nd2zcfrQn-kQ7kNvgFNxakm&_nc_oc=Adk6niSSD-o_pbqJhye3sf8BNGXor7E7SyjMzoyleePEkivANUGYHTTNyKLoBpMXY_8&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=IHNZERw4ID3GH6Nv1Zvidw&oh=00_AYFFuPAlcUSnLsIxBPgm8dV8KhGpwtctKYTcSIQnaeMo_g&oe=67E1E21D",
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/481090142_1052800946655481_9009005542754165241_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFsxV7y-EkJ0fN2Z4XDhZVV-Ty8Iy27BQX5PLwjLbsFBYhrOfRlZGXubWjJQy-OwVBCITcI2OigDJCQdhCnrevY&_nc_ohc=nd2zcfrQn-kQ7kNvgFNxakm&_nc_oc=Adk6niSSD-o_pbqJhye3sf8BNGXor7E7SyjMzoyleePEkivANUGYHTTNyKLoBpMXY_8&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=IHNZERw4ID3GH6Nv1Zvidw&oh=00_AYFFuPAlcUSnLsIxBPgm8dV8KhGpwtctKYTcSIQnaeMo_g&oe=67E1E21D",
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/481090142_1052800946655481_9009005542754165241_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFsxV7y-EkJ0fN2Z4XDhZVV-Ty8Iy27BQX5PLwjLbsFBYhrOfRlZGXubWjJQy-OwVBCITcI2OigDJCQdhCnrevY&_nc_ohc=nd2zcfrQn-kQ7kNvgFNxakm&_nc_oc=Adk6niSSD-o_pbqJhye3sf8BNGXor7E7SyjMzoyleePEkivANUGYHTTNyKLoBpMXY_8&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=IHNZERw4ID3GH6Nv1Zvidw&oh=00_AYFFuPAlcUSnLsIxBPgm8dV8KhGpwtctKYTcSIQnaeMo_g&oe=67E1E21D",
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/481090142_1052800946655481_9009005542754165241_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFsxV7y-EkJ0fN2Z4XDhZVV-Ty8Iy27BQX5PLwjLbsFBYhrOfRlZGXubWjJQy-OwVBCITcI2OigDJCQdhCnrevY&_nc_ohc=nd2zcfrQn-kQ7kNvgFNxakm&_nc_oc=Adk6niSSD-o_pbqJhye3sf8BNGXor7E7SyjMzoyleePEkivANUGYHTTNyKLoBpMXY_8&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=IHNZERw4ID3GH6Nv1Zvidw&oh=00_AYFFuPAlcUSnLsIxBPgm8dV8KhGpwtctKYTcSIQnaeMo_g&oe=67E1E21D",
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/481090142_1052800946655481_9009005542754165241_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFsxV7y-EkJ0fN2Z4XDhZVV-Ty8Iy27BQX5PLwjLbsFBYhrOfRlZGXubWjJQy-OwVBCITcI2OigDJCQdhCnrevY&_nc_ohc=nd2zcfrQn-kQ7kNvgFNxakm&_nc_oc=Adk6niSSD-o_pbqJhye3sf8BNGXor7E7SyjMzoyleePEkivANUGYHTTNyKLoBpMXY_8&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=IHNZERw4ID3GH6Nv1Zvidw&oh=00_AYFFuPAlcUSnLsIxBPgm8dV8KhGpwtctKYTcSIQnaeMo_g&oe=67E1E21D",
  ],
  className,
}: {
  images?: string[];
  className?: string;
}) => {
  const timelines = [
    {
      date: "02/06",
      title: "Khởi động",
    },
    {
      date: "03/06 - 15/06",
      title: "Mở cổng đăng ký",
    },
    {
      date: "16/06 - 20/07",
      title: "Tiến hành ôn luyện",
    },
    {
      date: "21/07 - 27/07",
      title: "Ôn luyện tăng cường",
    },
    {
      date: "03/08",
      title: "Thi đấu",
    },
  ];

  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className="">
      <h1 className="text-3xl font-medium mb-1">TIMELINE CUỘC THI</h1>
      <div className="max-w-[60rem] w-full mx-auto">
        {timelines.map((item, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center justify-between text-lg font-medium p-2 rounded hover:bg-[#a6efff] hover:text-gray-900 transition-colors duration-300",
              index % 2 === 0 ? "text-[#a6efff]" : "text-[#d8d8d8]"
            )}
          >
            <span>{item.date}</span>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <Spacer count={4} />
    </div>
  );
};

export default Timeline;
