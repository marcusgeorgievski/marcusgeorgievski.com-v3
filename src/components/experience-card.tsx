import Image from "next/image";

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  description: string;
  image: string;
}

export default function ExperienceCard({
  title,
  company,
  date,
  description,
  image,
}: ExperienceCardProps) {
  return (
    <div className="w-full grid grid-cols-[45px,auto]  max-w-[700px]">
      <Image
        src={image}
        alt="logo"
        width={30}
        height={30}
        className="rounded-sm"
      />
      <div>
        <p className="font-semibold">{title}</p>
        <div className="flex items-baseline justify-between w-full">
          <p className="text-slate-200 text-sm ">{company}</p>
          <p className="text-xs text-slate-500 ">{date}</p>
        </div>
        <div className="mb-4"></div>
        <p className="text-sm text-muted-foreground leading-6/">
          {description}
        </p>
      </div>
    </div>
  );
}
