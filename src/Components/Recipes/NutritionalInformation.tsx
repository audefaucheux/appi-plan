import React from "react";
import NutritionalInfo from "../../Types/NutritionalInfo";

interface NutritionalInfoProps {
  nutritionalInfo: NutritionalInfo;
}

const NutritionalInformation: React.FC<NutritionalInfoProps> = ({
  nutritionalInfo,
}) => {
  const { calories, protein, carbs, fat } = nutritionalInfo;
  return (
    <div>
      <p>Nutritional Information (per serving)</p>
      <div>Calories: {calories}</div>
      <div>Protein: {protein}</div>
      <div>Carbs: {carbs}</div>
      <div>Fat: {fat}</div>
    </div>
  );
};

export default NutritionalInformation;
