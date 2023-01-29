import React from "react";

type SectionHeaderProps = {
  title: string;
};

const FooterColHeader: React.FunctionComponent<SectionHeaderProps> = ({
  title,
}) => {
  return (
    <div>
      <h1 className="text-xl mb-4 md:text-2xl font-bold relative before:h-[2px] before:-left-2 before:bg-neutral-300 before:w-12 before:absolute before:rounded before:-bottom-1">
        {title}
      </h1>
    </div>
  );
};

export default FooterColHeader;
