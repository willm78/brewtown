import { schema } from "normalizr";

export const hopSchema = schema
  .Entity("hops")
  .define({ substitutes: schema.Array(hopSchema) });

export const fermentableSchema = schema.Entity("fermentables");

export const yeastSchema = schema.Entity("yeasts");

export const miscSchema = schema.Entity("miscs");

export const waterSchema = schema.Entity("waters");

export const equipmentSchema = schema.Entity("equipments");

export const styleSchema = schema
  .Entity("styles")
  .define({ examples: schema.Array(recipeSchema) });

export const mashStepSchema = schema.Entity("mash_steps");

export const mashSchema = schema
  .Entity("mashs")
  .define({ mash_steps: schema.Array(mashStepSchema) });

export const recipeSchema = schema.Entity("recipes", {
  style: [styleSchema],
  equipment: [equipmentSchema],
  hops: [hopSchema],
  fermentables: [fermentableSchema],
  miscs: [miscSchema],
  yeasts: [yeastSchema],
  waters: [waterSchema]
});
