import React, { FC, Dispatch, SetStateAction, ChangeEvent } from "react";
import NutritionalInfo from "../../../Types/NutritionalInfo";

interface NutritionalInfoFormProps {
  nutritionalInfo?: NutritionalInfo;
  setNutritionalInfo: Dispatch<SetStateAction<NutritionalInfo | undefined>>;
}

const NutritionalInfoForm: FC<NutritionalInfoFormProps> = ({
  nutritionalInfo,
  setNutritionalInfo,
}) => {
  const defaultNutritionalInfo: NutritionalInfo = {
    calories: nutritionalInfo?.calories || 0,
    fat: nutritionalInfo?.fat || 0,
    carbs: nutritionalInfo?.carbs || 0,
    protein: nutritionalInfo?.protein || 0,
  };
  const { calories, fat, carbs, protein } = defaultNutritionalInfo;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.name as keyof NutritionalInfo;
    defaultNutritionalInfo[field] = parseInt(event.target.value);
    setNutritionalInfo(defaultNutritionalInfo);
  };

  return (
    <div>
      <h3>Nutritional Information (per serving)</h3>
      <label htmlFor="calories">
        Calories:
        <input type="number" name="calories" value={calories} onChange={handleChange} />
      </label>
      <label htmlFor="protein">
        Protein:
        <input type="number" name="protein" value={protein} onChange={handleChange} />
      </label>
      <label htmlFor="carbs">
        Carbs:
        <input type="number" name="carbs" value={carbs} onChange={handleChange} />
      </label>
      <label htmlFor="fat">
        Fat:
        <input type="number" name="fat" value={fat} onChange={handleChange} />
      </label>
    </div>
  );
};

export default NutritionalInfoForm;
