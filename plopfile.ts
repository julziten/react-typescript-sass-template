import type { NodePlopAPI } from "plop";
import type { ActionType } from "node-plop";

const types = {
  atoms: "atoms",
  molecules: "molecules",
  organisms: "organisms",
  pages: "pages",
} as const;

type Keys = keyof typeof types;
type Type = typeof types[Keys];

export default function plopfile(plop: NodePlopAPI): void {
  plop.setGenerator("component", {
    description: "Component generator",
    prompts: [
      {
        name: "type",
        type: "list",
        message: "What type of component would you like to generate?",
        choices: [
          { name: "Atom Component", value: types.atoms },
          { name: "Molecule Component", value: types.molecules },
          { name: "Organism Component", value: types.organisms },
          { name: "Page", value: types.pages },
        ],
      },
      {
        type: "input",
        name: "name",
        message: ({ type }) =>
          `What is the name of your ${
            type === types.pages ? "page" : "component"
          }?`,
        validate: (value, { type } = {}) =>
          value.length === 0
            ? `Please enter a ${
                type === types.pages ? "page" : "component"
              } name`
            : true,
      },
      {
        type: "input",
        name: "pathname",
        message: ({ type }) =>
          `What is the pathname to the ${
            type === types.pages ? "page" : "component"
          } (i.e path/to/${
            type === types.pages ? "page" : "component"
          }/ or leave blank)?`,
        validate: (value) =>
          value !== "" && !value.match(/^([a-z]+(-[a-z]+)*\/)+$/)
            ? "The pathname needs to be lowercase and only use the symbols / and -."
            : true,
      },
      {
        type: "input",
        name: "prefix",
        when: ({ type }) => type !== types.pages,
        message: ({ type }) =>
          `What prefix do you want to use? (for example ${
            type !== "cmsComponents" ? type.slice(0, 1) : "c"
          }1)`,
      },
      {
        type: "confirm",
        name: "useForwardRef",
        when: ({ type }) => type !== types.pages,
        message: () => `Do you want to use a forwardRef?`,
      },
      {
        type: "confirm",
        name: "createStory",
        when: ({ type }) => type !== types.pages,
        message: () => `Do you want to create a storybook story?`,
        default: true,
      },
    ],
    actions(answers = { type: "none" }) {
      const { type } = answers as { type: Type };

      return getActions(type, answers);
    },
  });
}

function getActions(
  type: Type,
  { name, useForwardRef, pathname, createStory }: Record<string, string>
): Array<ActionType> {
  let base: string;
  switch (type) {
    case types.pages:
      base = "page";
      break;

    default:
      base = "component";
  }

  let destination: string;
  switch (type) {
    case types.pages:
      destination = `src/pages/{{pathname}}`;
      break;

    default:
      destination = `src/components/{{pathname}}/{{type}}/{{prefix}}-{{dashCase name}}/`;
      break;
  }

  return [
    {
      data: {
        name,
        useForwardRef,
        root: "../".repeat(
          (pathname.match(/\//g) || "").length + (type !== types.pages ? 2 : 1)
        ),
        pathname,
      },
      type: "addMany",
      base: `plop-templates/${base}`,
      templateFiles: [
        `plop-templates/${base}/*.*`,
        createStory ? "" : `!plop-templates/${base}/*.stories.*`,
      ].filter(Boolean),
      destination,
    },
  ];
}
