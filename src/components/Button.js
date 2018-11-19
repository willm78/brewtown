import React from "react";
import Colors from "../common/Colors";
import { View, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { Text } from "../common/F8Text";

/* constants ================================================================ */

const BUTTON_HEIGHT = 52,
  BUTTON_HEIGHT_SM = 32;

/* <Button />
============================================================================= */

class Button extends React.Component {
  static defaultProps = {
    opacity: 1,
    theme: "pink"
  };

  static height = BUTTON_HEIGHT;

  render() {
    const { icon, fontSize, opacity } = this.props;
    const caption = this.props.caption && this.props.caption.toUpperCase();
    const { buttonTheme, iconTheme, captionTheme } = this.getTheme();
    const { containerType, buttonType, iconType, captionType } = this.getType();

    let iconImage;
    if (icon) {
      iconImage = (
        <Image source={icon} style={[styles.icon, iconTheme, iconType]} />
      );
    }

    let fontSizeOverride;
    if (fontSize) {
      fontSizeOverride = { fontSize };
    }

    const content = (
      <View style={[styles.button, buttonTheme, buttonType, { opacity }]}>
        {iconImage}
        <Text
          style={[styles.caption, captionTheme, captionType, fontSizeOverride]}
        >
          {caption}
        </Text>
      </View>
    );

    if (this.props.onPress) {
      return (
        <TouchableOpacity
          accessibilityTraits="button"
          onPress={this.props.onPress}
          activeOpacity={0.5}
          style={[styles.container, containerType, this.props.style]}
        >
          {content}
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={[styles.container, containerType, this.props.style]}>
          {content}
        </View>
      );
    }
  }

  getTheme() {
    const { theme } = this.props;
    let buttonTheme, iconTheme, captionTheme;
    if (theme === "yellow") {
      buttonTheme = { backgroundColor: Colors.yellow };
      iconTheme = { tintColor: Colors.pink };
      captionTheme = { color: Colors.pink };
    } else if (theme === "blue") {
      buttonTheme = { backgroundColor: Colors.blue };
      iconTheme = { tintColor: Colors.white };
      captionTheme = { color: Colors.white };
    } else if (theme === "fb") {
      buttonTheme = { backgroundColor: Colors.facebookBlue };
      iconTheme = { tintColor: Colors.white };
      captionTheme = { color: Colors.white };
    } else if (theme === "white") {
      buttonTheme = { backgroundColor: Colors.white };
      iconTheme = { tintColor: Colors.pink };
      captionTheme = { color: Colors.pink };
    } else if (theme === "bordered") {
      buttonTheme = {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: Colors.tangaroa
      };
      iconTheme = { tintColor: Colors.tangaroa };
      captionTheme = { color: Colors.tangaroa };
    } else if (theme === "bordered-pink") {
      buttonTheme = {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: Colors.pink
      };
      iconTheme = { tintColor: Colors.pink };
      captionTheme = { color: Colors.pink };
    } else if (theme === "maps") {
      buttonTheme = {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: Colors.purple
      };
      iconTheme = { tintColor: Colors.tangaroa };
      captionTheme = { color: Colors.tangaroa };
    } else if (theme === "mapsInactive") {
      buttonTheme = {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "transparent"
      };
      iconTheme = { tintColor: Colors.tangaroa };
      captionTheme = { color: Colors.tangaroa };
    } else if (theme === "disabled") {
      buttonTheme = { backgroundColor: Colors.blueBayoux };
      iconTheme = { tintColor: Colors.white, opacity: 0.5 };
      captionTheme = { color: Colors.white, opacity: 0.5 };
    } else if (theme === "transparent") {
      buttonTheme = { backgroundColor: "transparent" };
      iconTheme = { tintColor: Colors.tangaroa };
      captionTheme = { color: Colors.tangaroa };
    } else {
      // pink/white is default
      buttonTheme = { backgroundColor: Colors.pink };
      iconTheme = { tintColor: "white" };
      captionTheme = { color: "white" };
    }

    return { buttonTheme, iconTheme, captionTheme };
  }

  getType() {
    const { type } = this.props;
    let containerType, buttonType, iconType, captionType;

    if (type === "round") {
      buttonType = { width: BUTTON_HEIGHT, paddingHorizontal: 0 };
      iconType = { marginRight: 0 };
      captionType = { fontSize: 13 };
    } else if (type === "small") {
      containerType = { height: BUTTON_HEIGHT_SM };
      buttonType = { paddingHorizontal: 15 };
      iconType = { marginRight: 0 };
      captionType = { fontSize: 13 };
    } else {
      // defaults
    }

    return { containerType, buttonType, iconType, captionType };
  }
}

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  container: {
    height: BUTTON_HEIGHT
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    borderRadius: BUTTON_HEIGHT / 2
  },
  buttonRound: {
    width: BUTTON_HEIGHT,
    paddingHorizontal: 0
  },
  icon: {
    marginRight: 12
  },
  caption: {
    fontSize: 15,
    textAlign: "center"
  }
});

/* Exports
============================================================================= */
export default Button;
