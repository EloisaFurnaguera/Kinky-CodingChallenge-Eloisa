# Kink.com Coding Challenge - Carousel

## Goal

Using the HTML below, write a self-executing vanilla JavaScript function that cycles through the images (much like a carousel). Each image should be displayed for roughly 1 second before moving on to the next image.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Carousel</title>
        <style>
            .carousel img {
                display: none;
            }
        </style>
    </head>
    <body>
        <h1>My Carousel</h1>
        <div class="carousel">
            <img alt="First" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=1&w=350&h=200" />
            <img alt="Second" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=2&w=350&h=200" />
            <img alt="Third" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=3&w=350&h=200" />
            <img alt="Fourth" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=4&w=350&h=200" />
            <img alt="Fifth" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=5&w=350&h=200" />
        </div>
        <script>
            // Your Code
        </script>
    </body>
</html>
```

Your output should emulate the following animated gif:

![](https://github.com/Kink-Com/CodingChallenge/blob/master/frontend/carousel/carousel.gif)

### Bonus

If you were to use third-party tools to complete this challenge, what would you use? Write a sentence or two describing your reasoning.

## Guidelines

- All code should be written in ES6 JavaScript.
- No third-party libraries or plugins are allowed.
- Documentation and maintainability is a plus.

### Time Allotment

We respect your time and would prefer you not spend more than 3-5 hours. Feel free to include code comments to indicate any features you don't have time to implement.
