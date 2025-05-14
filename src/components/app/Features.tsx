import React, { ReactElement } from "react";

interface Features {
  SvgFile: ReactElement;
  feature: string;
  desc: string;
}

const Features: React.FC<Features> = ({ SvgFile, feature, desc }) => {
  return (
    <div>
     
      <div className="flex mt-5 ml-9 items-center">
         
         {SvgFile} 

        <h3 className="pl-4 font-bold text-lg">{feature}</h3>
     
          </div>
        <p className="ml-9 mt-3 whitespace-pre-line flex-col leading-relaxed text-slate-600">
         {desc}
        </p>
        <br />
    </div>
  );
};

export default Features;
