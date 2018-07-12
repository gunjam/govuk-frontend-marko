const {expect} = require('chai');

test('renders the default example with an anchor, href and text correctly', context => {
  const {$} = context.render({
    href: '#'
  });

  const $component = $('.govuk-back-link');
  expect($component.get(0).tagName).equal('a');
  expect($component.attr('href')).equal('#');
  expect($component.text()).equal('Back');
});

test('renders classes correctly', context => {
  const {$} = context.render({
    classes: 'app-back-link--custom-class',
    href: '#'
  });

  const $component = $('.govuk-back-link');
  expect($component.hasClass('app-back-link--custom-class')).equal(true);
});

test('renders body correctly', context => {
  const {$} = context.render({
    href: '#',
    renderBody: out => out.w('<b>Back</b>')
  });

  const $component = $('.govuk-back-link');
  expect($component.html()).equal('<b>Back</b>');
});

test('renders default text correctly', context => {
  const {$} = context.render({
    href: '#'
  });

  const $component = $('.govuk-back-link');
  expect($component.html()).equal('Back');
});

test('renders attributes correctly', context => {
  const {$} = context.render({
    '*': {
      'data-test': 'attribute',
      'aria-label': 'Back to home'
    },
    href: '#'
  });

  const $component = $('.govuk-back-link');
  expect($component.attr('data-test')).equal('attribute');
  expect($component.attr('aria-label')).equal('Back to home');
});
