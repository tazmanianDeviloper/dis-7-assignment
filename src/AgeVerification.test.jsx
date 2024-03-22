import AgeVerification from './AgeVerification';
import renderer from 'react-test-renderer';
import { test, expect } from 'vitest';

test('The AgeVerification component should render', () => {
    const view = renderer
        .create(<AgeVerification/>)
        .toJSON();
    expect(view).toMatchSnapshot();
});

test('Entering invalid age should display error message', () => {
    const component = renderer.create(<AgeVerification />);
    const ageInput = component.root.findByProps({ id: 'age' });

    // Change input value to an invalid age
    ageInput.props.onChange({ target: { value: 'abc' } });

    // Find button and simulate click
    component.root.findByType('button').props.onClick();

    // Find error message
    const errorMessage = component.root.findByType('h5');

    // Assert error message is displayed
    expect(errorMessage).toBeDefined();
});

test('Entering valid age should display welcome message', () => {
    const component = renderer.create(<AgeVerification />);
    const ageInput = component.root.findByProps({ id: 'age' });

    // Change input value to a valid age
    ageInput.props.onChange({ target: { value: '20' } });

    // Find button and simulate click
    component.root.findByType('button').props.onClick();

    // Find welcome message
    const welcomeMessage = component.root.findByType('h1');

    // Assert welcome message is displayed
    expect(welcomeMessage).toBeDefined();
});

test('Entering age less than 18 should display error message', () => {
    const component = renderer.create(<AgeVerification />);
    const ageInput = component.root.findByProps({ id: 'age' });

    // Change input value to an age less than 18
    ageInput.props.onChange({ target: { value: '15' } });

    // Find button and simulate click
    component.root.findByType('button').props.onClick();

    // Find error message
    const errorMessage = component.root.findByType('h5');

    // Assert error message is displayed
    expect(errorMessage).toBeDefined();
});

test('Entering a decimal age above 17 should display an error message', () => {
    const component = renderer.create(<AgeVerification />);
    const ageInput = component.root.findByProps({ id: 'age' });

    // Change input value to a decimal age above 17
    ageInput.props.onChange({ target: { value: '17.5' } });

    // Find button and simulate click
    component.root.findByType('button').props.onClick();

    // Find error message
    const errorMessage = component.root.findByType('h5');

    // Assert error message is displayed
    expect(errorMessage).toBeDefined();
});

test('Entering an age above 120 should display an error message', () => {
    const component = renderer.create(<AgeVerification />);
    const ageInput = component.root.findByProps({ id: 'age' });

    // Change input value to an age above 120
    ageInput.props.onChange({ target: { value: '121' } });

    // Find button and simulate click
    component.root.findByType('button').props.onClick();

    // Find error message
    const errorMessage = component.root.findByType('h5');

    // Assert error message is displayed
    expect(errorMessage).toBeDefined();
});
