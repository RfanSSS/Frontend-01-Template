# week 5 



## 1 构建 http client

## 1.1 一个简单的 client 例子 ---> xhr



```javascript
var xhr = new XMLHttpRequest;
xhr.open("get", "http://127.0.0.1:8088", true);
xhr.send(null);
// xhr.responseText ---> 会显示 OK
```



## 1.2 nodejs Net 库



示例

```javascript
const net = require("net";)
net.connect({
  address: "localhost",
  port: 8088,
  onread: {
    // Reuses a 4KiB Buffer for every read from the socket.
    buffer: Buffer.alloc(4 * 1024),
    callback: function(nread, buf) {
      // Received data is available in `buf` from 0 to `nread`.
      console.log(buf.toString('utf8', 0, nread));
    }
  }
});
```



