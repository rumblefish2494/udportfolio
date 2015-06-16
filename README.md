PROJECT 4 WEB PERFORMANCE OPTIMIZATION
BRIAN HARLIN
6/14/15

INSTRUCTIONS:
SOURCE LOCATION: https://github.com/rumblefish2494/udportfolio
LOAD ALL FILES ONTO YOUR LOCAL MACHINE FROM GIT HUB
MAINTAIN DIRECTORY STRUCTURE AND NAIMING
OPEN index.html IN BROWSER, USE LINKS IN index.html TO ACCESS OTHER PAGES.

ASSIGNMENT NOTES:
INDEX page notes.
Requirements: >90% on PageSpeedInsights
steps taken:
the first thing I did was re-size all pictures to around the size that they were actually being displayed at
per Ilyas guidance on his google developers pages.
I experimented with compressing with the built in tools that my machine had... just adjusting the image quality.
it wasn't until later that I employed an online lossy compressor.

changed the print style to media query to reduce css render blocking

abandoned web fonts for common browser font

inlined css

compressed images using: https://compressor.io/
final PageSpeedInsights score using python SimpleHTTPServer -> ngrok of 95% for mobile devices

PIZZA page notes.
Requirements: avg <60fps for page scrolling on timeline trace, time to resize pizzas <5ms_
				comments present *** see non-minified files, READMME file present, Student researched_
				and used build tools.
resized images
reduced image quality

REMOVED LAYOUT THRASHING / FSL IN PIZZA RESIZE SLIDER. I CHANGED THIS BEFORE
I COMPLETED THE SUBSEQUENT COURSE BROWSER RENDERING OPTIMIZATION, IN WHICH CAMERON
PROVIDES THE SOLUTION...MY SOLUTION IS NOT AS PERFORMANT AS HIS BUT IT MEETS THE STANDARDS
OF THE REQUIREMENTS AND I CAME UP WITH IT ON MY OWN, SO I LEFT IT THAT WAY.

The scrolling pizzas gave me more of a problem. I kept trying to switch my angle of attack midstream
and ended up going around in circles. I reduced the average time to render frames quite a bit by moving the variable creation:
var dx = determineDx(document.querySelectorAll(".randomPizzaContainer")[i], size);
outside of the for loopbut I wasn't quite getting the framerate needed. I reviewed many of the web pages used in the class for ideasand experimented with different things but nothing yielded the results. Finally I was reading cameron's notes in the code where I shows and provides the link to the code algorithm for the scrolling pizzas at
https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html
looking at Ilya's code the solution became apparant and was so simple I wanted to punch myself for all the hours going cross eyed trying to figure this out.
moving the calculation for 'document.body.scrollTop / 1250' outside the for loop and storing it in a variable
to be used inside the for loop gave me the performance boost to get me where I wanted to be.

installed NPM and Gulp.
built and added packets to gulpFile.js to minify js, css, and HTML.

final Average time to generate last 10 frames: ~.4ms, time to resize pizzas: ~1.79ms


***********
RESOURCES (in no particular odor)
***********
1.instructor notes in code
2.https://github.com/udacity/fend-office-hours/tree/master/Web%20Optimization/Effective%20Optimizations%20for%2060%20FPS
3.https://www.udacity.com/course/viewer#!/c-nd001/l-2735848561/m-2686388535
4.https://www.udacity.com/course/viewer#!/c-nd001/l-2735848561/m-2686388535
5.https://github.com/cameronwp/udportfolio
6.https://www.npmjs.com/package/gulp-htmlmin/
7.https://compressor.io/
8.https://www.youtube.com/watch?v=wNlEK8qrb0M (and subsequent videos through #3)
9.https://developer.chrome.com/devtools/docs/timeline
10.https://developers.google.com/speed/pagespeed/insights/
11.MDN
12.http://www.w3schools.com/cssref/
13.https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css
































## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>
