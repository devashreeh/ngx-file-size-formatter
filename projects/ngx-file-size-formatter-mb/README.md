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

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...,
    NgxFileSizeFormatterMbModule
  ],
  providers: [...],
  bootstrap: [...]
})
export class AppModule { }
```

The `fileSize` pipe will accept data in bytes and returns the file size in 'bytes','KB','MB','GB','TB','PB' according to the value

# Example
  `<div>`
    `{{ '1024' | fileSize}}`
  `</div>`

## Authors

**Devashree Hingne** - [GitHub](https://github.com/dineshpanjwani33)

## License

None