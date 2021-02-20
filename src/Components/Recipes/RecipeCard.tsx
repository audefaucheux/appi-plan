import React, { useState } from "react";
import Recipe from "../../Types/Recipe";
import RecipePreview from "./RecipePreview";
import placeholderImage from "../../images/placeholder-image.png";
import { Box, Image } from "@chakra-ui/react";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const [openPreview, setOpenPreview] = useState<boolean>(false);

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{
        background: "#E8E8E8",
      }}
      onClick={() => setOpenPreview(true)}
    >
      <Image p={[2]} w="100%" src={placeholderImage} alt="placeholderImage" />
      <Box p={[2]}>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          <div>{recipe.title}</div>
          {openPreview && <RecipePreview {...{ recipe, setOpenPreview }} />}
        </Box>
      </Box>
    </Box>
  );
};

export default RecipeCard;
