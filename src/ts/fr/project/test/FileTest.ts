import {File} from "lib-utils-ts/src/file/File";
import {System} from "lib-utils-ts/src/lang/System";
/*
* */
export class FileTest {

    public static Main(args:string[]):void{

        new File('./easy.up').createNewFile();
        let file:File = new File('./easy.up');

        System.out.println("fileExist = "+file.exists());
        System.out.println( "is a file = "+file.isFile());
        System.out.println("isa directory = "+ file.isDirectory());
        System.out.println("Is absolute File = "+file.isAbsolute());
        System.out.println("File size = "+file.length());

        // defected method
        System.out.println("Create mkdir "+file.toString()+"= "+file.mkdir());
        System.out.println("Create dir ./up = "+new File('./up').mkdir());

        System.out.println("file equality = "+file.equals(new File('./upv')));
        System.out.println("file equality = "+file.equals(new File('./easy.up')));
        System.out.println(file.renameTo(new File('./easyd.up')));
        System.out.println(file.toString());

        file=new File("./foo/bar/drink.ext");
        System.out.println("File getParent = "+file.getParent());
        System.out.println("File exists = "+file.exists());
        System.out.println("File exists = "+file.getName());

        // defected method
        System.out.println("File exists = "+file.getAbsolutePath());
        System.out.println("./ is absolute  = "+new File("./sdsd").isAbsolute());
        System.out.println("/ is absolute = "+new File("/").isAbsolute());
        System.out.println("C:\\ is absolute = "+new File("C:\\").isAbsolute());

        System.out.println("File exists = "+new File("./src/ts/fr/project/test").list());
        System.out.println("File exists = "+new File("./src/ts/fr/project/test").listFiles());

        System.out.println("File exists = "+new File("./").getParent());
        System.out.println("File exists = "+new File("./src/ts/fr/project/test.tp").getParentFile().toString());

    }
}
Object.package(this);