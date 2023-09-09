import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40 / 10,
  },
  avatarContainer: {
    paddingRight: 15,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  infoContainer: {
    flexDirection: "column",
    rowGap: 3,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 25,
  },
  language: {
    backgroundColor: "#3457D5",
    padding: 4,
    marginTop: 4,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  stats: {
    alignItems: "center",
  },
});

const RepositoryItem = ({ repository }) => {
  const formatCount = (count) => {
    if (count >= 1000) {
      reducedCount = Math.floor(count / 1000);
      remainder = reducedCount % 10;
      console.log("count", count);
      console.log("reduced", reducedCount);
      console.log(remainder);

      return `${reducedCount}.${remainder}k`;
    }

    return count;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: repository.ownerAvatarUrl }}
            style={styles.avatar}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text fontWeight="bold" color="black" fontSize="subheading">
            {repository.fullName}
          </Text>
          <Text color="grey">{repository.description}</Text>
          <View style={styles.language}>
            <Text style={{ color: "#ffffff" }}>{repository.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.stats}>
          <Text fontWeight="bold">
            {formatCount(repository.stargazersCount)}
          </Text>
          <Text color="grey">Stars</Text>
        </View>
        <View style={styles.stats}>
          <Text fontWeight="bold">{repository.forksCount}</Text>
          <Text color="grey">Forks</Text>
        </View>
        <View style={styles.stats}>
          <Text fontWeight="bold">{repository.reviewCount}</Text>
          <Text color="grey">Reviews</Text>
        </View>
        <View style={styles.stats}>
          <Text fontWeight="bold">{repository.ratingAverage}</Text>
          <Text color="grey">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
