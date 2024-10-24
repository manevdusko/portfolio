import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import linkedinIcon from '../../assets/img/linkedin-icon.svg';
import mailIcon from '../../assets/img/email-icon.svg';

describe('Footer Component', () => {
  test('renders the footer with logo and social icons', () => {
    render(<Footer />);

    // Check for the logo
    expect(screen.getByText('m@nev')).toBeInTheDocument();

    // Check for the LinkedIn icon
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/manevdusko/');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(screen.getByAltText('Linkedin')).toHaveAttribute('src', linkedinIcon);

    // Check for the email icon
    const emailLink = screen.getByRole('link', { name: /email/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:dushkomanev9@gmail.com');
    expect(emailLink).toHaveAttribute('target', '_blank');
    expect(emailLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(screen.getByAltText('Email')).toHaveAttribute('src', mailIcon);

    // Check for the copyright text
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`Copyright ${currentYear}. All Rights Reserved`)).toBeInTheDocument();
  });
});