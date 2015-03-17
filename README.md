# jquery.sameHeight

small jQuery plugin to set the same height for sibling elements

![Bower](https://img.shields.io/bower/v/jquery.sameheight.svg?style=flat)



## Install

```
$ bower install jquery.sameheight --save
```



## Usage

```javascript
$('#myElement > li').sameHeight();
```

or with config
```javascript
$('.mySelection').sameHeight({
  breakpoint: 500,
  delay: 100,
  initialDelay: 10,
  minHeight: 0
});
```



## Config

* `breakpoint` (500 [px]) - window with above witch the plugin sets a min-height. below min-height will be set to 0;
* `delay` (10 [ms]) - buffering while resizing.
* `initialDelay` (10 [ms]) - delay before the initial height-adjustment.
* `minHeight` (0 [px]) - min-height for selected elements, when above the breakpoint.



## Authors

[Dirk Peter](https://github.com/dirkpeter)
