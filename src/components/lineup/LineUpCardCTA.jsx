"use client";
import Link from "next/link";
import Image from "next/image";
const url = process.env.NEXT_PUBLIC_API_URL; // data bliver inhentet fra .env.local

const LineUpCardCTA = ({ artistName, scene, dayOfPlaying, id, src, slug }) => {
  return (
    <Link key={id} href={`/lineup/${slug}`}>
      <li className="transition-all hover:z-10 hover:translate-y-[-10px] bg-background hover:translate-x-[-10px] hover:shadow-[15px_15px_0px_-5px_var(--foreground)] flex flex-col justify-between gap-s h-[100%] min-h-[300px]  max-w-[300px] relative w-fit border-2 border-foreground p-5">
        <span className="absolute top-1.5 left-0 font-bold text-text backdrop: border-l-0 text-text  bg-background text-foreground w-fit py-2 px-s  rounded-r-full  border-2 border-foreground text-nowrap text-center">
          {scene}
        </span>
        <Image
          src={src.startsWith("https") ? src : `${url}logos/${src}`}
          alt={`image of the band ${artistName}`}
          height={500}
          width={500}
          className="border-2 border-foreground h-[100%] object-cover"
        />

        <div className="flex halfround-right text-wrap absolute bottom-2 left-0  md:relative w-fit max-w-[90%]">
          {artistName}
        </div>
      </li>
    </Link>
  );
};

export default LineUpCardCTA;
