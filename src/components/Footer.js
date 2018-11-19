import React from "react";
import { View, Text } from "react-native";

import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions/old";

const Footer = () => {
  return (
    <View>
      <Text>Show</Text>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>
        <Text>All</Text>
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
        <Text>Active</Text>
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        <Text>Completed</Text>
      </FilterLink>
    </View>
  );
};

export default Footer;
