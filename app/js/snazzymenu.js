/**
 *
 * SnazzyMenu.js
 * Written by Tom Eloe
 * https://github.com/teloe/snazzymenu
 *
 * MIT license
 *
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module
        define([], factory(root));
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(root);
    } else {
        // Browser
        root.snazzyMenu = factory(root);
    }
})(
    typeof global !== 'undefined' ? global : this.window || this.global,
    function (root) {
        'use strict';


        /**
         * 
         * Variables
         * 
         */
        let settings;

        const snazzyMenu = {}; // Object for public APIs
        const supports = !!document.querySelector && !!root.addEventListener; // Feature test

        const nav = document.querySelector('.snazzymenu');
        const menu = document.querySelector('.menu');
        const hasSub = menu.querySelectorAll('li.menu-item-has-children');
        const subMenu = menu.querySelectorAll('.sub-menu');



        /**
         * 
         * Default options
         * 
         */
        const defaults = {
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
        };


        /**
         * 
         * Methods
         * 
         */

        /**
         * A simple forEach() implementation for Arrays, Objects and NodeLists
         * @private
         * @param {Array|Object|NodeList} collection Collection of items to iterate
         * @param {Function} callback Callback function for each iteration
         * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
         */
        const forEach = (collection, callback, scope) => {
            if (
                Object.prototype.toString.call(collection) === '[object Object]'
            ) {
                for (var prop in collection) {
                    if (
                        Object.prototype.hasOwnProperty.call(collection, prop)
                    ) {
                        callback.call(
                            scope,
                            collection[prop],
                            prop,
                            collection
                        );
                    }
                }
            } else {
                for (var i = 0, len = collection.length; i < len; i++) {
                    callback.call(scope, collection[i], i, collection);
                }
            }
        };

        /**
         * Merge defaults with user options
         * @private
         * @param {Object} defaults Default settings
         * @param {Object} options User options
         * @returns {Object} Merged values of defaults and options
         */
        const extend = (defaults, options) => {
            let extended = {};
            forEach(defaults, function (value, prop) {
                extended[prop] = defaults[prop];
            });
            forEach(options, function (value, prop) {
                extended[prop] = options[prop];
            });
            return extended;
        };




        const navSetup = () => {

            // Set the theme
            if (settings.theme === 'light' || settings.theme) {
                nav.classList.add(settings.theme);
            }

            // Set breakpoint
            if (settings.breakpoint) {
                settings.breakpoint;
            }

            // Sticky menu
            if (settings.sticky) {
                let navPos = nav.offsetTop;
                window.addEventListener('scroll', function () {
                    nav.classList.add('fixed');
                    if (document.scrollingElement.scrollTop <= navPos) {
                        nav.classList.remove('fixed');
                    }
                });
            }

            // Toggle button styles
            settings.toggleBtn !== 'caret' && settings.toggleBtn !== 'plus' ? menu.classList.add('caret') : menu.classList.add(settings.toggleBtn);


        }




        // Add unique class to mega menu columns
        const addColClasses = () => {
            if (settings.setColumnClasses) {
                
                const colTitle = menu.querySelectorAll('.column-title');

                colTitle.forEach((col, i) => {
                    col.classList.add('column' + '-' + (i + 1));

                    const a = col.querySelector('a');
                    const img = document.createElement('img');
                    
                    img.src = settings.setImages[i];
                    img.setAttribute('alt', 'Navigation image');

                    if (settings.setImages[i] === '' || settings.setImages[i] === undefined) {
                        img.style.display = 'none';
                    }

                    col.insertBefore(img, a);
                    
                });


            }
        }





        // Open Menu
        const openMenu = () => {
            const menuBtn = document.querySelector('.menu-btn');
            const closeOverlay = document.querySelector('.close-overlay');
            menuBtn.addEventListener('click', function () {
                this.classList.toggle('active');
                menu.classList.toggle('open');
                closeOverlay.classList.toggle('active');
                nav.classList.toggle('scroll');
            });

        }
        
        
        // Close Menu
        const closeMenu = () => {
            const menuBtn = document.querySelector('.menu-btn');
            const closeOverlay = document.querySelector('.close-overlay');
            menuBtn.classList.remove('active');
            menu.classList.remove('open');

            hasSub.forEach(li => {
                li.classList.remove('open');
                if (settings.noControls) {
                    li.classList.remove('active');
                }
                
            });

            subMenu.forEach(sub => {
                sub.style.height = '0px';
            });
                
            closeOverlay.classList.remove('active');
            nav.classList.remove('scroll');

            closeOverlay.addEventListener('click', function() {
                closeMenu();
            });

        }

        const closeOnEsc = () => {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    closeMenu();
                }
            });
        }


        const clickHandler = () => {

            const topListItems = menu.children;

            [...topListItems].forEach(li => {
                const topLinks = li.firstElementChild;

                
                topLinks.addEventListener('click', (e) => {
                    
                    if (li.classList.contains('menu-item-has-children')) {
                        e.preventDefault();
                    }
                    
                    for (let sibling of e.target.parentElement.parentElement.children) {
                        sibling.classList.remove('active');
                        e.target.parentElement.classList.add('active');
                    }

                });


            });


        }




        // Add elements
        const addElements = () => {

            const controls = document.createElement('div');
            const closeDiv = document.createElement('div');
            controls.innerHTML = `<div class="controls"><div class="logo"><a href="/" title="" aria-label="Home">` + settings.homeBtn + `</a></div><div class="cta"><button class="menu-btn" aria-label="Menu"></button></div></div>`;
            nav.insertBefore(controls, menu);
            closeDiv.classList.add('close-overlay');
            nav.after(closeDiv);

            const cta = nav.querySelector('.cta');
            const menuBtn = nav.querySelector('.menu-btn');  

            // Add click-to-call link
            if (settings.phoneBtn) {
                const callBtn = document.createElement('div');
                callBtn.innerHTML = `<a href="tel:` + settings.phoneBtn + `" class="call-btn" aria-label="Call"><svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"></path></svg> <span>` + settings.phoneLabel + `</span></a>`;
                
                cta.insertBefore(callBtn, menuBtn);
            }

             // Add location link
             if (settings.locationBtn) {
                const locationBtn = document.createElement('div');
                locationBtn.innerHTML =
                    `<a href="` + settings.locationBtn + `" class="location-btn" target="_blank" aria-label="Location"><svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"></path></svg> <span>` + settings.locationLabel + `</span></a>`;

                cta.insertBefore(locationBtn, menuBtn);
            }


            // Add toggle buttons
            hasSub.forEach(li => {
                const toggle = document.createElement('a');
                toggle.classList.add('toggle');
                toggle.setAttribute('href', '#');
                li.appendChild(toggle);

            });


        }



        const subMenus = () => {

            // Add .has-sub class to li dropdowns
            hasSub.forEach(li => {
                li.classList.add('has-sub');
            });

            // Add .mega-menu class to top-level sub-menus
            const topListItems = menu.children;
            [...topListItems].forEach(li => {

                const childSub = li.querySelector('.sub-menu');
                if ( li.contains(childSub) ) {
                    childSub.classList.add('mega-menu');
                }
                
            });


            // First main nav list item has active class
            const firstListItem = menu.querySelector('li');
            firstListItem.classList.add('active');

            // Add .column-title class to first li elements in mega menu
            const megaMenuListItems = document.querySelectorAll('.mega-menu > li');
            megaMenuListItems.forEach(li => {
                li.classList.add('column-title');
            });


            // Expands dropdown menu on click
            const toggle = menu.querySelectorAll('.toggle');
            
            toggle.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.target.closest('li').classList.toggle('open');

                    let sub = e.target.previousElementSibling;

                    if (sub.style.height !== '0px') {
                        sub.style.height = '0px';
                    } else {
                        sub.style.height = 'auto';
                    }

                });
            });



        }



        // Add no-controls class to snazzymenu element
        const setNoControls = () => {
            if (settings.noControls) {
                nav.classList.add('no-controls');
                hasSub.forEach(li => {
                    li.classList.remove('active');
                    
                    li.addEventListener('click', () => {
                        const closeOverlay = document.querySelector('.close-overlay');
                        closeOverlay.classList.add('active');
                    });
                    
                });

                
            }
        }
        
        


        const checkWidth = () => {
            
            const browserWidth = window.innerWidth;

            if (browserWidth < settings.breakpoint) {
                console.log('is mobile');
                nav.classList.add('mobile');
                nav.classList.remove('desktop');

            } else {
                console.log('is desktop');
                nav.classList.remove('mobile');
                nav.classList.add('desktop');

            }
           
        }

        const windowResize = () => {
            const mq = window.matchMedia('screen and (min-width:' + settings.breakpoint + 'px)');

            mq.addEventListener('change', (e) => {

                if (!e.matches || e.matches) {
                    closeMenu();
                    checkWidth();
                }

            });
        }




        /**
         * Destroy the current initialization.
         * @public
         */
        snazzyMenu.destroy = function () {
            // If plugin isn't already initialized, stop
            if (!settings) return;

            // Reset variables
            settings = null;
            // eventTimeout = null;
        };



        /**
         * Initialize Plugin
         * @public
         * @param {Object} options User settings
         */
        snazzyMenu.init = function (options) {
            // feature test
            if (!supports) return;

            // Destroy any existing initializations
            snazzyMenu.destroy();

            // Merge user options with defaults
            settings = extend(defaults, options || {});

            
            addElements();
            navSetup();
            openMenu();
            closeMenu();
            closeOnEsc();
            checkWidth();
            windowResize();
            subMenus();
            clickHandler();
            addColClasses();
            setNoControls();


        };

        /**
         * 
         * Public APIs
         * 
         */

        return snazzyMenu;
    }
);
