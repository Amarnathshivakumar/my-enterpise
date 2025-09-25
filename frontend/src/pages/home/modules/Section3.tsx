/**
 * =====================================================
 *  NAME    : Section3.tsx
 *  DATE      : 25/09/2025
 *  DATE_MODIFY       : 25/09/2025
 *  DESCRIPTION: SECTION 3 FOR HOME PAGE
 * =====================================================
 */

// DEPENDENCIES
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// LOGIC
type Section3Props = {
  t: (key: string) => string;
};

// SECTION 2
const Section3: React.FC<Section3Props> = ({ t }) => {
  const cards = ["card1", "card2", "card3", "card4", "card5"];
  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white grid grid-rows-2 gap-8 w-full p-10">
      <article className="flex flex-col text-center items-center lg:p-20 space-y-4 z-10 w-full h-full">
        <h4 className="font-bold lg:text-6xl">{t("home.text-5")}</h4>
        <p className="lg:text-2xl font-light">{t("home.text-6")}</p>
      </article>
      <div className="w-full overflow-hidden">
        <Carousel className="w-full max-w-4xl mx-auto relative">
          <CarouselContent className="-ml-2 flex gap-4 max-h-full">
            {cards.map((cardKey, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-start justify-start p-6 h-70 overflow-y-auto">
                      <h4 className="text-xl font-bold mb-2">
                        {t(`home.${cardKey}-title`)}
                      </h4>
                      <p className="text-base font-light">
                        {t(`home.${cardKey}-text`)}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-20" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-20" />
        </Carousel>
      </div>
    </section>
  );
};

export default Section3;
