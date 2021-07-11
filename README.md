# Game of Life

Simple game of life implementation built with React.

## Running the simulation

If you have a built copy of the application, opening the `index.html` file in the `build` folder should work on both Chrome and FireFox (using CTRL/CMD + O). Otherwise...

### Instructions to build

1. Make sure you have NodeJS (v12+) and Yarn package manager on your system.

2. Clone the repository

3. Install dependencies with yarn

```shell
yarn install
```

4. Either run locally on a development server, or build the application

```shell
# Dev server
yarn start
```

```shell
# Build
yarn build 
```

## Simulation usage instructions

Due to the limited feature set, there's not much to explain here. You will be given a randomly generated grid of cells that should be sized based on how big your browser window was when you first loaded the app. Click on a cell to toggle it on/off (alive/dead), and then use the control panel on the top right to start/pause the simulation. There is an interval adjustment control so you can specify the delay between each generation in milliseconds.

## Thoughts on implementation

It's been a while since I've created an entire and cohesive project in a span of a few short hours. I greatly underestimated the amount of work I had to do with all the features/design elements that I wanted to include, such as a re-sizeable/re-scalable grid, brush tools for rapidly creating/erasing cells, and keyboard shortcuts for the controls. There were other basic features that I really think would help the user experience, such as toggling off the random generation, clearing the board, and resetting to initial state.

UI wise, I wanted to aim for as immersive of an experience as possible, with a UI similar to this physics sandbox called [The Powder Toy](https://powdertoy.co.uk/). The idea was to have the controls pushed to the edges of the screen as a small collection of buttons so the user could focus on the primary experience, which would be watching, creating, and destroying cells on the screen.

Most of the friction and slowdowns I encountered during this project were due to me trying to render the game in a somewhat performant matter. Using the HTML `canvas` element caused a lot of performance issues with mixed with a JavaScript framework, so I ended up re-factoring and taking an approach that would just use regular HTML `div` elements to render things out, but that took up a good portion of the time I had. Another mistake I made was with the `styled-components` CSS library that I used to render each Game of Life cell. I didn't consider the fact that whenever I had specified conditional CSS properties (ex. different colors for a living/dead cell), the library would generate a class for each cell, which was very unecessary. Thankfully the `styled-components` team had a work-around for that problem. Perhaps I should have taken a more light-weight approach that was less library/framework heavy, which could mean more repetitive work in some areas, but with the benefit of a lot less complexity.

If I were to continue on from here, there would be two large goals that I would work on. The first is to fix the responsiveness of the UI. Since I implemented the game's event loop as part the React event loop, there are various methods in the React API to interrupt/delay/skip the rendering part of the cycle when the user is about to perform a costly interaction (this including spamming the pause/stop button and toggling on a large amount of cells at once). The second goal, which depends on the use case, would be making sure that this project works on various devices and screen sizes. I've noticed that a lot of Game of Life implementations weren't really nice to draw cells on (and even worse on mobile devices). Solving this issue would add a lot more novelty and encourage the user to play around with the game like a true sandbox.

## Thanks to these resources

- [Game of Life Algorithm](https://rosettacode.org/wiki/Conway%27s_Game_of_Life#JavaScript)
- [setInterval React hook by Dan Abramov](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)
    - This was key in creating an event loop for the Game of Life algorithm without the usual headaches of intervals in React
- I also looked at existing implementations for some inspiration in rendering the game board itself.

