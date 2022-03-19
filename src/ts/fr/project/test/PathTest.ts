import {Path} from "lib-utils-ts/src/file/Path";
import {Paths} from "lib-utils-ts/src/file/Paths";
import {System} from "lib-utils-ts/src/lang/System";
import {strictEqual} from "assert";

export class PathTest {

    public static Main(args:string[]):void{

        //
            let path:Path =Paths.get("c:\\\\","foo","bar");
        //let path:Path = new Path("");

        System.out.println("toString "+path.toString());
        System.out.println("getRoot "+path.getRoot());
        System.out.println("isAbsolute "+path.isAbsolute());

        // getNameCount
        System.out.println(new Path("/foo/bar/tt.p").getNameCount());
        strictEqual(new Path("/foo/bar/tt.p").getNameCount(),3);
        System.out.println(new Path("/foo/bar/v.ext.png").getNameCount());
        strictEqual(new Path("/foo/bar/v.ext.png").getNameCount(),3);
        System.out.println("getNameCount "+new Path("/foo/bar/v").getNameCount());
        strictEqual(new Path("/foo/bar/v.ext.png").getNameCount(),3);
        System.out.println("getNameCount "+new Path("/foo").getNameCount());
        strictEqual(new Path("/foo").getNameCount(),1);
        System.out.println("getNameCount "+new Path("/").getNameCount());
        strictEqual(new Path("/").getNameCount(),0);

        //
        System.out.println("FileName "+new Path("/foo/bar/v.ext.png").getFileName());
        System.out.println("getShortFileName "+new Path("/foo/bar/v.ext.png").getShortFileName());
        System.out.println("getShortFileName "+new Path("/foo/bar/v").getShortFileName());

        System.out.println("getShortFileName "+new Path("/foo/bar/v.ext.png").getShortFileName());
        System.out.println("getShortFileName "+new Path("/foo/bar/v").getShortFileName());
        // NAME
        System.out.println("getName "+new Path("/foo/bar/v.ext.png").getName(-1));
        System.out.println("getName "+new Path("/foo/bar/v.ext.png").getName(0));
        System.out.println("getName "+new Path("/foo/bar/v.ext.png").getName(5));

        //
        System.out.println("equals "+new Path("/foo/bar").equals(new Path("/foo/bar")));
        System.out.println("equals "+new Path("/").equals(new Path("/foo/bar")));
        System.out.println("equals "+new Path(".././foo/bar").equals(null));

        // GET EXT
        System.out.println("getExt "+new Path("").getExt());
        System.out.println("getExt "+new Path("/foo/bar/v").getExt());
        System.out.println("getExt "+new Path("/foo/bar/v.ext.png").getExt());

        // ROOT
        System.out.println("getRoot "+path.getRoot());
        System.out.println("getRoot "+new Path("").getRoot());
        //System.out.println("getRoot "+new Path("/").getRoot());
       // System.out.println("getRoot "+new Path("/c:/foo/bar").getRoot());

        // toForName
        System.out.println("toForNamePath "+new Path("/foo/bar").toForNamePath());
        System.out.println("toForNamePath "+new Path("c:/foo/bar").toForNamePath());
        //System.out.println("toForNamePath "+new Path("/c:/foo/bar").toForNamePath());
        System.out.println("toForNamePath "+new Path("./foo/bar").toForNamePath());
        System.out.println("toForNamePath "+new Path("foo/bar").toForNamePath());
       // System.out.println("toForNamePath "+new Path("").toForNamePath());
       // System.out.println("toForNamePath "+new Path("v.png").toForNamePath());
        System.out.println("toForNamePath "+new Path("foo/bar").toForNamePath());


        System.out.println("subpath "+new Path("/foo/bar/other/drink").subpath(4,5));
        System.out.println("compareTo "+new Path("/foo/bar/other/drink").compareTo(new Path("/foo/bar/other")));


        System.out.println("toForNamePath "+new Path("foo/bar").normalize());
        System.out.println("toForNamePath "+new Path(".././foo/bar").normalize());
        System.out.println("equals "+new Path(".././foo/bar").resolve());
        //System.out.println("equals "+new Path(".././foo/bar").);
        // Defect
        System.out.println("DEEFCTED" );

        System.out.println(path.toPosix());
        System.out.println("toString "+path.toString());
        //System.out.println("getRoot "+new Path(null).getRoot());
        System.out.println("toForNamePath "+new Path("/c:/foo/bar").toForNamePath());
        System.out.println("toForNamePath "+new Path("").toForNamePath());
        System.out.println("toForNamePath "+new Path("v.png").toForNamePath());
        System.out.println("getRoot "+new Path("/").getRoot());
        System.out.println("getRoot "+new Path("/c:/foo/bar").getRoot());
    }

}
Object.package(this);