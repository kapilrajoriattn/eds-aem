export default function decorate(block) {
  const quoteWrapper = block.children[0];
  const attributionWrapper = block.children[1];
  const quotation = quoteWrapper ? quoteWrapper.firstElementChild : null;
  const attribution = attributionWrapper ? attributionWrapper.firstElementChild : null;
  const blockquote = document.createElement('blockquote');

  if (quotation) {
    quotation.className = 'quote-quotation';
    blockquote.append(quotation);
  }

  if (attribution) {
    const cite = document.createElement('cite');
    cite.innerHTML = attribution.innerHTML;
    cite.className = 'quote-attribution';
    attribution.replaceWith(cite);
    blockquote.append(cite);
  }

  block.innerHTML = '';
  block.append(blockquote);
}
