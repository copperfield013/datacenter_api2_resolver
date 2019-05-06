# datacenter_api2_resolver

用于打包解析datacenter_api2的工具类

<h2>获取npm模块包</h2>
当前包已经发布到npmjs服务器上，权限为public<br/>
<a target="_new" href="https://www.npmjs.com/package/datacenter_api2_resolver">项目链接</a><br/>
可以直接通过在package.json内添加依赖("datacenter_api2_resolver": "^1.0.16")，
然后import {HelloWorld, Utils} from 'datacenter_api2_resolver'获取代码模块<br/>


<h2>更新npm模块包</h2>
<ol>
<li>首先保证本地更新好的datacenter_api2_resolver项目代码已经更新完毕，并且更新package.json上的version字段</li>
<li>如果没有npmjs账号的，需要在<a target="_new" href="https://www.npmjs.com/signup">npmjs官网</a>上注册一个账号；</li>
<li>注册完成后，通过npm命令添加用户 "npm adduser"，填写相关的用户信息；</li>
<li>控制台cd到本地更新好的datacenter_api2_resolver项目目录；</li>
<li>执行命令npm publish</li>
<li>此时正常来说项目会自动打包，并且上传到npmjs服务上。成功后，将需要更新版本的项目版本改为新的版本号，并且然后npm install即可</li>
</ol>
