"use client";

import Link from "next/link";
import Image from "next/image";

export default function Launches({ launch }) {


  return (
    <div className="text-center border p-3 rounded">
      <Link href={`${launch.id}`}>
        {launch.links.patch.small && (
          <Image
            src={launch.links.patch.small}
            alt="Launch image"
            width={300}
            height={300}
            priority={true}
          />
        )}
        <h1>{launch.name}</h1>
        <p>{launch.date_local}</p>
      </Link>
    </div>
  );
}
