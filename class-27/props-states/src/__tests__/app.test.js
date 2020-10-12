import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

import App from '../app-number.js';
import People from '../people.js';

test('dynamically update number', async() => {
    render(<App/>);
    
})