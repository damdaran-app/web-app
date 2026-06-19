"use client";
import { TCustomAccordion } from "@/utils/types";
import { Accordion, AccordionItem } from "@heroui/react";
import { FC } from "react";

const CustomAccordion: FC<TCustomAccordion> = ({
  title,
  description,
  index,
}) => {
  return (
    <div className="accordion-container" data-aos="flip-down">
      <Accordion
        // variant="splitted"
        selectionMode="single"
        isCompact
        itemClasses={{
          base: "bg-white border border-border rounded-2xl rounded-xl transition-colors duration-300",
          title:
            "text-xl font-medium text-dark group-data-[open=true]:text-primary transition-colors duration-200 max-md:text-[16px]",
          trigger:
            "px-5 py-4 flex justify-between items-center data-[open=true]:text-primary",
          indicator:
            "text-gray group-data-[open=true]:rotate-90 transition-transform duration-200 group-data-[open=true]:rotate-90",
          content: "px-5 pb-4 text-gray text-sm leading-8",
        }}
      >
        <AccordionItem key={index} aria-label={index.toString()} title={title}>
          {description}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CustomAccordion;
