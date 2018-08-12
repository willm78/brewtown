/**
 * Copyright 2016 Facebook, Inc.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to
 * use, copy, modify, and distribute this software in source code or binary
 * form for use in connection with the web services and APIs provided by
 * Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use
 * of this software is subject to the Facebook Developer Principles and
 * Policies [http://developers.facebook.com/policy/]. This copyright notice
 * shall be included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE
 * @flow
 */

"use strict";

// Dependencies
// =============================================================================

import React from "react";
import ReactNative from "react-native";
import Colors from "./Colors";
import StyleSheet from "./StyleSheet";

// Text Elements
// =============================================================================

export function Text({ style, ...props }) {
  return <ReactNative.Text style={[styles.text, style]} {...props} />;
}

export function Heading1({ style, ...props }) {
  return <ReactNative.Text style={[styles.h1, style]} {...props} />;
}

export function Heading2({ style, ...props }) {
  return <ReactNative.Text style={[styles.h2, style]} {...props} />;
}

export function Heading3({ style, ...props }) {
  return <ReactNative.Text style={[styles.h3, style]} {...props} />;
}

export function Heading4({ style, ...props }) {
  return <ReactNative.Text style={[styles.h4, style]} {...props} />;
}

export function Heading5({ style, ...props }) {
  return <ReactNative.Text style={[styles.h5, style]} {...props} />;
}

export function Paragraph({ style, ...props }) {
  return <ReactNative.Text style={[styles.p, style]} {...props} />;
}

// export function Hyperlink({style, ...props}: Object): ReactElement<ReactNative.Text> {
//   return <ReactNative.Text style={[styles.a, style]} {...props} />;
// }

export function HeaderTitle({ style, ...props }) {
  return <ReactNative.Text style={[styles.headerTitle, style]} {...props} />;
}

export function HorizontalRule({ style, ...props }) {
  return <ReactNative.View style={[styles.hr, style]} {...props} />;
}

// Styles
// =============================================================================

const styles = StyleSheet.create({
  text: {},
  h1: {
    color: Colors.blue
  },
  h2: {
    color: Colors.tangaroa,
    letterSpacing: -0.24
  },
  h3: {
    color: Colors.sapphire,
    letterSpacing: -0.11
  },
  h4: {
    color: Colors.tangaroa
  },
  h5: {
    color: Colors.tangaroa
  },
  p: {
    color: Colors.tangaroa
  },
  // a: {
  //   color: Colors.blue,
  //   textDecorationLine: 'underline',
  // },
  hr: {
    height: 1,
    backgroundColor: Colors.colorWithAlpha("black", 0.1)
  },
  headerTitle: {
    ios: { fontSize: 17 },
    android: { fontSize: 20 }
  }
});
