# SnazzyMenu.js

Responsive, lightweight, mega menu

<a href="https://github.com/teloe/snazzymenu/blob/main/LICENSE"><img src="https://img.shields.io/github/license/teloe/snazzymenu?style=for-the-badge" /></a>

[Demo](https://teloe.github.io/snazzymenu/)

## ⚡️  Features

-   Responsive
-   Lightweight (~8kb minified)
-   Fully customizable
-   Sticky menu for both mobile and desktop

## 🔧 Getting Started
### HTML Setup
Include minified CSS and JS from `dist/`

```html
<link rel="stylesheet" href="path-to-snazzymenu.css">

<script type="text/javascript" src="path-to-snazzymenu.min.js"></script>
<!-- Call snazzyMenu to initialize -->
<script type="text/javascript">
    snazzyMenu.init();
</script>
```

Define options to override defaults
```js
const options = {
    theme: 'light',
    breakpoint: 1000,
}
snazzyMenu.init(options);
```

### Basic Markup
```html
<div class="snazzymenu">
    <ul class="menu">
        <li class="menu-item-has-children">
            <a href="">Nav Item</a>
            <ul class="sub-menu">
                <li class="menu-item-has-children">
                    <a href="">Column Title</a>
                    <ul class="sub-menu">
                        <li><a href="">Menu Item</a></li>
                        <li><a href="">Menu Item</a></li>
                        <li><a href="">Menu Item</a></li>
                    </ul>
                </li>
                <li><a href="">Column Title</a></li>
                <li><a href="">Column Title</a></li>
                <li><a href="">Column Title</a></li>
            </ul>
        </li>
        <li><a href="">Link to page</a></li>
    </ul>
</div>
```


## 🔌 Options
### Defaults
```js
const options = {
    theme: 'dark',
    breakpoint: 1024,
    sticky: true,
    toggleBtn: 'caret',
    homeBtn: '<svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path><path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path></svg>',
    phoneBtn: '',
    phoneLabel: 'Call',
    locationBtn: '',
    locationLabel: 'Location',
    setColumnClasses: false,
    setImages: [],
    noControls: false,
}
```


| Property           | Type      | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                               |
|--------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `theme`            | `string`  | 'dark'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Set theme to `.snazzymenu` element. 'light' or 'dark'.                                                                                                                                                                                                                    |
| `breakpoint`       | `number`  | 1024                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Breakpoint in pixels where menu becomes mobile/desktop friendly.                                                                                                                                                                                                          |
| `sticky`           | `boolean` | true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Sticky menu on scroll. Set `false` to disable sticky behavior.                                                                                                                                                                                                            |
| `toggleBtn`        | `string`  | 'caret'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Mobile toggle button icon style. These buttons initiate toggle dropdown for `.sub-menu` elements. 'caret' or 'plus'.                                                                                                                                                      |
| `homeBtn`          | `string`  | '<svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path><path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path></svg>' | Homepage menu button. Replace default home icon with any custom brand/logo image.                                                                                                                                                                                         |
| `phoneBtn`         | `string`  | ''                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Adds click-to-call phone link. Example: '1-800-555-5555'.                                                                                                                                                                                                                 |
| `phoneLabel`       | `string`  | 'Call'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Label for phone button. Replace with any `string`.                                                                                                                                                                                                                        |
| `locationBtn`      | `string`  | ''                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Adds location link that opens in new browser tab. Example: 'https://goo.gl/maps/1rnrs4MPkKKSsKPL7'.                                                                                                                                                                       |
| `locationLabel`    | `string`  | 'Location'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Label for location button. Replace with any `string`.                                                                                                                                                                                                                     |
| `setColumnClasses` | `boolean` | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Set unique column class names to each `li.column-title` element in mega menu. This will set class name of `li.column-[i]` in the order in which they appear.                                                                                                              |
| `setImages`        | `array`   | []                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `setColumnClasses` must be `true`. Set the path to images that will show above each `li.column-title` in the order in which they appear. Example: [ '`path-to-img1.jpg`', '`path-to-image2.jpg`', etc. ]. This will display images above `li.column-1` and `li.column-2`. |
| `noControls`       | `boolean` | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Removes the top `.controls` element and shows top-level menu items on desktop viewports only. Set to `true` will remove hamburger menu, call button, location button, and homepage logo/button.                                                                           |


### Adding images to mega menu columns
To show images above each mega menu column, set `setColumnClasses` to `true`. This will add unique class names to each `li.column-title` element inside the mega menu. The markup will look something like this:

```html
<ul class="sub-menu mega-menu">
    <li class="menu-item-has-children has-sub column-title column-1">
        <a href="">Column 1</a>
        <ul class="sub-menu">
            <!-- sub-menu items -->
        </ul>
    </li>
    <li class="menu-item-has-children has-sub column-title column-2">
        <a href="">Column 2</a>
        <ul class="sub-menu">
            <!-- sub-menu items -->
        </ul>
    </li>
    <li class="menu-item-has-children has-sub column-title column-3">
        <a href="">Column 3</a>
        <ul class="sub-menu">
            <!-- sub-menu items -->
        </ul>
    </li>
</ul>
```

The next step is to add the paths to each image in the `setImages` array. This will add an image in the order of each `li.column-title` element. For example: 

```js
const options = {
    setColumnClasses: true,
    setImages: [
        'path-to-img1.jpg',
        'path-to-img2.jpg',
        'path-to-img3.jpg',
    ],
};
```
will output the following markup:

```html
<ul class="sub-menu mega-menu">
    <li class="menu-item-has-children has-sub column-title column-1">
        <img src="path-to-img1.jpg" alt="Navigation image" />
        <a href="">Column 1</a>
        <ul class="sub-menu">
            <!-- sub-menu items -->
        </ul>
    </li>
    <li class="menu-item-has-children has-sub column-title column-2">
        <img src="path-to-img2.jpg" alt="Navigation image" />
        <a href="">Column 2</a>
        <ul class="sub-menu">
            <!-- sub-menu items -->
        </ul>
    </li>
    <li class="menu-item-has-children has-sub column-title column-3">
        <img src="path-to-img3.jpg" alt="Navigation image" />
        <a href="">Column 3</a>
        <ul class="sub-menu">
            <!-- sub-menu items -->
        </ul>
    </li>
</ul>
```
Note: images are only visible on desktop viewports.
