const {expect} = require('chai');
const examples = require('./examples');

test('renders the default example', context => {
  const {$} = context.render(examples.default);

  const $component = $('.govuk-button');
  expect($component.get(0).tagName).to.equal('button');
  expect($component.text()).to.contain('Save and continue');
});

test('renders with attributes', context => {
  const {$} = context.render({
    element: 'button',
    '*': {
      'aria-controls': 'example-id',
      'data-tracking-dimension': '123'
    }
  });

  const $component = $('.govuk-button');
  expect($component.attr('aria-controls')).to.equal('example-id');
  expect($component.attr('data-tracking-dimension')).to.equal('123');
});

test('renders with classes', context => {
  const {$} = context.render({
    element: 'button',
    classes: 'app-button--custom-modifier'
  });

  const $component = $('.govuk-button');
  expect($component.hasClass('app-button--custom-modifier')).to.equal(true);
});

test('renders with disabled', context => {
  const {$} = context.render(examples.disabled);

  const $component = $('.govuk-button');
  expect($component.attr('aria-disabled')).to.equal('true');
  expect($component.attr('disabled')).to.equal('disabled');
  expect($component.hasClass('govuk-button--disabled')).to.equal(true);
});

test('renders with name', context => {
  const {$} = context.render({
    element: 'button',
    name: 'start-now'
  });

  const $component = $('.govuk-button');
  expect($component.attr('name')).to.equal('start-now');
});

test('renders with type', context => {
  const {$} = context.render({
    element: 'button',
    type: 'button'
  });

  const $component = $('.govuk-button');
  expect($component.attr('type')).to.equal('button');
});

test('renders with anchor, href and an accessible role of button', context => {
  const {$} = context.render({
    element: 'a',
    href: '/',
    text: 'Continue'
  });

  const $component = $('.govuk-button');
  expect($component.get(0).tagName).to.equal('a');
  expect($component.attr('href')).to.equal('/');
  expect($component.attr('role')).to.equal('button');
  expect($component.text()).to.contain('Continue');
});

test('renders with hash href if no href passed', context => {
  const {$} = context.render({
    element: 'a'
  });

  const $component = $('.govuk-button');
  expect($component.attr('href')).to.equal('#');
});

test('renders with value', context => {
  const {$} = context.render({
    element: 'button',
    value: 'start'
  });

  const $component = $('.govuk-button');
  expect($component.attr('value')).to.equal('start');
});

test('renders with html', context => {
  const {$} = context.render({
    element: 'button',
    renderBody: out => out.w('Start <em>now</em>')
  });

  const $component = $('.govuk-button');
  expect($component.html()).to.contain('Start <em>now</em>');
});

test('renders with attributes', context => {
  const {$} = context.render({
    element: 'a',
    '*': {
      'aria-controls': 'example-id',
      'data-tracking-dimension': '123'
    }
  });

  const $component = $('.govuk-button');
  expect($component.attr('aria-controls')).to.equal('example-id');
  expect($component.attr('data-tracking-dimension')).to.equal('123');
});

test('renders with classes', context => {
  const {$} = context.render({
    element: 'a',
    classes: 'app-button--custom-modifier'
  });

  const $component = $('.govuk-button');
  expect($component.hasClass('app-button--custom-modifier')).to.equal(true);
});

test('renders with disabled', context => {
  const {$} = context.render(examples['link disabled']);

  const $component = $('.govuk-button');
  expect($component.hasClass('govuk-button--disabled')).to.equal(true);
});

test('renders with anchor, href and an accessible role of button', context => {
  const {$} = context.render(examples.input);

  const $component = $('.govuk-button');
  expect($component.get(0).tagName).to.equal('input');
  expect($component.attr('type')).to.equal('submit');
});

test('renders with attributes', context => {
  const {$} = context.render({
    element: 'input',
    '*': {
      'aria-controls': 'example-id',
      'data-tracking-dimension': '123'
    }
  });

  const $component = $('.govuk-button');
  expect($component.attr('aria-controls')).to.equal('example-id');
  expect($component.attr('data-tracking-dimension')).to.equal('123');
});

test('renders with classes', context => {
  const {$} = context.render({
    element: 'input',
    classes: 'app-button--custom-modifier'
  });

  const $component = $('.govuk-button');
  expect($component.hasClass('app-button--custom-modifier')).to.equal(true);
});

test('renders with disabled', context => {
  const {$} = context.render({
    element: 'input',
    disabled: true
  });

  const $component = $('.govuk-button');
  expect($component.attr('aria-disabled')).to.equal('true');
  expect($component.attr('disabled')).to.equal('disabled');
  expect($component.hasClass('govuk-button--disabled')).to.equal(true);
});

test('renders with name', context => {
  const {$} = context.render({
    element: 'input',
    name: 'start-now'
  });

  const $component = $('.govuk-button');
  expect($component.attr('name')).to.equal('start-now');
});

test('renders with type', context => {
  const {$} = context.render({
    element: 'input',
    type: 'button',
    text: 'Start now'
  });

  const $component = $('.govuk-button');
  expect($component.attr('type')).to.equal('button');
});

test('renders a link if you pass an href', context => {
  const {$} = context.render({
    href: '/'
  });

  const $component = $('.govuk-button');
  expect($component.get(0).tagName).to.equal('a');
});

test('renders a button if you pass html', context => {
  const {$} = context.render({
    renderBody: out => out.w('Start <em>now</em>')
  });

  const $component = $('.govuk-button');
  expect($component.get(0).tagName).to.equal('button');
});

test('renders a button if you don\'t pass anything', context => {
  const {$} = context.render({});

  const $component = $('.govuk-button');
  expect($component.get(0).tagName).to.equal('button');
  expect($component.attr('type')).to.equal('submit');
});
