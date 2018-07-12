const {expect} = require('chai');

test('renders with classes', context => {
  const {$} = context.render({
    classes: 'app-breadcrumbs--custom-modifier'
  });

  const $component = $('.govuk-breadcrumbs');
  expect($component.hasClass('app-breadcrumbs--custom-modifier')).to.equal(true);
});

test('renders with attributes', context => {
  const {$} = context.render({
    '*': {
      id: 'my-navigation',
      role: 'navigation'
    }
  });

  const $component = $('.govuk-breadcrumbs');
  expect($component.attr('id')).to.equal('my-navigation');
  expect($component.attr('role')).to.equal('navigation');
});

test('renders with items', context => {
  const {$} = context.render({
    items: [
      {
        renderBody: out => out.w('Section 1')
      },
      {
        renderBody: out => out.w('Sub-section')
      }
    ]
  });

  const $items = $('.govuk-breadcrumbs__list-item');
  expect($items.length).to.equal(2);
});

test('renders item with body', context => {
  const {$} = context.render({
    items: [
      {
        renderBody: out => out.w('<em>Section 1</em>')
      }
    ]
  });

  const $item = $('.govuk-breadcrumbs__list-item');
  expect($item.html()).to.equal('<em>Section 1</em>');
});

test('renders item with anchor', context => {
  const {$} = context.render({
    items: [
      {
        renderBody: out => out.w('Section 1'),
        href: '/section'
      }
    ]
  });

  const $anchor = $('.govuk-breadcrumbs__list-item a');
  expect($anchor.get(0).tagName).to.equal('a');
  expect($anchor.attr('class')).to.equal('govuk-breadcrumbs__link');
  expect($anchor.attr('href')).to.equal('/section');
  expect($anchor.text()).to.equal('Section 1');
});

test('renders 2 items', context => {
  const {$} = context.render({
    items: [
      {
        text: 'Section',
        href: '/section'
      },
      {
        text: 'Sub-section',
        href: '/section/sub-section'
      }
    ]
  });
  const $items = $('.govuk-breadcrumbs__list-item');
  expect($items.length).to.equal(2);
});
