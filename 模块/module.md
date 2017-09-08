### Es6 模块
* 模块概念

  模块（ module ），基本意思就是把一个大程序，切分成多个文件。这样，说白了，一个文件就是一个模块。但是，在 ES6 编程领域，模块有自己的一些固定的使用语法。
*****
* 导出方式

  1.有两种形式：
  第一种叫做默认导出 。用 export default Person; 。对应的导入方式是 import Person from './Person' 。默认导出方式，在一个模块中，只能用一次，同时一次只能导出一个变量。

  2.另一种形式叫做命名导出 。如果我们想要一次导出多个变量，那就 export { Person，i};，对应的导入方式是 import { Person, i} from ./Person ，
*****  
* 运行环境

  import/export 是 ES6 新关键字。普通浏览器包括 nodejs 都还不支持。所以代码未来我们需要到 create-react-app 环境中去使用。
