import { getQueriesForElement } from "@testing-library/react";

let state = {
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
      cards: [
        {
          cardId: 6,
          text: "sixth card",
        },
        {
          cardId: 7,
          text: "seventh card",
        },
        {
          cardId: 8,
          text: "eighth card",
        },
      ],
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
};

export default state;
