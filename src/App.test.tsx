import React from 'react';
import { shallow, ShallowWrapper} from 'enzyme';
import NavBar from './NavBar/NavBar';
import Page from './Page/Page';
import { App } from './App';
describe('App', () => {
let subject: ShallowWrapper;
  beforeEach(() => {
    subject = shallow(<App />);
  });
  it('should be div', () => {
    expect(subject.type()).toBe('div');
  });
  describe('NavBar', () => {
    it('should has NavBar', () => {
      expect(subject.childAt(0).type()).toBe(NavBar);
    });
  });
  describe('Page', () => {
    it('should has Page', () => {
      expect(subject.childAt(1).type()).toBe(Page);
    });
  });
});