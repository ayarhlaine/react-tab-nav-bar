import React from 'react';
import { shallow, ShallowWrapper} from 'enzyme';
import { AppState } from '../store';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { ViewSelect, mapStateToProps } from './ViewSelect';
describe('ViewSelect', () => {
let subject: ShallowWrapper;
const defaultProp = {
    activeView: 'normal',
    actions: {
      changeAdvancedView: jest.fn(),
    }
}
  beforeEach(() => {
    subject = shallow(<ViewSelect {...defaultProp}/>);
  });
  it('should be div', () => {
    expect(subject.type()).toBe('div');
  });
  it('should has ViewSelect class', () => {
    expect(subject.hasClass('ViewSelect')).toBe(true);
  });
  describe('Select', () => {
    it('should has Select component', () => {
        expect(subject.childAt(0).type()).toBe(Select);
    });
    it('should has value prop with activeView', () => {
        expect(subject.childAt(0).prop('value')).toBe(defaultProp.activeView);
    });
    it('should has normal Normal and Advanced menu', () => {
        const menuTexts = subject.childAt(0).find(MenuItem).map((node) => node.text());
        expect(menuTexts).toEqual(['Normal','Advanced']);
    });
    it('change event should call', () => {
        subject.childAt(0).simulate('change', { target: { value: 'normal' }});
        expect(defaultProp.actions.changeAdvancedView).toHaveBeenCalledWith('normal');
    });
  });
  describe('mapStateToProps', () => {
    const appState = {
        navBar: {
            activeView: 'normal',
        },
    } as unknown as AppState;
    it('set activeView', () => {
        expect(mapStateToProps(appState).activeView).toBe('normal');
    });
  });
});