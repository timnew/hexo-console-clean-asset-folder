**<h2>OBSOLETE WARNING</h2>**  

**This Plug-in is designed to be the companion of [hexo-tag-asset-res](https://github.com/timnew/hexo-tag-asset-res) for Hexo 2. And it is considered to be obsoleted after Hexo 3 released, which already has the `asset-folder` feature built-in.**

hexo-console-clean-asset-folder [![NPM version][npm-image]][npm-url] [![Dependency Status][depstat-image]][depstat-url]
===============================

> [Hexo] console plugin that remove empty asset folders

## Install

Install using [npm][npm-url].

    $ npm install hexo-console-clean-asset-folder --save

## Usage

With the help of `hexo-console-clean-asset-folder`, now you can feel free to have following config in your `_config.yml`

```yaml
post_asset_folder: true
```
After you finished the post composition, run following command

```
  $ hexo clean_asset_folder
```
Or
```
  $ hexo caf
```
Then all the empty asset folders will be removed automatically

## Advanced Usage

If you have empty folders in folder other than `source/_drafts` or  `source/_posts`. You can specify the path in this way:

```
  $ hexo caf --no-draft --no-post themes/my_awesome_theme
```

All the empty folder under `themes/my_awesome_theme` will be cleaned.

* Switch `--no-draft` prevent plug-in to scan `/source/_drafts` folder
* Switch `--no-post`  prevent plug-in to scan `/source/_posts` folder

## License
MIT

[![NPM downloads][npm-downloads]][npm-url]

[homepage]: https://github.com/timnew/hexo-console-clean-asset-folder

[npm-url]: https://npmjs.org/package/hexo-console-clean-asset-folder
[npm-image]: http://img.shields.io/npm/v/hexo-console-clean-asset-folder.svg?style=flat
[npm-downloads]: http://img.shields.io/npm/dm/hexo-console-clean-asset-folder.svg?style=flat

[depstat-url]: https://gemnasium.com/timnew/hexo-console-clean-asset-folder
[depstat-image]: http://img.shields.io/gemnasium/timnew/hexo-console-clean-asset-folder.svg?style=flat

[Hexo]: http://hexo.io/
