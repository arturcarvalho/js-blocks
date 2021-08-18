# Architecture

## Summary

This page contains some decisions and details on how the site will be built.

The site is mainly exploratory. Decisions are taken with little research and the tech stack is chosen based on previous experience or pure curiosity.

## Tech Stack

- Next.JS: Because I have experience with it and it's hard to find a better react framework to handle server side and client side.
- Tailwind CSS: Because it's pretty simple. Can probably change later but I like the design tokens it has by default (e.g. colors, sizes, shadows, etc.)
- Monaco Editor: For markdown and code editing. It's the editor used by VS CODE. I'll be able to use a lot of shortcuts just like I use in VS CODE.
- Web workers: Very experimental. For running user code.
  1. Without blocking the site
  2. To be able to cancel infinite loops
  3. To run in a safer environment (no access to the DOM and a bunch of other keywords I choose to block)
- supabase: For the DB + auth. Still not sure if it's good, but:
  1. It uses a lot of mature open source technologies like PostgresSQL
  2. It has magic links!
  3. It has built-in users on the DB that I can use to create teams (image private pages for a team)
  4. It's a replacement for firebase. Firebase is by far the simplest back-end stack I've used but I'm sick of their confusing stuff. Hard to understand pricing. Hard to understand what is slow. Hard to reuse what I know about SQL. Huge libraries to do the smallest of things. And closed source stuff from google tends to die.
