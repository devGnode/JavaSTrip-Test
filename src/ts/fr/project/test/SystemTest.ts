import {InputStreamReader} from "lib-utils-ts/src/file/InputStreamReader";
import {System} from "lib-utils-ts/src/lang/System";
import {BufferedReader} from "lib-utils-ts/src/file/BufferedReader";
import {IOException} from "lib-utils-ts/src/file/IOException";
/**
 * Read stdin buffer
 */
export class SystemTest {

    public static Main(argv:String[]):void{

        System.getProperties().list(System.out);

        try {
            //let isr: InputStreamReader = new InputStreamReader(System.in);

            let br: BufferedReader =  new BufferedReader(new InputStreamReader(System.in));
            System.out.print("Ici : ")
            let out:string = br.readLine();
            System.out.println("Your have write = "+ out);

        }catch (e){
            throw new IOException(e.stackTrace);
        }
       /* try {
            //let isr: InputStreamReader = new InputStreamReader(System.in);

            let br: BufferedReader =  new BufferedReader(new InputStreamReader(System.in));
            let out:string[] = br.split(/\x20/);
            System.out.println("Your have write = "+ out.toString());

        }catch (e){
            throw new IOException(e.stackTrace);
        }*/
    }
}