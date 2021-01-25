<!-- TODO: -->
<!-- 1. add example for jQuery prepend/ append below section -->
<!-- 2. add instructions for wrapping li elements -->

# SnazzyMenu.js

Responsive, lightweight, mega menu plugin written in jQuery and SCSS.

Click [here](https://teloe.me/snazzymenu/) to see SnazzyMenu in action.

## Installation

Download/ Clone this repo and include ```snazzymenu.min.js``` and ```snazzymenu.css```  in your project.

### CSS
Include ```snazzymenu.css```
```html
<link rel="stylesheet"  href="PATH_TO/css/snazzymenu.css">
```
or import in your css
```css
@import url('https://github.com/teloe/snazzymenu/blob/main/css/style.css')
```

### JS
Include ```snazzymenu.min.js``` and call ```snazzyMenu()``` to initialize.
```html
<script type="text/javascript"  src="PATH_TO/js/snazzymenu.min.js"></script>
<script type="text/javascript">
    jQuery(document).ready(function($) {
        jQuery('.snazzymenu').snazzyMenu({
            // options
        });
    });
</script>
```

## Usage

SnazzyMenu is designed to work well with Wordpress sites and can be implemented in other environments by following this markup in your HTML.

```html
<div class="snazzymenu">
    <ul id="menu-main-nav"  class="menu">
        <li id="" class="menu-item-has-children"><a href="">Nav Item</a>
            <ul class="sub-menu">
                <li class="menu-item-has-children"><a href="">Column Title</a>
                    <ul class="sub-menu">
                        <li><a href="">Menu Item</a>
                        <li><a href="">Menu Item</a>
                        <li><a href="">Menu Item</a>
                    </ul>
                </li>
                <li><a href="">Column Title</a></li>
                <li><a href="">Column Title</a></li>
                <li><a href="">Column Title</a></li>
            </ul>
        </li>
    </ul>
</div>
```
### Adding custom elements inside the mega menu
You can add custom elements (images, videos, etc.) by setting the ```colClasses``` value to ```true```. This will add unique class names to each ```li``` element in the order in which they appear in your markup. You will see "colomn-1", "column-2", "column-3", etc. class names for the ```li``` elements inside the mega menu container.

*Example Markup*
```html
<ul class="sub-menu mega-menu">
    <li id="" class="menu-item menu-item-type-post_type menu-item-object-page column-title column-1"><a href="">Column Title</a></li>
    <li id="" class="menu-item menu-item-type-post_type menu-item-object-page column-title column-2"><a href="">Column Title</a></li>
    <li id="" class="menu-item menu-item-type-post_type menu-item-object-page column-title column-3"><a href="">Column Title</a></li>
    <li id="" class="menu-item menu-item-type-post_type menu-item-object-page column-title column-4"><a href="">Column Title</a></li>
</ul>
```
You can then easily target those elements by class name and use jQuery ```prepend()``` or ```append()``` methods to add any element you'd like.

## Options

Here's a list of available settings.

```javascript
jQuery('.snazzymenu').snazzyMenu({
  breakpoint: 1024, // number in pixels to determine when the nav should turn mobile friendly
  sticky: true, // makes nav sticky on scroll (desktop only)
  position: 'static', // 'static', 'top', 'left', 'right' - when set to 'top', this forces the mobile nav to be placed absolutely on the very top of page
  homeBtn: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>', // Set a custom image like a logo that routes to homepage
  phoneBtn: '', // adds a click-to-call phone link to the top of menu - i.e.: "18009084500"
  phoneLabel: 'Call Us', // label for the phone button
  locationBtn: '', // adds a location link to the top of menu - i.e.: "/location/", "http://site.com/contact-us/"
  locationLabel: 'Location', // label for the location button
  colClasses: false // fixes horizontal scrollbar issue on very long navs
});
```

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `breakpoint` | *Integer* | 1024 | Number in pixels to determine when the nav should turn mobile friendly |
| `sticky` | *Boolean* | true | Makes the nav sticky on scroll |
| `position` | *String* | 'right' | Direction the mobile nav slides in from  |
| `homeBtn` | *String* | '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>' | Set a custom image like a logo that routes to homepage |
| `phoneBtn` | *String* | '' | Adds a click-to-call phone link to the top of menu - i.e.: "18009084500" |
| `phoneLabel` | *String* | 'Call' | Label (text) for the phone button |
| `locationBtn` | *String* | '' | Adds a location link to the top of menu - i.e.: "/location/", "http://site.com/contact-us/" |
| `locationLabel` | *String* | 'Location' | Label (text) for the location button |
| `colClasses` | *Boolean* | false | Adds unique class names to each list item (column) in the mega menu in the order in which they appear |

