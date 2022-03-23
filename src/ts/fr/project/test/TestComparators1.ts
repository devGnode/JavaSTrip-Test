/***
 * https://mkyong.com/java8/java-8-lambda-comparator-example/
 */
import {List} from "lib-utils-ts/src/Interface";
import {Collections} from "lib-utils-ts/src/Collections";
import {Comparator} from "lib-utils-ts/src/Comparator";
import {ArrayList} from "lib-utils-ts/src/ArrayList";
import {System} from "lib-utils-ts/src/lang/System";

import {Developer} from "./Pojo/Developer";


export class TestComparators1 {

    public static Main( args: string[]):void {

        let listDevs: List<Developer> = TestComparators1.getDevelopers();

        System.out.println("Before Sort");
        listDevs.stream().each(v=>System.out.println(v));

        //sort by age
        Collections.sortComparator(listDevs, new class extends Comparator<Developer> {

            public compare = (o1: Developer, o2: Developer): number =>{
                return o1.getAge().compareTo( o2.getAge() )
                //return o1.getAge() - o2.getAge();
                //return o1.getSalary().compareTo(o2.getSalary())
            }
        });

        System.out.println("After Sort");
        listDevs.stream().each(v=>System.out.println(v));

    }

    private static getDevelopers():List<Developer> {

        let  result: List<Developer> = new ArrayList<Developer>();

        result.add(new Developer("mkyong", Number("70000"), 33));
        result.add(new Developer("alvin", Number("80000"), 20));
        result.add(new Developer("jason", Number("100000"), 10));
        result.add(new Developer("iris", Number("170000"), 55));

        return result;
    }

}
Object.package(this);