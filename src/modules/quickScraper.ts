import type {
  AttributeOutputs,
  QuickCrawler,
  QuickCrawlerOutput,
} from "../types/QuickCrawlerType";
import { selectorHandler } from "../utils/selectorHandler";
import { urlParser } from "../utils/urlParser";

export const quickScraper = async ({
  url,
  options,
}: QuickCrawler): Promise<QuickCrawlerOutput> => {
  const $ = await urlParser(url);

  const optionKeys = Object.keys(options);

  const data: Record<string, AttributeOutputs> = {};

  optionKeys.forEach((key) => {
    const object = options[key];
    const { selector, href, attrs, listItem, text = true } = object;

    if (listItem) {
      const lists: AttributeOutputs[] = [];
      $(selector).each((_i, childElement) => {
        const keyResult = selectorHandler({
          text,
          href,
          url,
          attrs,
          childElement,
          data: $,
        });
        lists.push(keyResult);
      });

      data[key] = {
        lists,
      };
    } else {
      const keyResult = selectorHandler({
        text,
        data: $,
        selector,
        href,
        url,
        attrs,
      });
      data[key] = keyResult;
    }
  });

  return {
    raw: $,
    data,
  };
};