import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import "../test-setup";
import CreateNewLayer from "../components/CreateNewLayer";

it('renders two <input/>', () => {
  const wrapper = shallow(<CreateNewLayer/>);
  expect(wrapper.find('input')).to.have.lengthOf(2);
});

it('renders one <form/>', () => {
  const wrapper = shallow(<CreateNewLayer/>);
  expect(wrapper.find('form')).to.have.lengthOf(1);
});

it('renders one button', () => {
  const wrapper = shallow(<CreateNewLayer/>);
  expect(wrapper.find({type:'text'})).to.have.lengthOf(1);
});

it('renders button with text', () => {
  const wrapper = shallow(<CreateNewLayer/>);
  expect(wrapper.find({type: "button"}).prop('value')).to.equal('Create');
});
