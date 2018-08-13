import * as d from "./schema";

export const defaultState = {
  thisUser: {
    isLoggedIn: false,
    facebookLoggedIn: false,
    facebookName: null,
    facebookId: null,
    loginInProgress: false,
    hasSkippedLogin: false,
    isSharing: null,
    userName: null,
    name: null
  },
  localCounter: 0,
  entities: {
    comments: {
      byId: {
        id: {
          user: undefined,
          timeStamp: undefined
        }
      },
      allIds: []
    },
    users: {
      byId: {
        id: {
          userName: undefined,
          joinedDate: undefined,
          published: {
            recipes: [],
            numRecipes: 0,
            hops: [],
            numHops: 0,
            fermentables: [],
            numFermentables: 0,
            yeasts: [],
            numYeasts: 0,
            miscs: [],
            numMiscs: 0,
            waters: [],
            numWaters: 0,
            styles: [],
            numStyles: 0,
            mashsteps: [],
            numMashSteps: 0,
            mashs: [],
            numMashs: 0,
            equipments: [],
            numEquipments: 0
          },
          numStarsByOthers: 0,
          numPublished: 0,
          following: [],
          numFollowing: 0,
          followedBy: [],
          numFollowedBy: 0,
          forks: {
            recipes: [],
            hops: [],
            fermentables: [],
            yeasts: [],
            miscs: [],
            waters: [],
            styles: [],
            mashsteps: [],
            mashs: [],
            equipments: []
          },
          numForks: 0,
          stars: {
            recipes: [],
            hops: [],
            fermentables: [],
            yeasts: [],
            miscs: [],
            waters: [],
            styles: [],
            mashsteps: [],
            mashs: [],
            equipments: []
          },
          numStarsToOthers: 0
        }
      },
      allIds: []
    },
    recipes: {
      byId: {
        id: {
          meta: d.META,
          payload: d.RECIPE
        }
      },
      allIds: []
    },
    hops: {
      byId: {
        id: {
          meta: d.META,
          payload: d.HOP
        }
      },
      allId: []
    },
    fermentables: {
      byId: {
        id: {
          meta: d.META,
          payload: d.FERMENTABLE
        }
      },
      allId: []
    },
    yeasts: {
      byId: {
        id: {
          meta: d.META,
          payload: d.YEAST
        }
      },
      allId: []
    },
    waters: {
      byId: {
        id: {
          meta: d.META,
          payload: d.WATER
        }
      },
      allId: []
    },
    styles: {
      byId: {
        id: {
          meta: d.META,
          payload: d.STYLE
        }
      },
      allId: []
    },
    mashSteps: {
      byId: {
        id: {
          meta: d.META,
          payload: d.MASH_STEP
        }
      },
      allId: []
    },
    mashs: {
      byId: {
        id: {
          meta: d.META,
          payload: d.MASH
        }
      },
      allId: []
    },
    equipments: {
      byId: {
        id: {
          meta: d.META,
          payload: d.EQUIPMENT
        }
      },
      allId: []
    }
  }
};
