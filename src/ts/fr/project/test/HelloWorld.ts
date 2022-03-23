/**
 * Read stdin buffer
 */
import {System} from "lib-utils-ts/src/lang/System";

export class HelloWorld {

    public static Main(argv:String[]):void{
            System.out.println("Hello World !");

            System.exit(0);
    }
}
Object.package(this);