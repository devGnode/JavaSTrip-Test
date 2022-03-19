/*
*
*/
// @ts-ignore
import {System} from "lib-utils-ts/src/lang/System";
import {Method} from "lib-utils-ts/src/Reflect/Method";
import {Field} from "lib-utils-ts/src/Reflect/Field";
import {Predication} from "lib-utils-ts/src/Predication";
import {Class} from "lib-utils-ts/src/Class";

export class FieldTest{


    public static readonly staticOneAR:String       = "";

    public static staticOneA:FieldTest              = new FieldTest();
    public static staticOneAa:Method                = FieldTest.class().getMethod("staticOne", Method.STATIC);
    public static staticOneAp:Predication<string>   = Predication.of(()=>void 0);

    public readonly instancedOneAR:String       = "stringTest";

    public instancedOneA:string                 = null;


    public static Main(args:string[]):void{

        let fieldI:FieldTest = new FieldTest();

        System.out.println(fieldI.getClass().toString());
        System.out.println(FieldTest.class().toString());
        System.out.println(
            FieldTest
                .class()
                .getMethod("instancedOne")
                .toString()
        );
        System.out.println(
            fieldI.getClass()
                .getMethod("instancedOne")
                .toString()
        );
        System.out.println(
            FieldTest
                .class()
                .getMethod("instancedOne")
                .getMethodDescriptor()
            .toString()+"--" );
        System.out.println(
            FieldTest
                .class()
                .getMethod("instancedOne")
                .getMethodDescriptor()
                .isWritable() );
        System.out.println(
            fieldI.getClass()
                .getMethod("instancedOne")
                .getMethodDescriptor()
                .toString()
        );
        System.out.println(
            FieldTest
                .class()
                .getMethod("staticOne", Method.STATIC)
                .toString()
        );
        System.out.println(
            fieldI.getClass()
                .getMethod("staticOne", Method.STATIC)
                .toString()
        );

        System.out.println(
            FieldTest
                .class()
                .getMethod("staticOne", Method.STATIC)
                .getMethodDescriptor()
                .toString()
        );
        System.out.println(
            fieldI.getClass()
                .getMethod("staticOne", Method.STATIC)
                .getMethodDescriptor()
                .toString()
        );
        System.out.println("===============================" );
        System.out.println(
            fieldI
                .getClass()
                .getField("staticOneAp", Field.STATIC)

        );
        System.out.println(
            fieldI
                .getClass()
                .getField("staticOneAa", Field.STATIC)

        );
        System.out.println(
            fieldI
                .getClass()
                .getField("staticOneA", Field.STATIC)

        );
        System.out.println(
            fieldI
                .getClass()
                .getField("staticOneA", Field.STATIC)
                .getFieldDescriptor()
                .toString()

        );

        System.out.println("*************************************************" );
        FieldTest.class()
            .getField("staticOneA", Field.STATIC)
            .getFieldDescriptor()
            .final()
            .set();

        System.out.println(
            FieldTest.class()
                .getField("staticOneA", Field.STATIC)
                .getFieldDescriptor()
                .toString()

        );

        System.out.println(
            fieldI
                .getClass()
                .getField("staticOneAR", Field.STATIC)

        );
        System.out.println(
            fieldI
                .getClass()
                .getField("staticOneAR", Field.STATIC)
                .getFieldDescriptor()
                .toString()

        );
        System.out.println(
            FieldTest.class()
                .getField("staticOneA", Field.STATIC)

        );
        System.out.println(
            FieldTest.class()
                .getField("staticOneA", Field.STATIC)
                .getFieldDescriptor()
                .toString()

        );
        System.out.println(
            FieldTest.class()
                .getField("staticOneAR", Field.STATIC)

        );
        System.out.println(
            FieldTest.class()
                .getField("staticOneAR", Field.STATIC)
                .getFieldDescriptor()
                .toString()

        );

        System.out.println(
            fieldI.getClass()
                .getField("instancedOneAR", Field.INSTANCED)
        );
        System.out.println(
            fieldI.getClass()
                .getField("instancedOneAR", Field.INSTANCED)
                .getFieldDescriptor()
                .toString()

        );
        System.out.println(
            "********"+ FieldTest.class()
                .getField("instancedOneAR", Field.INSTANCED)

        );
        System.out.println(
            fieldI.getClass()
                .getField("instancedOneA", Field.INSTANCED)
        );
        System.out.println(
            fieldI.getClass()
                .getField("instancedOneA", Field.INSTANCED)
                .getFieldDescriptor()
                .toString()

        );
        System.out.println(
            FieldTest.class()
                .getField("instancedOneA", Field.INSTANCED)
        );
       // console.log(FieldTest.constructor.prototype["instancedOneA"]);

    }

    public instancedOne():void{}

    public static staticOne():void{}
}
Object.package(this);