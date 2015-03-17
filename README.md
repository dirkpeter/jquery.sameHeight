# jquery.sameHeight
small jQuery plugin to set the same height for sibling elements


## Usage
`$('#myElement > li').sameHeight();`

or with config

`$('.mySelection').sameHeight({breakpoint: 800});`


## Config
* `delay` (10 [ms]) - buffering while resizing.
* `initialDelay` (10 [ms]) - delay before the initial height-adjustment.
* `breakpoint` (500 [px]) - window with above witch the plugin sets a min-height. below min-height will be set to 0;
* `minHeight` (0 [px]) - min-height for selected elements, when above the breakpoint.
