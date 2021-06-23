import { Script } from 'vm';
import 'sicp';
import { readFileSync, createWriteStream } from 'fs';

let writer = createWriteStream("test_node_env/out.txt");
writer.once('open', function(fd) {
    let r = s.runInThisContext();
    if (typeof r !== 'undefined') {
        writer.write(JSON.stringify(r));
    } else {
        writer.write("undefined");
    }
    writer.end();
});

let s = new Script(readFileSync("js_programs/chapter5/section3/subsection2/01_testing_5_3_2.js"));
