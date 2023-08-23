import fs from "fs/promises";

/**
 *  This script helps to convert a list of svgs
 *  directly into react component
 */
(async () => {
    const FOLDER_PATH = "./src/components/svg-components";

    // List of all svgs
    const files = await fs.readdir(`./src/components/svg-components/svgs`);

    for (const file of files) {
        const fileName = file.split(".")[0];
        const PascalCase = fileName
            .split("-")
            .map((chunk) => chunk[0].toUpperCase() + chunk.slice(1, chunk.length))
            .join("");

        const template = `"use client";\n\nimport Comp${PascalCase} from "@/components/svg-components/svgs/${fileName}.svg"\nconst Comp = Comp${PascalCase} as any;\n\nconst Icon${PascalCase} = (props : {className?:string; style?:React.CSSProperties}) => {\n    return <Comp {...props}/>\n}\n\nexport default Icon${PascalCase}`;

        await fs.writeFile(`${FOLDER_PATH}/${fileName}.tsx`, template);
    }
})();
