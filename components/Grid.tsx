import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about" className="flex items-center justify-center min-h-screen">
      <BentoGrid className="w-full py-30">
        {gridItems.map((item, i) => (
          <BentoGridItem
            title={item.title}
            id={item.id}
            key={i}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
            skills={item.skills}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
