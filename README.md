- [Description](#description)
- [Installation](#installation)
    - [NPM](#npm)

 # Description
Generation color code (HEX) based on string.
Parses a line into words and picks up the first letter of each word.
Returns an object with the first letters of each word and color.
Often used to generate user photos. You can see this in Telegram, WhatsApp and others.

# Installation

### NPM
```sh
$ npm install @bezlepkin/stringtohexcolor
```

# Usage
```sh
import stringtohexcolor from '@bezlepkin/stringtohexcolor'
console.log(stringtohexcolor('Igor Bezlepkin'))
```
Return object:
```sh
{
  string: 'ib',
  color: '371de6' (HEX)
}
```
