export const projects = [
  {
    slug: "chronique-d-egypte",
    title: "Chronique d'Egypte",
    type: "son - photo",
    description:
      "Dans cette chronique sonore, je partage mes impressions et je cherche à m'échapper des préjugés qui me guettent.",
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
