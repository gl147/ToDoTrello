import { getQueriesForElement } from "@testing-library/react";

let state = {
  functions: {},
  data: {
    zonesList: [
      {
        zoneId: 1,
        zoneName: "ToDo",
        cards: [
          {
            cardId: 1,
            text: "first card",
          },
          {
            cardId: 2,
            text: "second card",
          },
          {
            cardId: 3,
            text: "third card",
          },
          {
            cardId: 4,
            text: "fifth card",
          },
          {
            cardId: 5,
            text: "sixth card",
          },
        ],
      },
      {
        zoneId: 2,
        zoneName: "In  Progress",
        cards: [],
      },
      {
        zoneId: 3,
        zoneName: "On Review",
        cards: [],
      },
      {
        zoneId: 4,
        zoneName: "Done",
        cards: [],
      },
    ],
  },

  increments: {
    cardsId: 0,
    zonesID: 0,
  },
};

export default state;
