#js常用方法

###对象数组去重
  ```
    Array.prototype.unique = function(key,yyy) {
        var arr = this;
        var n = [arr[0]];
        for (var i = 1; i < arr.length; i++) {
            if (key === undefined) {
                if (n.indexOf(arr[i]) == -1) n.push(arr[i]);
            } else {
                inner: {
                    var has = false;
                    for (var j = 0; j < n.length; j++) {
                        if (arr[i][key] == n[j][key]&&arr[i][yyy] == n[j][yyy] ) {
                            has = true;
                            break inner;
                        }
                    }
                }
                if (!has) {
                    n.push(arr[i]);
                }
            }
        }
        return n;
    }
    [{a:1,b:1},{a:2,b:2},{a:1,b:1},{a:1,b:1},{a:2,b:2},{a:1,b:1}].unique('a','b')
  ```