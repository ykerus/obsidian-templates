
class Config {
    async readConfig(dv, configTag) {
        // read config from json code block in file with configTag
        const jsonCodeBlockRegex = /```json\n([\s\S]*?)\n```/;

        const files = dv.pages(configTag);
        if (files.length == 0) {
            throw new Error(`No file found: ${configTag}`);
        }
        else if (files.length > 1) {
            throw new Error(`Multiple files found: ${configTag}`);
        }

        const file = files[0].file;
        const content = await dv.io.load(file.path)
        const match = content.match(jsonCodeBlockRegex);

        if (match) {
            const jsonData = JSON.parse(match[1]);
            return jsonData;
        } else {
            throw new Error(`No JSON code block found in file: ${configTag}`);
        }
    }
}
