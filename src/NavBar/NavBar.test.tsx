import React from 'react';
import { shallow, ShallowWrapper} from 'enzyme';
import Tabs from '../Tabs/Tabs';
import ViewSelect from '../ViewSelect/ViewSelect';
import { NavBar } from './NavBar';
describe('NavBar', () => {
let subject: ShallowWrapper;
  beforeEach(() => {
    subject = shallow(<NavBar />);
  });
  it('should be div', () => {
    expect(subject.type()).toBe('div');
  });
  it('should has class Nav', () => {
    expect(subject.hasClass('Nav')).toBe(true);
  });
  describe('Nav__contents', () => {
    it('should be div', () => {
        expect(subject.childAt(0).type()).toBe('div');
    });
    describe('Tabs', () => {
        it('should has Tabs', () => {
          expect(subject.childAt(0).childAt(0).type()).toBe(Tabs);
        });
      });
      describe('ViewSelect', () => {
        it('should has ViewSelect', () => {
          expect(subject.childAt(0).childAt(1).type()).toBe(ViewSelect);
        });
      });
  });
});