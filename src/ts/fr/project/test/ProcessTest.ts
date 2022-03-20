/**
 *
 */
import {Process} from "lib-utils-ts/src/lang/Process";
import {System} from "lib-utils-ts/src/lang/System";
import {ProcessBuilder} from "lib-utils-ts/src/lang/ProcessBuilder";
import {File} from "lib-utils-ts/src/file/File"
import {Objects} from "lib-utils-ts/src/type/Objects";
import {Runtime} from "lib-utils-ts/src/lang/Runtime";
import {ExitSign} from "lib-utils-ts/src/lang/ExitSign";
import {Redirect} from "lib-utils-ts/src/lang/Redirect";

export class ProcessTest {

    public static Main(argv:String[]):void{

        //let redirect:ProcessBuilder = ProcessBuilder.of("nmap", "-sS","172.31.1.1");
        let redirect:ProcessBuilder = ProcessBuilder.of("chromedriver.exe", "--help");

        redirect
            .setDirectory(new File("C:\\Users\\Maroder\\Documents\\Zenity\\Selenium_airbnb\\drivers"))
            .setEnvironment()
            .inheritIO()
            //.redirectOutputFile(new File("./testing/msn.txt"))
            //.redirectErrorFile(new File("./testing/msn.txt"))
            .redirectOutput(Redirect.append(new File("./testing/msn.txt")))
            .redirectError(redirect.geRedirectOutput());

        let p: Process= redirect.start();

       System.out.println("Process is Alive "+p.isAlive());
       //p.destroy()
       System.out.println(Objects.toString(ProcessTest)+" Process is Alive "+p.isAlive());
       System.out.println((new ProcessTest()).toString()+" Process is Alive "+Objects.toString(ProcessTest));
       System.out.println("Process Exit value "+p.exitValue());

       System.out.println("Process Exit value ");

       /*Runtime.getRuntime().halt(ExitSign.SIGKILL);*/

    }
}
Object.package(this);