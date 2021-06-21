/*
    1. read the json files/1.json file and add a property "was-read": true to the object.
    2. write the new object to the files-output folder, with the same file name


    Note:

    write json with node

    import * fs from 'fs'

    fs.writeFile(path, JSON.stringify(data))

    -----------------------------------

    reading json with node

    import * fs from 'fs'

    const content = await fs.readFile(path)
    const json = JSON.parse(content)
 */