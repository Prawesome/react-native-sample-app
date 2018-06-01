import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("md-share-alt", 30)
  ]).then(source => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-places.FindPlaceScreen",
          label: "Find Place",
          title: "Find Place",
          icon: source[0]
        },
        {
          screen: "awesome-places.SharePlaceScreen",
          label: "Share Place",
          title: "Share Place",
          icon: source[1]
        }
      ]
    });
  });

  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: "awesome-places.FindPlaceScreen",
        label: "Find Place",
        title: "Find Place"
      },
      {
        screen: "awesome-places.SharePlaceScreen",
        label: "Share Place",
        title: "Share Place"
      }
    ]
  });
};

export default startTabs;
