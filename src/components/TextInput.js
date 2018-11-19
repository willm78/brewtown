import React from "react";
import { View, Button } from "react-native";
import { FormLabel, FormInput } from "react-native-elements";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.recipe ? { input: props.recipe.recipe } : { input: "" };
    this.formRef = React.createRef();
    this.saveAndClear = this.saveAndClear.bind(this);
  }

  saveAndClear() {
    this.props.onSavePress(this.state.input);
    this.setState(() => {
      return { input: "" };
    });
    this.formRef.current.clearText();
  }

  render() {
    return (
      <View>
        <FormLabel>{this.props.formLabel}</FormLabel>
        <FormInput
          onChangeText={text =>
            this.setState(() => {
              return { input: text };
            })
          }
          ref={this.formRef}
        />
        <Button
          onPress={() => this.props.onUpdatePress(this.state.input)}
          title={this.props.updateButtonLabel}
        />
        <Button
          onPress={this.saveAndClear}
          title={this.props.saveButtonLabel}
        />
      </View>
    );
  }
}

export default TextInput;
