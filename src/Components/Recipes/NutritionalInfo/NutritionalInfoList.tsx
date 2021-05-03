import React, { FC } from "react";
import NutritionalInfo from "../../../Types/NutritionalInfo";

interface NutritionalInfoListProps {
  nutritionalInfo: NutritionalInfo;
}

const NutritionalInfoList: FC<NutritionalInfoListProps> = ({ nutritionalInfo }) => {
  const { calories, protein, carbs, fat } = nutritionalInfo;
  return (
    <div>
      <h3>Nutritional Information (per serving)</h3>
      <div>Calories: {calories}</div>
      <div>Protein: {protein}</div>
      <div>Carbs: {carbs}</div>
      <div>Fat: {fat}</div>
    </div>
  );
};

export default NutritionalInfoList;
