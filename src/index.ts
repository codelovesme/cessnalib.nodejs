import * as fs from "fs"

export namespace io {
    export class FileSystem {
        public static base64ToFile(base64: string, saveInto: string, fileName: string, callback: (err: Error) => void) {
            //is really base64 
            let matches = base64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
            //set buffer
            if (matches && matches.length == 3) {
                let buffer = {
                    type: matches[1],
                    data: new Buffer(matches[2], 'base64')
                }
                //write into the file
                if (!fs.existsSync(saveInto)) {
                    fs.mkdirSync(saveInto);
                }
                fs.writeFile(saveInto+"/"+fileName, buffer.data, callback);
            }
            callback(new Error("Invalid input."));
        }
    }
}