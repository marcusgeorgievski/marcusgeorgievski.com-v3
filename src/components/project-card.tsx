import Image from "next/image";
import Tag from "./tag";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github?: string;
  live?: string;
  tags?: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  github,
  live,
  tags,
}: ProjectCardProps) {
  return (
    <Link
      href={live! || github!}
      target="_blank"
      className="md:gap-8 p-4 w-full transition-all hover:bg-accent/40 rounded group/project "
    >
      <Image
        src={image}
        width={1200}
        height={100}
        alt={title}
        className="rounded border mb-4 aspect-video object-cover"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="group-hover/project:pl-2 transition-all">
        <p className="font-semibold text-lg mb-2">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        {tags && (
          <div className="flex gap-2 mt-4 flex-wrap">
            {tags.map((tag, i) => (
              <Tag key={i} tag={tag}>
                {tag}
              </Tag>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
