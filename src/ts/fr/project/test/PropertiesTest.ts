import {System} from "lib-utils-ts/src/lang/System";
import {Properties} from "lib-utils-ts/src/file/Properties";
import {FileReader} from "lib-utils-ts/src/file/FileReader";
import {File} from "lib-utils-ts/src/file/File";
/**
 * Read stdin buffer
 */
export class PropertiesTest {

    public static Main(argv:String[]):void{

        let prop:Properties = new Properties();
        prop.load(new FileReader(new File("./src/ts/resources/test.properties")));
        // prop.list(new PrintWriter(new FileWriter(FileDescriptor.out)));
        prop.list(System.out);

    
        System.getProperties().list(System.out);
    }
}
Object.package(this);