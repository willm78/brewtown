import React from "react";
import { connect } from "react-redux";
import {
  Animated,
  Dimensions,
  Image,
  StatusBar,
  View,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import { skipLogIn } from "../actions/login";

// Just Testing these out
import Colors from "../common/Colors";
import { Text, Heading1 } from "../common/F8Text";

import FbLoginButton from "../containers/FacebookLogInButton";
//

const SKIP_BTN_HEIGHT = 24,
  WINDOW_WIDTH = Dimensions.get("window").width,
  WINDOW_HEIGHT = Dimensions.get("window").height,
  VERTICAL_BREAKPOINT = WINDOW_HEIGHT <= 600,
  HEADER_HEIGHT = VERTICAL_BREAKPOINT ? 220 : 285,
  SKIP_BTN_MARGIN_TOP = VERTICAL_BREAKPOINT ? 15 : 23,
  WHENWHERE_PADDING_TOP = VERTICAL_BREAKPOINT ? 12 : 18,
  RENDER_IMAGE_SECTION = VERTICAL_BREAKPOINT ? false : true,
  LOGIN_PADDING_BOTTOM = VERTICAL_BREAKPOINT ? 20 : 33,
  CONTENT_PADDING_H = VERTICAL_BREAKPOINT ? 15 : 20;

class LoginScreen extends React.Component {
  state = {
    anim: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(this.state.anim, { toValue: 3000, duration: 3000 }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.mainHeadingSection}>
            <Animated.View style={this.fadeIn(500, 5)}>
              <Heading1 style={styles.h1}>Brewtown</Heading1>
            </Animated.View>
            <Animated.Text
              style={[styles.whenWhereText, this.fadeIn(1200, 10)]}
            >
              Where homebrewers are first class citizens.
            </Animated.Text>
          </View>

          {this.renderImageSection()}

          <Animated.View style={[styles.loginSection, this.fadeIn(1900, 20)]}>
            <Text style={styles.loginComment}>
              Use Facebook to find your friends on Brewtown.
            </Text>
            <FbLoginButton />
            <TouchableOpacity
              onPress={_ => this.props.dispatch(skipLogIn())}
              style={styles.skipButton}
            >
              <Text style={styles.skipText}>SKIP FOR NOW</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    );
  }

  renderImageSection() {
    if (RENDER_IMAGE_SECTION) {
      return (
        <Animated.View style={[styles.imageSection, this.fadeIn(1500, 15)]}>
          <Image
            source={require("../../assets/beer.png")}
            style={{ width: 150, height: 150 }}
          />
        </Animated.View>
      );
    } else {
      return null;
    }
  }

  fadeIn(delay, from = 0) {
    const { anim } = this.state;
    return {
      opacity: anim.interpolate({
        inputRange: [delay, Math.min(delay + 500, 3000)],
        outputRange: [0, 1],
        extrapolate: "clamp"
      }),
      transform: [
        {
          translateY: anim.interpolate({
            inputRange: [delay, Math.min(delay + 500, 3000)],
            outputRange: [from, 0],
            extrapolate: "clamp"
          })
        }
      ]
    };
  }
}

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bianca
  },

  //header styles
  header: {
    height: HEADER_HEIGHT,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  headerPattern: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    height: HEADER_HEIGHT - 30
  },
  headerIllustration: {
    position: "absolute",
    left: 0,
    width: WINDOW_WIDTH,
    bottom: 80
  },

  content: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: CONTENT_PADDING_H
  },

  h1: {
    marginTop: 16,
    textAlign: "center",
    color: Colors.blueBayoux,
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 2
  },
  whenWhereText: {
    marginTop: WHENWHERE_PADDING_TOP,
    textAlign: "center",
    color: Colors.tangaroa
  },

  imageSection: {
    alignItems: "center",
    justifyContent: "center"
  },

  loginSection: {
    paddingBottom: LOGIN_PADDING_BOTTOM,
    alignItems: "center",
    paddingHorizontal: 20
  },
  loginComment: {
    textAlign: "center",
    fontSize: 15,
    color: Colors.blueBayoux,
    marginBottom: 23
  },
  skipButton: {
    marginTop: SKIP_BTN_MARGIN_TOP,
    height: SKIP_BTN_HEIGHT,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center"
  },
  skipText: {
    color: Colors.colorWithAlpha("tangaroa", 0.5)
  }
});

/* Export
============================================================================= */
module.exports = connect()(LoginScreen);
