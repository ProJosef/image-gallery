import Image from "next/image";
import type { Photo } from "@/models/Images";
import Link from "next/link";

type Props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;
  return (
    <div
      className="w-[250px] justify-self-center"
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <Link
        href={photo.url}
        target="_blank"
        className="grid place-content-center"
      >
        <div className="rounded-xl overflow-hidden group">
          <Image
            width={photo.width}
            height={photo.height}
            src={photo.src.large}
            alt={photo.alt}
            className="bg-gray-200 hover:opacity-75"
            style={{ gridRow: `span ${photoSpans}` }}
          />
        </div>
      </Link>
    </div>
  );
}
