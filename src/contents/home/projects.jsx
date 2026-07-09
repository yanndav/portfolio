export const projects = [
  {
    slug: "chronique-d-egypte",
    title: "Chronique d'Egypte",
    type: "son - photo",
    description:
      "Une promenade sonore à Alexandrie et Le Caire. Un assemblage de sons, d’impressions et de lectures à la découverte d’un pays. Et une recherche de fragile équilibre dans la compréhension que l’on en nourrit.",
    gradient: {
      lighter: "#C4AF90",
      darker: "#423629",
    },
    format: "photo-audio",
    content: [
      {
        src: "DSC08696.jpg",
        type: "photo",
        col: 1,
        row: 1,
        rowSpan: 2,
        colSpan: 1,
      },
      {
        src: "audio-long.mp3",
        type: "audio",
        col: 2,
        row: 1,
        rowSpan: 1,
        colSpan: 1,
      },
      { src: "DSC07444.jpg", type: "photo", col: 2, row: 2 },
    ],
  },
];
