# ngx-file-size-formatter-mb
## Prerequisites

Angular Version > 8 

## Installation

To install and set up the library, run:

```sh
$ npm install -s ngx-file-size-formatter-mb
```

Or if you prefer using Yarn:

```sh
$ yarn add ngx-file-size-formatter-mb
```
## Usage
##### Importing ngx-file-size-formatter-mb

Import the ngx-file-size-formatter-mb utility into your Angular application:

```tsx
import {NgxFileSizeFormatterMbModule} from 'ngx-file-size-formatter-mb';
```

The `fileSize` pipe will only accepts data in bytes and returns the size in       'bytes','KB','MB','GB','TB','PB'

# Example
 <div>
    <h3>1024 Bytes = </h3>
    <h2> {{ '1024' | fileSize}}</h2>
  </div>
## License

None