import React from 'react';
import { render, screen } from '@testing-library/react';
import { Projects } from './Projects';

describe('Projects Component', () => {
  test('renders the Projects component', () => {
    render(<Projects />);

    // Check for project titles
    expect(screen.getByText('MyDesk')).toBeInTheDocument();
    expect(screen.getByText('Anthology Blackboard')).toBeInTheDocument();
    expect(screen.getByText('Anthology Student')).toBeInTheDocument();

    // Check for project descriptions
    expect(screen.getByText(/An internal application for reserving desks in the office/)).toBeInTheDocument();
    expect(screen.getByText(/This platform is widely used in higher education/)).toBeInTheDocument();
    expect(screen.getByText(/Platform designed to support universities and colleges/)).toBeInTheDocument();

    // Check for project images
    expect(screen.getByAltText('MyDesk')).toBeInTheDocument();
    expect(screen.getByAltText('Anthology Blackboard')).toBeInTheDocument();
    expect(screen.getByAltText('Anthology Student')).toBeInTheDocument();
  });
});