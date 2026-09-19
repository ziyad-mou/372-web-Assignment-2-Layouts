<!--
Name: Ziyad Abdelhamid
Date: 09.18.2026
CSC 372-01

This README explains the purpose, layout decisions, responsive design,
semantic HTML, and sources used in the Campus Event Guide project.
-->

# Campus Event Guide

## Project Description

The Campus Event Guide is a responsive website designed to help university
students discover upcoming campus activities.

The website includes a home page with upcoming events and a featured event
details page. The intended audience is university students who want to learn
about activities, programs, workshops, sports, and other events happening
around campus.

## Layout Decisions

### Flexbox

Flexbox is used in the navigation menus to arrange the navigation links and
allow them to wrap when there is not enough horizontal space.

Flexbox is also used for the related event cards on the event details page.
This allows the cards to appear next to each other on wider screens and wrap
when the available space becomes smaller.

### CSS Grid

CSS Grid is used for the upcoming event cards on the home page. The grid uses
columns with different widths to organize the event cards.

CSS Grid is also used on the event details page to create a two-column layout.
The main event content uses the larger column, while the event information
sidebar uses the smaller column.

## Responsive Design

The website uses two responsive breakpoints:

- 800px
- 500px

At 800px or less, the event details layout changes from two columns to one
column, and the upcoming event grid changes to two equal columns.

At 500px or less, the navigation becomes vertical, the upcoming event grid
changes to one column, and the related events are displayed vertically.

I tested the website by resizing the browser window and checking the layout
at desktop, tablet, and mobile screen sizes.

## Semantic HTML

The website uses several semantic HTML elements.

- `header` is used for the website title, tagline, and navigation.
- `nav` is used for groups of navigation links.
- `main` contains the main content of each page.
- `section` groups related content.
- `article` is used for individual event cards and event information.
- `aside` is used for the event information sidebar.
- `figure` and `figcaption` are used for images and captions.
- `footer` contains copyright, contact information, and useful links.
- `time` provides date and time information for events.

## Sources

The images used in this project are from the University of North Carolina at Greensboro website.

UNCG Website:
https://www.uncg.edu/

No external CSS frameworks or JavaScript libraries were used.

The event names, descriptions, locations, and schedules were created for this assignment.