const menu = [
  {
    name: "menu 1",
    link: "link 1",
    subItems: [{ name: "menu 2", subItems: [] }],
  },
  {
    name: "menu 3",
    link: "link 3",
    subItems: [
      {
        name: "menu 4",
        link: "link 4",

        subItems: [
          {
            name: "menu 5",
            link: "link 5",

            subItems: [
              {
                name: "menu 6",
                link: "link 6",
                subItems: [],
              },
            ],
          },
        ],
      },
      { name: "menu 7", link: "menu 7", subItems: [] },
    ],
  },
];

let output = [];

const recursion = (arr, existing = []) => {
  for (let item of arr) {
    output.push(item.name);

    if (item.subItems && item.subItems.length) {
      recursion(item.subItems, output);
    }
  }

  return [output, ...existing];
};

console.log(recursion(menu));
