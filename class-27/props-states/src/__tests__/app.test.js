import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../numbers-app.js';
import People from '../people.js';

test('dynamically update my number ',async(done) => {
    render(<App />); // I will have a screen -> get me an element
    const input = screen.getByTestId('num');
    const output = screen.getByTestId('output');
    fireEvent.change(input, {target: {value: 234 }} );
    expect(output).toHaveTextContent('234');
    done();
});

test('dynamically update my number 2 ',async(done) => {
    render(<App />); // I will have a screen -> get me an element
    const input = screen.getByTestId('num');
    const output = screen.getByTestId('output');
    fireEvent.change(input, {target: {value: 234 }} );
    expect(output.textContent).toBe('234');
    done();
});

test('should render star wars list', async(done)=> {
    const people = {
        "name1" : "http://swapi.dev/api/people/1",
        "name2" : "http://swapi.dev/api/people/2"
    }
    render(<People people= {people} loading={false}/>);
    const items = screen.getAllByRole('listitem');
    // console.log(items[0]);
    expect(items[0]).toHaveTextContent('name1');
    expect(items[0]).toContainHTML('<a href="http://swapi.dev/api/people/1">');
    expect(items[1]).toHaveTextContent('name2');
    expect(items[1]).toContainHTML('<a href="http://swapi.dev/api/people/2">');
    done();
}) 