import '@testing-library/jest-dom/jest-globals';

import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('fake test', () => {
        render(<App />);

        const element = screen.getByText('Fake app component');

        expect(element).toBeVisible();
    });
});

