import { JavaFileGenerator, JAVA_COMMON_PRESET } from '@asyncapi/modelina';
const fs = require('fs');
const yaml = require('js-yaml');

const generator = new JavaFileGenerator({
  collectionType: "List",
   presets: [
     {
       preset: JAVA_COMMON_PRESET,
       options: {
         equals: true,
         hashCode: true,
      }
     }
  ]
});

const input = yaml.load(fs.readFileSync('./test.json', { encoding:'utf8', flag:'r' }));

export async function generate(): Promise<void> {
  const outputFolder = "./java/org/t4atf/modelina";
  const modelGenerationOptions = { packageName: 'org.t4atf.asyncapi' }
  const models = await generator.generateToFiles(input, outputFolder, modelGenerationOptions);
}
generate();
