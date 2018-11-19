import { schema } from "normalizr";

const hopSchema = new schema.Entity("hops");
hopSchema.define({
  substitutes: [hopSchema]
});

const hopArraySchema = { hops: [hopSchema] };

const fermentableSchema = new schema.Entity("fermentables");

const fermentableArraySchema = { fermentables: [fermentableSchema] };

const yeastSchema = new schema.Entity("yeasts");

const yeastArraySchema = { yeasts: [yeastSchema] };

const miscSchema = new schema.Entity("miscs");

const miscArraySchema = { miscs: [miscSchema] };

const waterSchema = new schema.Entity("waters");

const waterArraySchema = { waters: [waterSchema] };

const equipmentSchema = new schema.Entity("equipments");

const equipmentArraySchema = { equipments: [equipmentSchema] };

const styleSchema = new schema.Entity("styles", {
  examples: [recipeSchema]
});

const styleArraySchema = { styles: [styleSchema] };

const mashStepSchema = new schema.Entity("mash_steps");

const mashStepArraySchema = { mash_steps: [mashStepSchema] };

const mashSchema = new schema.Entity("mashs", {
  mash_steps: [mashStepSchema]
});

const mashArraySchema = { mashs: [mashSchema] };

const recipeSchema = new schema.Entity("recipes", {
  style: [styleSchema],
  equipment: [equipmentSchema],
  hops: [hopSchema],
  fermentables: [fermentableSchema],
  miscs: [miscSchema],
  yeasts: [yeastSchema],
  waters: [waterSchema]
});

const recipeArraySchema = { recipes: [recipeSchema] };

export {
  hopSchema,
  hopArraySchema,
  fermentableSchema,
  fermentableArraySchema,
  yeastSchema,
  yeastArraySchema,
  miscSchema,
  miscArraySchema,
  waterSchema,
  waterArraySchema,
  equipmentSchema,
  equipmentArraySchema,
  styleSchema,
  styleArraySchema,
  mashStepSchema,
  mashStepArraySchema,
  mashSchema,
  mashArraySchema,
  recipeSchema,
  recipeArraySchema
};
