import { count, add } from "../module/module1";
import module2 from "../module/module2";

console.log("before：", count); //0
add();
console.log("after：", count); //1

console.log("module2", module2);
