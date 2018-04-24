# lol-champs

![](header.jpeg)

<p align="center">
<a href="https://fanart.na.leagueoflegends.com/en_US/collection/Quirkilicious/"> Art By❤️ QUIRKILICIOUS</a>
</p>

<p align="center">
  <a href="https://travis-ci.org/jeffminsungkim/lol-champs">
  <img src="https://travis-ci.org/jeffminsungkim/lol-champs.svg?branch=master" alt="Build Status"></a>
  <a href="https://www.npmjs.com/package/lol-champs">
  <img src="https://img.shields.io/node/v/lol-champs.svg?label=works%20on%20node" alt="Node Version"></a>
  <a href="https://github.com/facebook/jest">
  <img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Jest"></a>
  <a href="https://github.com/prettier/prettier">
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="Prettier"></a>
  <a href="https://www.npmjs.com/package/lol-champs">
  <img src="https://img.shields.io/npm/dt/lol-champs.svg" alt="Downloads"></a>
  <a href="https://github.com/jeffminsungkim/lol-champs/blob/master/license">
  <img src="https://img.shields.io/github/license/jeffminsungkim/lol-champs.svg" alt="License"></a>
</p>

> Get champion names of League of Legends

## Install

```
$ npm install lol-champs
```

## Usage

```js
// ES6
import * as lolChamps from 'lol-champs';

// CommonJS
const lolChamps = require('lol-champs');

lolChamps.all();
//=> ['Wukong', 'Jax', ...]

lolChamps.getName(222);
//=> 'Jinx'

lolChamps.getId('Ezreal');
//=> 81

```


## API

### .all(lang: string = 'en') : string[]

Get a list of entire names.

#### lang

[Language code](#supported-languages) to retrieve the list of champion names.

```js
lolChamps.all();
//=> ['Wukong', 'Jax', ...]

lolChamps.all('zh-Hans');
//=> ['齐天大圣', '武器大师', ...]
```

### .getChampion(name: string, lang: string = 'en') : object

Get champion data by using name.

#### lang

[Language code](#supported-languages) to retrieve the champion data.

```js
lolChamps.getChampion('Cassiopeia');
//=> { title: 'the Serpent's Embrace', id: 69, key: 'Cassiopeia', name: 'Cassiopeia'},

lolChamps.getChampion('Ли Син', 'ru');
//=> { title: 'Слепой монах', id: 64, key: 'LeeSin', name: 'Ли Син' }
```

### .random(lang: string = 'en') : string

Get a random champion name that's **never the same as the previous**.

```js
lolChamps.random();
lolChamps.random();
//=> 'Fizz'
//=> 'Thresh'

lolChamps.random('ko');
lolChamps.random('ko');
//=> '야스오'
//=> '티모'

lolChamps.random('zh-Hans');
lolChamps.random('zh-Hans');
//=> '蒸汽机器人'
//=> '时间刺客'

lolChamps.random('ru');
lolChamps.random('ru');
//=> 'Катарина'
//=> 'Пантеон'

lolChamps.random('ja');
lolChamps.random('ja');
//=> 'トリスターナ'
//=> 'ソラカ'
```

### .getName(champId: number, lang: string = 'en') : string

Get champion name by using ID.

#### lang

[Language code](#supported-languages) to retrieve the name of champion.

```js
lolChamps.getName(35);
//=> 'Shaco'

lolChamps.getName(35, 'ko');
//=> '샤코'
```

### .getId(name: string, lang: string = 'en') : string

Get champion ID by using name.

#### lang

[Language code](#supported-languages) of the localized name.

```js
lolChamps.getName('Amumu');
//=> '32'

lolChamps.getName("Амуму", 'ru');
//=> '32'
```

### .languages : Set<string>

Check supported languages.

```js
lolChamps.languages.has('de');
//=> true
```

## Supported languages

Champion names are available for the following languages:

- `cs` (Czech)
- `de` (German)
- `el` (Greek)
- `en` (English)
- `fr` (French)
- `hu` (Hungalian)
- `it` (Italian)
- `ja` (Japanese)
- `ko` (Korean)
- `pl` (Polish)
- `pt` (Portuguese)
- `ru` (Russian)
- `tr` (Turkish)
- `vn` (Vietnamese)
- `zh-Hans` (Simplified Chinese)
- `zh-Hant` (Traditional Chinese)

The language codes follow the [IETF BCP 47 standard](https://en.wikipedia.org/wiki/IETF_language_tag).

## License

MIT © [JeffMinsungKim](https://jeffminsungkim.com)
