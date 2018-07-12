const {expect} = require('chai');
const examples = require('./examples');

test('renders a details element', context => {
  const {$} = context.render(examples.default);

  const $component = $('.govuk-details');
  expect($component.get(0).tagName).to.equal('details');
});

test('allows specifying details id', context => {
  const {$} = context.render(examples.expanded);

  const $component = $('.govuk-details');
  expect($component.attr('id')).to.equal('help-with-nationality');
});

test('allows setting details to "open"', context => {
  const {$} = context.render(examples.expanded);

  const $component = $('.govuk-details');
  expect($component.attr('open')).to.equal('open');
});

test('includes a nested summary', context => {
  const {$} = context.render(examples.default);

  // Look for the summary element _within_ the details element
  const $summary = $('.govuk-details .govuk-details__summary');
  expect($summary.get(0).tagName).to.equal('summary');
});

test('renders body content', context => {
  const {$} = context.render({
    renderBody: out => out.w('More about <b>bold text</b>')
  });

  const detailsText = $('.govuk-details__text').html().trim();
  expect(detailsText).to.equal('More about <b>bold text</b>');
});

test('allows summary text to be passed whilst escaping HTML entities', context => {
  const {$} = context.render({
    summary: 'The greater than symbol (>) is the best'
  });

  const detailsText = $('.govuk-details__summary-text').html().trim();
  expect(detailsText).to.equal('The greater than symbol (&gt;) is the best');
});

test('allows additional classes to be added to the details element', context => {
  const {$} = context.render({
    classes: 'some-additional-class'
  });

  const $component = $('.govuk-details');
  expect($component.hasClass('some-additional-class')).to.equal(true);
});

test('allows additional attributes to be added to the details element', context => {
  const {$} = context.render({
    '*': {
      'data-some-data-attribute': 'i-love-data',
      'another-attribute': 'true'
    }
  });

  const $component = $('.govuk-details');
  expect($component.attr('data-some-data-attribute')).to.equal('i-love-data');
  expect($component.attr('another-attribute')).to.equal('true');
});
