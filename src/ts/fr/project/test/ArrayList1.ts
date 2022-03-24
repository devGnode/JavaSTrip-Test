import {System} from "lib-utils-ts/src/lang/System";
import {IConsumer, iterator, List} from "lib-utils-ts/src/Interface";
import {ArrayList} from "lib-utils-ts/src/ArrayList";

export class ArrayList1 {

    public static Main(argc:string[]):void{

        System.out.println("==================== ArrayList ==================")
        let arr:List<number> = new ArrayList();
        System.out.println( arr );

        arr = new ArrayList([1,2,3,4,5,6,7,8]);
        System.out.println( arr );

        System.out.println("==================== Replace All ==================")
        arr.replaceAll(2,8);
        arr.spliterator()
            .forEachRemaining(new class implements IConsumer<number>{
            accept = (value:number)=> console.log("consumer=",value)
        });

        System.out.println("==================== IndexOf ==================")
        System.out.println( arr.indexOf(6) +"\t"+ arr.indexOf(22)  );

        System.out.println("==================== Iterator ==================")
        let itr: iterator<number> = arr.iterator();
        while (itr.hasNext()){
            System.out.println("iterator = "+ itr.next());
        }
        System.out.println("==================== ToString ==================")
        System.out.println( arr.toString()  );

        System.out.println("==================== Sort ==================");
        arr = new ArrayList([14,25,4,8,11,3,66,2]);
        arr.sort();
        System.out.println( arr );

        System.out.println("==================== Get ==================");
        System.out.println("index 2 = " + arr.get(2) );

        System.out.println("==================== Remove ==================");
        System.out.println("index 2 = " + arr.remove(2) +"/"+ arr );


        System.out.println("==================== RemoveAll ==================");
        arr = new ArrayList([66,14,66,4,8,11,3,66,2]);
        System.out.println("index 2 = "+ arr.removeAll(66) + "/"+ arr );

        System.out.println("==================== Contains ==================");
        System.out.println("contains = "+ arr.contains(8));

        System.out.println( "========================================================" );
    }
}