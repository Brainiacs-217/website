import Image from "next/image";
import { showcaseModules } from "@/lib/systemModules";

export function SystemShowcase() {
  const showcaseImage = showcaseModules[0]?.image;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-[1200px] mt-8 mb-8">
      <div className="flex flex-col gap-2 md:aspect-square md:min-h-0">
        {showcaseModules.map((item, i) => (
          <div
            key={item.id}
            className="flex flex-1 flex-col justify-center border border-border-default px-4 py-3 min-h-0"
          >
            <div className="flex items-start gap-4">
              <span className="text-xs font-medium mt-1 text-text-primary">
                {String(i + 1).padStart(2, "0")}.
              </span>
              <span className="text-lg font-semibold text-text-primary">
                {item.name}
              </span>
            </div>
            <p className="type-body-sm pl-8 mt-2 line-clamp-2">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="relative aspect-square overflow-hidden shadow-lg">
        {showcaseImage && (
          <Image
            src={showcaseImage}
            alt="B.O.B. system"
            fill
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
}
