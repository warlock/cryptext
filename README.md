# boolean-search
Boolean Query Search

### Load library:
```js
const cryptext = require('cryptext')
```

### Encrypt:
```js
const text_encrypted = cryptext.encrypt('Hello world', '123')
```

### Decrypt:
```js
const text_decrypted = cryptext.encrypt(text_encrypted, '123')
console.log(text_decrypted)
```

```sh
Hello world
```

## License
The MIT License (MIT)
Copyright (c) 2018 Josep Subils (js@js.gl)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 