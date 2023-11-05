import React from "react";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import Float from "@/components/animations/Float";
import VendorForm from "@/components/VendorForm";
import vendor from "@/public/images/vendor.webp";
import vendor2 from "@/public/images/vendor2.jpg";
import vendor3 from "@/public/images/vendor3.webp";
import StaggerContainer from "@/components/animations/StaggerContainer";
import Section from "@/components/global/Section";

const page = () => {
  return (
    <>
      <Section>
        <div className="mx-auto flex max-w-screen-2xl flex-col px-6 lg:px-36 xl:flex-row xl:px-40">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-96 xl:h-auto xl:basis-1/2">
            <Float
              delay={0}
              className="absolute left-[10%] top-[8%] aspect-[4/3] w-[50%] overflow-hidden rounded-lg md:left-[20%] md:w-[35%] lg:left-[10%] lg:w-[45%] xl:left-0 xl:w-[80%]"
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
              className="absolute right-[10%] top-[30%] aspect-[4/3] w-[40%] overflow-hidden rounded-lg md:right-[23%] md:w-[28%] lg:right-[20%] lg:w-[35%] xl:right-[5%] xl:top-[40%] xl:w-[60%]"
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
              className="absolute left-[25%] top-[50%] aspect-[4/3] w-[30%] overflow-hidden rounded-lg md:left-[33%] md:top-[58%] md:w-[20%] lg:left-[25%] lg:w-[25%] xl:left-[10%] xl:top-[45%] xl:w-[45%]"
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
          <StaggerContainer
            selector=".stagger"
            viewportAmount={0.1}
            yOffset={100}
            duration={1.5}
            staggerChildren={0.15}
            delayChildren={0}
            className="sm:mt-6 xl:basis-1/2"
          >
            <h1 className="stagger mb-6 text-center text-2xl font-extrabold [word-spacing:5px] sm:text-4xl">Sell a Product or Service on Oshofree</h1>
            <div className="stagger mx-auto mb-6 sm:w-[70%] xl:w-auto">
              <p className="text-sm [word-spacing:3px] sm:text-base">
                Reach New Customers. Showcase Your Deals on Products and Services. Build Loyalty. Get Started Today!
              </p>
            </div>
            <VendorForm className={"stagger"} />
          </StaggerContainer>
        </div>
      </Section>
      <Section>
        <StaggerContainer selector=".stagger" viewportAmount={0.1} yOffset={50} duration={1.5} staggerChildren={0.15} delayChildren={0}>
          <h1 className="stagger mb-11 mt-6 text-center text-2xl font-extrabold capitalize sm:text-3xl">Why Use Oshofree</h1>
          <section className="mx-auto max-w-[1328px] space-y-10 px-6 lg:px-8 xl:px-32 2xl:px-14">
            <div className="stagger mx-auto max-w-3xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias reprehenderit totam, quasi quae libero assumenda eligendi laborum
              iure sunt voluptates itaque ducimus quos esse maiores dolores aut fugiat iste? Nisi, reprehenderit! Deserunt consequuntur nulla minus
              quo quia ipsa voluptatum at. Beatae non neque earum eaque totam similique a, libero consectetur iusto eligendi ducimus laborum soluta
              sapiente aut quia voluptatibus fugiat corporis, nesciunt nulla exercitationem? Nihil, perferendis. Alias excepturi sunt dolorem
              laudantium optio laboriosam doloribus dolor rem, tenetur quisquam ratione reprehenderit saepe, dicta quos debitis nobis! Repudiandae
              sunt alias ipsum voluptatibus tempora perferendis unde, fugiat itaque officia praesentium ratione, necessitatibus veritatis.
            </div>
            <div className="stagger mx-auto max-w-3xl">
              <h2 className="mb-3 text-center text-2xl font-bold">Our Mission</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit molestiae facere, placeat neque ullam asperiores voluptatem ab. Iure
                beatae rerum debitis ducimus. Maiores corporis quisquam tempore quis, minima nisi at cupiditate doloremque, facere nulla impedit
                nostrum dolorum rem? Aliquid repudiandae magnam natus non voluptates incidunt reprehenderit. Fugit qui tempora eaque!
              </div>
            </div>
          </section>
        </StaggerContainer>
      </Section>
    </>
  );
};

export default page;
