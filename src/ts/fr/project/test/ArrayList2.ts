import {Collectors} from "lib-utils-ts/src/Collectors";
import {System} from "lib-utils-ts/src/lang/System";
import {Arrays} from "lib-utils-ts/src/type/Arrays";
import {Integer} from "lib-utils-ts/src/type/Integer";
import {Comparators} from "lib-utils-ts/src/Comparators";
import {BinaryOperator} from "lib-utils-ts/src/utils/BinaryOperator";

export class ArrayList2 {

    public static Main(argv:string[]):void{
        let str:string,
            num:number;

        str =Array
            .list<string>("11","2","13","5")
            .stream()
            .filter((value:string)=>value.startsWith("1"))
            .collector(Collectors.toList())
            .toString();
        System.out.println( str );
        System.out.println( "========================================================" );

        Arrays.stream("123456".split(""))
            .map(Integer.of)
            .collector(Collectors.toList())
            .forEach((value:number)=>System.out.println(value));

        System.out.println( "========================================================" );
        Array
            .list<string>("11","2","13","15","19")
            .stream()
            .filter((v:string)=>v.startsWith("1"))
            .limit(2)
            .collector(Collectors.toList())
            .forEach((value:string)=>System.out.println(value));

        System.out.println( "========================================================" );
        num = Arrays.stream("123456".split(""))
            .map(Integer.of)
            .reduce((a:number, b:number)=> a+b)
            .get()
        System.out.println( "sum = "+ num );
        System.out.println( "========================================================" );

        num = Arrays.stream("98532150".split(""))
            .map(Integer.of)
            .min(Comparators.naturalOrder)
            .get();
        System.out.println( "min = "+num );
        System.out.println( "========================================================" );

        num = Arrays.stream("98532150".split(""))
            .map(Integer.of)
            .max(Comparators.naturalOrder)
            .get();
        System.out.println( "max = "+ num );
        System.out.println( "========================================================" );

        System.out.println( "//"+ BinaryOperator.minBy(Comparators.naturalOrder).apply(5,2) );
        System.out.println( "//"+ BinaryOperator.of((a,b)=> a+" // " +b ).apply(150,12) );
    }
}