import {System} from "lib-utils-ts/src/lang/System";
import {ExitSign} from "lib-utils-ts/src/lang/ExitSign";
import {HookThread} from "lib-utils-ts/src/lang/HookThread";
import {Runtime} from "lib-utils-ts/src/lang/Runtime";
import {UUID} from "lib-utils-ts/src/utils/UUID";
import {CloseProcess} from "lib-utils-ts/src/lang/CloseProcess";
import {Byte} from "lib-utils-ts/src/primitives/Byte";
import {Shutdown} from "lib-utils-ts/src/lang/Shutdown";
import {Runnable} from "lib-utils-ts/src/Interface";
/**
 * Shutdown
 */
export class ShutDown extends HookThread{

    public run() {
        System.out.println("App will be close");
    }

    public static Main(argv:String[]):void{

        System.out.println(UUID.UUID().toString())
        System.out.println("EXIT ENUM :"+ExitSign.EXIT);
        System.out.println("ORDINAL :"+ExitSign.EXIT.ordinal());
        // Runtime
        System.out.println("PID :"+Runtime.getRuntime().pid());
        System.out.println("PPID :"+Runtime.getRuntime().ppid());
        System.out.println("UpTime : "+Runtime.getRuntime().uptime());
        System.out.println("FreeMem : "+Runtime.getRuntime().freeMem());

        Shutdown.add(2, new class implements Runnable{

            public run(): void {
                System.out.println("Finalizer  Runner 1")
            }

        });
        try{
            Shutdown.add(3, new class implements Runnable{

                public run(): void {
                    System.out.println("Finalizer  Runner 2");
                }

            });
        }catch (e) {
            System.out.println(e.stack);
        }
        Runtime.getRuntime().addHookShutDown(new ShutDown());

        let removeListener:ShutDown = new ShutDown();
        Runtime.getRuntime().addHookShutDown(removeListener);
        Runtime.getRuntime().removeAddHookShutDown(removeListener);

        //System.exit(Byte.mk(0));
        //Runtime.getRuntime().halt(CloseProcess.SIGNS.SIGKILL);
        Runtime.getRuntime().halt(ExitSign.SIGKILL);
    }
}