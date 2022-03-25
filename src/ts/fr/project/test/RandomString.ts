import {System} from "lib-utils-ts/src/lang/System";
import {RandString} from "lib-utils-ts/src/utils/RandString";

export class RandomString {

    public static Main(argc:string[]):void{

        System.out.println(RandString.alpha(10));
        System.out.println(RandString.numeric(10));
        System.out.println(RandString.alphaNumeric(10));
        System.out.println(RandString.hex(10));
        System.out.println("CBi = "+RandString.numeric(16));
        System.out.println(RandString.pattern("%h{4}-%s-%a{5}"));

    }
}