// follows beerxml guidance
// <http://www.beerxml.com/beerxml.htm>

export const META = {
  id: undefined,
  isLocal: true,
  forked: false,
  forkOf: undefined,
  editInProcess: false,
  numStars: 0,
  ratings: [],
  avgRating: undefined,
  comments: [],
  numComments: 0,
  contributors: [],
  numContributors: 0
};

//----------------------------------------

export const HOPS = [HOP];
export const FERMENTABLES = [FERMENTABLE];
export const YEASTS = [YEAST];
export const MISCS = [MISC];
export const WATERS = [WATER];
export const STYLES = [STYLE];
export const MASH_STEPS = [MASH_STEP];
export const MASHS = [MASH];
export const RECIPES = [RECIPE];
export const EQUIPMENTS = [EQUIPMENT];

//-----------------------------------------

export const HOP = {
  NAME,
  VERSION,
  ALPHA,
  AMOUNT,
  USE,
  TIME,
  NOTES,
  TYPE,
  FORM,
  BETA,
  HSI,
  ORIGIN,
  SUBSTITUTES,
  HUMULENE,
  CARYOPHYLLENE,
  COHUMULONE,
  MYRCENE
};

export const FERMENTABLE = {
  NAME,
  VERSION,
  TYPE,
  AMOUNT,
  YIELD,
  COLOR,
  ADD_AFTER_BOIL,
  ORIGIN,
  SUPPLIER,
  NOTES,
  COARSE_FINE_DIFF,
  MOISTURE,
  DIASTATIC_POWER,
  PROTEIN,
  MAX_IN_BATCH,
  RECOMMEND_MASH,
  IBU_GAL_PER_LB
};

export const YEAST = {
  NAME,
  VERSION,
  TYPE,
  FORM,
  AMOUNT,
  AMOUNT_IS_WEIGHT,
  LABORATORY,
  PRODUCT_ID,
  MIN_TEMPERATURE,
  MAX_TEMPERATURE,
  FLOCCULATION,
  ATTENUATION,
  NOTES,
  BEST_FOR,
  TIMES_CULTURED,
  MAX_REUSE,
  ADD_TO_SECONDARY
};

export const MISC = {
  NAME,
  VERSION,
  TYPE,
  USE,
  TIME,
  AMOUNT,
  AMOUNT_IS_WEIGHT,
  USE_FOR,
  NOTES
};

export const WATER = {
  NAME,
  VERSION,
  AMOUNT,
  CALCIUM,
  BICARBONATE,
  SULFATE,
  CHLORIDE,
  SODIUM,
  MAGNESIUM,
  PH,
  NOTES
};

export const EQUIPMENT = {
  NAME,
  VERSION,
  BOIL_SIZE,
  BATCH_SIZE,
  TUN_VOLUME,
  TUN_WEIGHT,
  TUN_SPECIFIC_HEAT,
  TOP_UP_WATER,
  TRUB_CHILLER_LOSS,
  EVAP_RATE,
  BOIL_TIME,
  CALC_BOIL_VOLUME,
  LAUTER_DEADSPACE,
  TOP_UP_KETTLE,
  HOP_UTILIZATION,
  NOTES
};

export const STYLE = {
  NAME,
  CATEGORY,
  VERSION,
  CATEGORY_NUMBER,
  STYLE_LETTER,
  STYLE_GUIDE,
  TYPE,
  OG_MIN,
  OG_MAX,
  FG_MIN,
  FG_MAX,
  IBU_MIN,
  IBU_MAX,
  COLOR_MIN,
  COLOR_MAX,
  CARB_MIN,
  CARB_MAX,
  ABV_MIN,
  ABV_MAX,
  NOTES,
  PROFILE,
  INGREDIENTS,
  EXAMPLES
};

export const MASH_STEP = {
  NAME,
  VERSION,
  TYPE,
  INFUSE_AMOUNT,
  STEP_TEMP,
  STEP_TIME,
  RAMP_TIME,
  END_TEMP
};

export const MASH = {
  NAME,
  VERSION,
  GRAIN_TEMP,
  MASH_STEPS,
  NOTES,
  TUN_TEMP,
  SPARGE_TEMP,
  PH,
  TUN_WEIGHT,
  TUN_SPECIFIC_HEAT,
  EQUIP_ADJUST
};

export const RECIPE = {
  NAME,
  VERSION,
  TYPE,
  STYLE,
  EQUIPMENT,
  BREWER,
  ASST_BREWER,
  BATCH_SIZE,
  BOIL_SIZE,
  BOIL_TIME,
  EFFICIENCY,
  HOPS,
  FERMENTABLES,
  MISCS,
  YEASTS,
  WATERS,
  MASH,
  NOTES,
  TASTE_NOTES,
  TASTE_RATING,
  OG,
  FG,
  FERMENTATION_STAGES,
  PRIMARY_AGE,
  PRIMARY_TEMP,
  SECONDARY_AGE,
  SECONDARY_TEMP,
  TERTIARY_AGE,
  TERTIARY_TEMP,
  AGE,
  AGE_TEMP,
  DATE,
  CARBONATION,
  FORCED_CARBONATION,
  PRIMING_SUGAR_NAME,
  CARBONATION_TEMP,
  PRIMING_SUGAR_EQUIV,
  KEG_PRIMING_FACTOR
};

