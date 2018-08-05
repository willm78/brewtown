import { normalize, schema } from "normalizr";
import { FormInput } from "./node_modules/react-native-elements";

const hop = new schema.Entity(
  "hops", 
  {
    name,
    version,
    alpha,
    amount,
    use,
    time,
    notes,
    type,
    form,
    beta,
    hsi,
    origin,
    substitutes,
    humulene,
    caryophyllene,
    cohumulone,
    myrcene
  }, {
      idAttribute: 'hash_id',
      processStrategy: (input, parent, key) => {
          return {...input, hash_id: }
      }
  }
  (input, parent, key) => {
    `${input}`;
  }
);
