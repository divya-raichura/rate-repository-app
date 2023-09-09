import { View, Text, Image } from "react-native";

const RepositoryItem = ({ repository }) => {
  return (
    <View>
      <Image
        source={{ uri: repository.ownerAvatarUrl }}
        style={{ width: 50, height: 50 }} // Adjust image styles as needed
      />
      <Text>{repository.fullName}</Text>
      <Text>{repository.description}</Text>
      {/* Render other item details here */}
    </View>
  );
};

export default RepositoryItem;