//-----------------------------------------

const ABV_MAX = undefined; // (%) The maximum recommended alcohol by volume as a percentage.
const ABV_MIN = undefined; // (%) The minimum recommended alcohol by volume as a percentage.
const ADD_AFTER_BOIL = false; // (bool) Is the item added after the boil.
const ADD_TO_SECONDARY = false; // (bool) Flag denoting that this yeast was added for a secondary (or later) fermentation as opposed to the primary fermentation.
const AGE = undefined; // (days) Time to age the beer after bottling.
const AGE_TEMP = undefined; // (Celc) Temperature for aging the beer after bottling.
const ALPHA = undefined; // (%) Percent alpha of hops - for example "5.5" represents 5.5% alpha
const AMOUNT = undefined; // (kg) Weight in Kilograms of the hops used in the recipe.
const AMOUNT_IS_WEIGHT = false; // (bool) TRUE if amount measurement is weight, FALSE if amount is volume measurement
const ASST_BREWER = undefined; // (str) Optional name of the assistant brewer
const ATTENUATION = undefined; // (%) Average attenuation for this yeast strain.
const BATCH_SIZE = undefined; // (L) The target volume of the batch at the start of fermentation.
const BEST_FOR = undefined; // (str) Styles or types of beer this yeast strain is best suited for.
const BETA = undefined; // (%) Hop beta percentage - for example "4.4" denotes 4.4 % beta
const BICARBONATE = undefined; // (float) The amount of bicarbonate (HCO3) in parts per million.
const BOIL_SIZE = undefined; // (L) The pre-boil volume used in this particular instance for this equipment setup.  Note that this may be a calculated value depending on the CALC_BOIL_VOLUME parameter.
const BOIL_TIME = undefined; // (min) The total time to boil the wort in minutes.
const BREWER = undefined; // (str) Name of the brewer
const CALCIUM = undefined; // (ppm) The amount of calcium, CA.
const CALC_BOIL_VOLUME = false; // (bool) Flag denoting that the program should calculate the boil size.  Flag may be TRUE or FALSE.  If TRUE, then BOIL_SIZE = (BATCH_SIZE – TOP_UP_WATER – TRUB_CHILLER_LOSS) * (1+BOIL_TIME * EVAP_RATE )  If set then the boil size should match this value.
const CARBONATION = undefined; // (float) Floating point value corresponding to the target volumes of CO2 used to carbonate this beer.
const CARBONATION_TEMP = undefined; // (Celc) The temperature for either bottling or forced carbonation.
const CARB_MAX = undefined; // (float) The maximum recommended carbonation for this style in volumes of CO2
const CARB_MIN = undefined; // (float) Minimum recommended carbonation for this style in volumes of CO2
const CARYOPHYLLENE = undefined; // (%) Caryophyllene level in percent.
const CATEGORY = undefined; // (str) Category that this style belongs to – usually associated with a group of styles such as “English Ales” or “Amercian Lagers”.
const CATEGORY_NUMBER = undefined; // (str) Number or identifier associated with this style category.  For example in the BJCP style guide, the “American Lager” category has a category number of “1”.
const CHLORIDE = undefined; // (float) The amount of Chloride (Cl).
const COARSE_FINE_DIFF = undefined; // (%) Percent difference between the coarse grain yield and fine grain yield.  Only appropriate for a "Grain" or "Adjunct" type, otherwise this value is ignored.
const COHUMULONE = undefined; // (%) Cohumulone level in percent
const COLOR = undefined; // (float) The color of the item in Lovibond Units (SRM for liquid extracts)
const COLOR_MAX = undefined; // (float) The maximum recommended color in SRM.
const COLOR_MIN = undefined; // (float) The minimum recommended color in SRM
const DATE = undefined; // (date) Date brewed in an easily recognizable format such as “3 Dec 04”.
const DIASTATIC_POWER = undefined; // (float) The diastatic power of the grain as measured in "Lintner" units. Only appropriate for a "Grain" or "Adjunct" type, otherwise this value is ignored.
const EFFICIENCY = undefined; // (%) The percent brewhouse efficiency to be used for estimating the starting gravity of the beer. Not required for “Extract” recipes, but is required for “Partial Mash” and “All Grain” recipes.
const END_TEMP = undefined; // (Celc) The temperature you can expect the mash to fall to after a long mash step.  Measured in degrees Celsius.
const EQUIP_ADJUST = false; // (bool) If TRUE, mash infusion and decoction calculations should take into account the temperature effects of the equipment (tun specific heat and tun weight).  If FALSE, the tun is assumed to be pre-heated.  Default is FALSE.
const EVAP_RATE = undefined; // (%/hr) The percentage of wort lost to evaporation per hour of the boil.
const EXAMPLES = undefined; // (str) Example beers of this style.
const FERMENTATION_STAGES = 1; // (int) The number of fermentation stages used – typically a number between one and three.
const FG = undefined; // (float) The measured final gravity of the finished beer.
const FG_MAX = undefined; // (float) The maximum final gravity as measured relative to water.
const FG_MIN = undefined; // (float) The minimum final gravity as measured relative to water.
const FLOCCULATION = "Low"; // (str) May be “Low”, “Medium”, “High” or “Very High”
const FORCED_CARBONATION = false; // (bool) TRUE if the batch was force carbonated using CO2 pressure, FALSE if the batch was carbonated using a priming agent.  Default is FALSE
const FORM = undefined; // (str) Dependent on context. See beerxml schema for details.
const GRAIN_TEMP = undefined; // (Celc) The temperature of the grain before adding it to the mash in degrees Celsius.
const HOP_UTILIZATION = undefined; // (%) Large batch hop utilization. This value should be 100% for batches less than 20 gallons, but may be higher (200% or more) for very large batch equipment.
const HSI = undefined; // (%) Hop Stability Index - defined as the percentage of hop alpha lost in 6 months of storage
const HUMULENE = undefined; // (%) Humulene level in percent.
const IBU_GAL_PER_LB = undefined; // (float) For hopped extracts only - an estimate of the number of IBUs per pound of extract in a gallon of water.  To convert to IBUs we multiply this number by the "AMOUNT" field (in pounds) and divide by the number of gallons in the batch.  Based on a sixty minute boil.  Only suitable for use with an "Extract" type, otherwise this value is ignored.
const IBU_MAX = undefined; // (float) The recommended maximum bitterness for this style as measured in International Bitterness Units (IBUs)
const IBU_MIN = undefined; // (float) The recommended minimum bitterness for this style as measured in International Bitterness Units (IBUs)
const INFUSE_AMOUNT = undefined; // (L) The volume of water in liters to infuse in this step. Required only for infusion steps, though one may also add water for temperature mash steps.  One should not have an infusion amount for decoction steps.
const INGREDIENTS = undefined; // (str) Suggested ingredients for this style
const KEG_PRIMING_FACTOR = undefined; // (float) Used to factor in the smaller amount of sugar needed for large containers.  For example, this might be 0.5 for a typical 5 gallon keg since naturally priming a keg requires about 50% as much sugar as priming bottles.
const LABORATORY = undefined; // (str) The name of the laboratory that produced the yeast.
const LAUTER_DEADSPACE = undefined; // (L) Amount lost to the lauter tun and equipment associated with the lautering process.
const MAGNESIUM = undefined; // (float) The amount of Magnesium (Mg) in parts per million.
const MAX_IN_BATCH = undefined; // (%) The recommended maximum percentage (by weight) this ingredient should represent in a batch of beer.
const MAX_REUSE = undefined; // (int) Recommended of times this yeast can be reused (recultured from a previous batch)
const MAX_TEMPERATURE = undefined; // (Celc) The maximum recommended temperature for fermenting this yeast strain in Celsius.
const MIN_TEMPERATURE = undefined; // (Celc) The minimum recommended temperature for fermenting this yeast strain in Celsius.
const MOISTURE = undefined; // (%) Percent moisture in the grain.  Only appropriate for a "Grain" or "Adjunct" type, otherwise this value is ignored.
const MYRCENE = undefined; // (%) Myrcene level in percent
const NAME = undefined; // (str) Dependent on context. See beerxml schema for details.
const NOTES = undefined; // (str) Textual note describing this ingredient and its use.  May be multiline.
const OG = undefined; // (float) The measured original (pre-fermentation) specific gravity of the beer.
const OG_MAX = undefined; // (float) The maximum specific gravity as measured relative to water.
const OG_MIN = undefined; // (float) The minimum specific gravity as measured relative to water.  For example “1.040” might be a reasonable minimum for a Pale Ale.
const ORIGIN = undefined; // (str) Place of origin for the hops
const PH = undefined; // (float) The PH of the water.
const PRIMARY_AGE = undefined; // (days) Time spent in the primary.
const PRIMARY_TEMP = undefined; // (Celc) Temperature for the primary fermentation.
const PRIMING_SUGAR_EQUIV = undefined; // (float) Factor used to convert this priming agent to an equivalent amount of corn sugar for a bottled scenario.  For example, “Dry Malt Extract” would have a value of 1.4 because it requires 1.4 times as much DME as corn sugar to carbonate.  To calculate the amount of DME needed, the program can calculate the amount of corn sugar needed and then multiply by this factor.
const PRIMING_SUGAR_NAME = undefined; // (str) Text describing the priming agent such as “Honey” or “Corn Sugar” – used only if this is not a forced carbonation.
const PRODUCT_ID = undefined; // (str) The manufacturer’s product ID label or number that identifies this particular strain of yeast.
const PROFILE = undefined; // (str) Flavor and aroma profile for this style.
const PROTEIN = undefined; // (%) The percent protein in the grain. Only appropriate for a "Grain" or "Adjunct" type, otherwise this value is ignored.
const RAMP_TIME = undefined; // (min) Time in minutes to achieve the desired step temperature – useful particularly for temperature mashes where it may take some time to achieve the step temperature.
const RECOMMEND_MASH = undefined; // (bool) TRUE if it is recommended the grain be mashed, FALSE if it can be steeped.  A value of TRUE is only appropriate for a "Grain" or "Adjunct" types.  The default value is FALSE.  Note that this does NOT indicate whether the grain is mashed or not – it is only a recommendation used in recipe formulation.
const SECONDARY_AGE = undefined; // (days) Time spent in the secondary.
const SECONDARY_TEMP = undefined; // (Celc) Temperature for the secondary fermentation.
const SODIUM = undefined; // (ppm) The amount of Sodium (Na).
const SPARGE_TEMP = undefined; // (Celc) Temperature of the sparge water used.
const STEP_TEMP = undefined; // (Celc) The target temperature for this step.
const STEP_TIME = undefined; // (min) The number of minutes to spend at this step – i.e. the amount of time we are to hold this particular step temperature.
const STYLE_GUIDE = undefined; // (str) The name of the style guide that this particular style or category belongs to.  For example “BJCP” might denote the BJCP style guide, and “AHA” would be used for the AHA style guide.
const STYLE_LETTER = undefined; // (str) The specific style number or subcategory letter associated with this particular style.  For example in the BJCP style guide, an American Standard Lager would be style letter “A” under the main category.  Letters should be upper case.
const SUBSTITUTES = undefined; // (str) Substitutes that can be used for this hops
const SULFATE = undefined; // (float) The amount of Sulfate (SO4)
const SUPPLIER = undefined; // (str) Supplier of the grain/extract/sugar
const TASTE_NOTES = undefined; // (str) Tasting notes – may be multiline.
const TASTE_RATING = undefined; // (float) Number between zero and 50.0 denoting the taste rating – corresponds to the 50 point BJCP rating system.
const TERTIARY_AGE = undefined; // (days) Time spent in the third fermenter
const TERTIARY_TEMP = undefined; // (Celc) Temperature in the tertiary fermenter.
const TIME = undefined; // (min) The time as measured in minutes. Meaning is dependent on the “USE” field. For “Boil” this is the boil time.  For “Mash” this is the mash time. For “First Wort” this is the boil time. For “Aroma” this is the steep time. For “Dry Hop” this is the amount of time to dry hop.
const TIMES_CULTURED = undefined; // (int) Number of times this yeast has been reused as a harvested culture. This number should be zero if this is a product directly from the manufacturer.
const TOP_UP_KETTLE = undefined; // (L) Amount normally added to the boil kettle before the boil.
const TOP_UP_WATER = undefined; // (L) The amount of top up water normally added just prior to starting fermentation.  Usually used for extract brewing.
const TRUB_CHILLER_LOSS = undefined; // (L) The amount of wort normally lost during transition from the boiler to the fermentation vessel.  Includes both unusable wort due to trub and wort lost to the chiller and transfer systems.
const TUN_SPECIFIC_HEAT = undefined; // (float) Specific heat of the tun material in calories per gram-degree C.
const TUN_TEMP = undefined; // (Celc) Grain tun temperature – may be used to adjust the infusion temperature for equipment if the program supports it.
const TUN_VOLUME = undefined; // (L) Volume of the mash tun in liters. This parameter can be used to calculate if a particular mash and grain profile will fit in the mash tun. It may also be used for thermal calculations in the case of a partially full mash tun.
const TUN_WEIGHT = undefined; // (kg) Weight of the mash tun. Used primarily to calculate the thermal parameters of the mash tun – in conjunction with the volume and specific heat.
const TYPE = undefined; // (str) Depends on context. See beerxml schema for details.
const USE = undefined; // (str) Depends on context. See beerxml schema for details.
const USE_FOR = undefined; // (str) Short description of what the ingredient is used for in text
const VERSION = undefined; // (int) Version of the standard.  Should be “1” for this version.
const YIELD = undefined; // (%) Percent dry yield (fine grain) for the grain, or the raw yield by weight if this is an extract adjunct or sugar.
