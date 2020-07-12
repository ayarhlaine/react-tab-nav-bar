import React from 'react';
import { shallow, ShallowWrapper} from 'enzyme';
import { AppState } from '../store';
import Paper from '@material-ui/core/Paper';
import { Page, mapStateToProps } from './Page';
describe('Page', () => {
let subject: ShallowWrapper;
const defaultProp = {
    activeTab: 'home',
};
  beforeEach(() => {
    subject = shallow(<Page {...defaultProp}/>);
  });
  it('should be div', () => {
    expect(subject.type()).toBe('div');
  });
  describe('Paper', () => {
    it('should has Paper', () => {
      expect(subject.childAt(0).type()).toBe(Paper);
    });
    describe('Page Text', () => {
        it('should has div with Page__Page', () => {
            expect(subject.childAt(0).childAt(0).type()).toBe('div');
            expect(subject.childAt(0).childAt(0).hasClass('Page__Page')).toBe(true);
        });
        it('should render activeTab text', () => {
            expect(subject.childAt(0).childAt(0).text()).toBe(defaultProp.activeTab.toUpperCase());
        });
    });
  });
  describe('mapStateToProps', () => {
    const appState = {
        navBar: {
            activeTab: 'home',
        },
    } as unknown as AppState;
    it('set activeTab', () => {
        expect(mapStateToProps(appState).activeTab).toBe('home');
    });
  });
});