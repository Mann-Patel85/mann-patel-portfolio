import Image from "next/image";
import type { ProjectMedia as Media } from "@/data/portfolioData";

/** Renders one image or video in a 16:9 frame. */
export function ProjectMedia({
  media,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  media: Media;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/40">
        {media.type === "video" ? (
          <video
            src={media.src}
            poster={media.poster}
            controls
            muted
            playsInline
            preload="metadata"
            aria-label={media.alt}
            className="h-full w-full object-cover"
          />
        ) : (
          <Image src={media.src} alt={media.alt} fill sizes={sizes} priority={priority} className="object-cover" />
        )}
      </div>
      {media.caption && <figcaption className="mt-2 text-xs text-zinc-400">{media.caption}</figcaption>}
    </figure>
  );
}
