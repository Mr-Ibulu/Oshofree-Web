import React from "react";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import FadeInFromSides from "@/components/animations/FadeInFromSides";
import Float from "@/components/animations/Float";
import SnapSection from "@/components/global/SnapSection";
import VendorForm from "@/components/VendorForm";
import vendor from "@/public/images/vendor.webp";
import vendor2 from "@/public/images/vendor2.jpg";
import vendor3 from "@/public/images/vendor3.webp";

const page = () => {
  return (
    <>
      <SnapSection nextSectionTitle={"Why Use Oshofree"} className="pt-20">
        <div className="flex flex-col xl:flex-row px-6 lg:px-36 xl:px-40  max-w-screen-2xl mx-auto">
          <div className="xl:basis-1/2 relative h-64 sm:h-80 lg:h-96 xl:h-auto overflow-hidden">
            <Float
              delay={0}
              className="aspect-[4/3] w-[50%] md:w-[35%] lg:w-[45%] xl:w-[80%] absolute left-[10%] md:left-[20%] lg:left-[10%] xl:left-0 top-[8%] overflow-hidden rounded-lg"
            >
              <ImageWithPlaceholder
                src={vendor3}
                alt={"vendor"}
                fill={true}
                sizes={"(max-width: 768px) 30vw, (max-width: 1200px) 70vw, 100vw"}
                priority={true}
                className={"object-cover"}
              />
            </Float>
            <Float
              delay={1}
              className="aspect-[4/3] w-[40%] md:w-[28%] lg:w-[35%] xl:w-[60%] absolute right-[10%] md:right-[23%] lg:right-[20%] xl:right-[5%] top-[30%] xl:top-[40%] overflow-hidden rounded-lg"
            >
              <ImageWithPlaceholder
                src={vendor}
                alt={"vendor"}
                fill={true}
                sizes={"(max-width: 768px) 30vw, (max-width: 1200px) 70vw, 100vw"}
                priority={true}
                className={"object-cover"}
              />
            </Float>
            <Float
              delay={2}
              className="aspect-[4/3] w-[30%] md:w-[20%] lg:w-[25%] xl:w-[45%] absolute top-[50%] md:top-[58%] xl:top-[45%] left-[25%] md:left-[33%] lg:left-[25%] xl:left-[10%] overflow-hidden rounded-lg"
            >
              <ImageWithPlaceholder
                src={vendor2}
                alt={"vendor"}
                fill={true}
                sizes={"(max-width: 768px) 30vw, (max-width: 1200px) 70vw, 100vw"}
                priority={true}
                className={"object-cover"}
              />
            </Float>
          </div>
          <div className="sm:mt-6 mb-10 xl:basis-1/2">
            <FadeInFromSides yOffset={100} delay={0.1}>
              <h1 className="text-2xl sm:text-4xl font-extrabold [word-spacing:5px] mb-6 text-center">Sell a Product or Service on Oshofree</h1>
            </FadeInFromSides>
            <FadeInFromSides yOffset={100} delay={0.3}>
              <div className="mb-6  sm:w-[70%] xl:w-auto mx-auto">
                <p className="[word-spacing:3px] text-sm sm:text-base">
                  Reach New Customers. Showcase Your Deals on Products and Services. Build Loyalty. Get Started Today!
                </p>
              </div>
            </FadeInFromSides>
            <FadeInFromSides yOffset={100} delay={0.4} viewportAmount={0.1}>
              <VendorForm />
            </FadeInFromSides>
          </div>
        </div>
      </SnapSection>
      <SnapSection nextSectionTitle={""} className="pt-20">
        <FadeInFromSides duration={0.7} yOffset={20} viewportAmount={0.1} delay={0.2} className="mt-6 mb-11 text-center capitalize">
          <h1 className="text-2xl sm:text-3xl font-extrabold">Why Use Oshofree</h1>
        </FadeInFromSides>
        <section className="px-6 py-3 lg:px-28 xl:px-32 2xl:px-14 max-w-[1328px] mx-auto space-y-10">
          <FadeInFromSides duration={0.7} yOffset={20} viewportAmount={0.1} delay={0.3} className="max-w-3xl mx-auto">
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias reprehenderit totam, quasi quae libero assumenda eligendi laborum
              iure sunt voluptates itaque ducimus quos esse maiores dolores aut fugiat iste? Nisi, reprehenderit! Deserunt consequuntur nulla minus
              quo quia ipsa voluptatum at. Beatae non neque earum eaque totam similique a, libero consectetur iusto eligendi ducimus laborum soluta
              sapiente aut quia voluptatibus fugiat corporis, nesciunt nulla exercitationem? Nihil, perferendis. Alias excepturi sunt dolorem
              laudantium optio laboriosam doloribus dolor rem, tenetur quisquam ratione reprehenderit saepe, dicta quos debitis nobis! Repudiandae
              sunt alias ipsum voluptatibus tempora perferendis unde, fugiat itaque officia praesentium ratione, necessitatibus veritatis.
            </div>
          </FadeInFromSides>
          <FadeInFromSides duration={0.7} yOffset={20} viewportAmount={0.1} delay={0.4} className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-3 text-center">Our Mission</h2>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit molestiae facere, placeat neque ullam asperiores voluptatem ab. Iure
              beatae rerum debitis ducimus. Maiores corporis quisquam tempore quis, minima nisi at cupiditate doloremque, facere nulla impedit nostrum
              dolorum rem? Aliquid repudiandae magnam natus non voluptates incidunt reprehenderit. Fugit qui tempora eaque!
            </div>
          </FadeInFromSides>
        </section>
      </SnapSection>
    </>
  );
};

export default page;
