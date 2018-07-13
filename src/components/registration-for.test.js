import React from 'react';
import {shallow} from 'enzyme';
import RegistrationForm from './register-form';

describe('<RegisterForm>', () => {
    it('should render without crashes', () => {
        shallow(<RegistrationForm/>);
    });
});