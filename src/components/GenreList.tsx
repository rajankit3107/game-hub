import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGeneres from "../Hooks/useGeners";
import getCroppedImageUrl from "../api/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGeneres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genere) => (
        <ListItem key={genere.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genere.image_background)}
            />
            <Text fontSize="large">{genere.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
