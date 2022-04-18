import browser from 'webextension-polyfill';
import Fuse from 'fuse.js';

const compare = (a?: number, b?: number) => {
  if (a == undefined) return 1;
  if (b == undefined) return -1;

  return a - b;
}

browser.runtime.onMessage.addListener(async (message: string, _sender) => {
  const historyItems = await browser.history.search({ text: '' })

  const fuse = new Fuse(historyItems, { keys: ['title', 'url'] })
  const fuseResult = fuse.search(message).sort((a, b) => {
    return compare(a.item.lastVisitTime, b.item.lastVisitTime)
  })

  return fuseResult.map(result => result.item)
})