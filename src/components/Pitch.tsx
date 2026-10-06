import React from "react";
import DetailCard from "./DetailCard";

interface PitchProps {
  onOpenBooking: () => void;
}

const Pitch: React.FC<PitchProps> = ({ onOpenBooking }) => {
  return (
    <div className="sm:absolute z-10">
      <div className="-top-12 sm:-top-[22rem] md:-top-[25rem] lg:-top-[27rem] relative max-w-xl">
        <DetailCard
          heading="medical"
          title="healthcare solutions"
          detail="Des solutions de santé complètes et accessibles. Consultez nos praticiens certifiés, prenez vos rendez-vous médicaux en ligne et accédez à vos suivis de soins en quelques clics."
          isbutton
          buttontitle="Find a doctor"
          special
          styles="sm:w-full"
          onButtonClick={onOpenBooking}
        />
      </div>
    </div>
  );
};

export default Pitch;
