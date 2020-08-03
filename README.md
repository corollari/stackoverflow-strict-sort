<h1 align="center">
  <br>
  <img src="https://raw.githubusercontent.com/corollari/stackoverflow-strict-sort/master/images/icon.png" width="200">
  <br>
  WaifuChain Extension
  <br>
</h1>

<h4 align="center">A browser extension that sorts StackOverflow's answers by upvotes only, without preference for accepted answers</h4>

![example](https://raw.githubusercontent.com/corollari/stackoverflow-strict-sort/master/images/example.png)

## Install
- [Chrome extension]()
- [Firefox addon]()

## Why
When looking something up on stackoverflow, a common pattern of usage for me is to just grab the top answer for a question and just try it. This works most of the time, but sometimes the answer that appears on top is not the best one or has some minor problems which force me to go back and check the other answers.

Usually, this happens when that answer has been accepted by the asker before a better one popped up, so while the other answer is better and has more upvotes (and is usually full of comments proclaiming it), the first is hoisted to the top due to that green tick.

So, after havign this happen to me countless times, I developed this simple extension, shich should prevent that by sorting the answers purely based on upvotes, ignoring whether the original asker has marked an answer as accepted.

## How it works
The extension just injects some javascript code in stackoverflow's answer pages, which applies some simple DOM manipulation to change the order of the elements.

## Development
No minifying/transpiling/bundling is applied on the code, so the extension can be loaded unpacked directly from the source directory. If you'd like to generate the icons and bundle the extension in a .zip file for distribution, just run the following file (requires a system-level installation of ImageMagick):
```bash
bash build.sh -i
```

## License
MIT
