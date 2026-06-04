# Contributing Guidelines

Thank you for contributing to the SpaceX Clone project.

This project is developed as a Team Project during the DEVELHOPE Web Development Course. To ensure consistency and maintainability, all contributors must follow the guidelines below.

---

# Git Workflow

The project uses the following branching strategy:

```text
main
│
└── dev
     │
     ├── feature/home-header
     ├── feature/home-starship
     ├── feature/home-launch-provider
     └── ...
```

## Main Branches

### main

Production-ready code only.

Never work directly on this branch.

### dev

Integration branch used to merge all completed features.

All Pull Requests must target the `dev` branch.

---

## Creating a Feature Branch

Before starting any task:

```bash
git checkout dev
git pull origin dev
```

Create a new feature branch:

```bash
git checkout -b feature/feature-name
```

Examples:

```bash
git checkout -b feature/home-header

git checkout -b feature/home-starship

git checkout -b feature/home-footer
```

---

## Committing Changes

Use clear and descriptive commit messages.

Examples:

```bash
feat: add homepage header

feat: create starship hero section

fix: correct mobile layout

style: update button hover effect

docs: update contributing guidelines

chore: add project assets
```

---

## Pushing Your Work

After committing:

```bash
git push origin feature/feature-name
```

Example:

```bash
git push origin feature/home-header
```

---

# Pull Requests

When your task is completed:

1. Push your feature branch
2. Open GitHub
3. Create a Pull Request
4. Select:

Base branch:

```text
dev
```

Compare branch:

```text
feature/your-feature
```

Example:

```text
dev ← feature/home-header
```

Never create Pull Requests directly to `main`.

---

# CSS Guidelines

The project uses the BEM methodology.

BEM stands for:

* Block
* Element
* Modifier

The goal is to keep class names predictable, reusable and easy to maintain.

---

## Block

A Block represents an independent component.

Examples:

```css
.header {}

.footer {}

.button {}

.hero-section {}

.collections {}
```

---

## Element

An Element is a part of a Block.

Syntax:

```css
.block__element
```

Examples:

```css
.header__logo {}

.header__nav {}

.footer__container {}

.hero-section__content {}

.hero-section__title {}
```

Elements should only exist inside their Block.

Correct:

```css
.header__logo {}
```

Incorrect:

```css
.logo {}
```

---

## Modifier

A Modifier changes the appearance or behavior of a Block or Element.

Syntax:

```css
.block--modifier
```

Examples:

```css
.button--primary {}

.button--secondary {}

.hero-section--starship {}

.hero-section--technology {}
```

---

## Example

HTML:

```html
<section class="hero-section hero-section--starship">
  <div class="hero-section__content">
    <h1 class="hero-section__title">
      Starship's Twelfth Flight Test
    </h1>

    <button class="button button--primary">
      Learn More
    </button>
  </div>
</section>
```

CSS:

```css
.hero-section {}

.hero-section__content {}

.hero-section__title {}

.hero-section--starship {}

.button {}

.button--primary {}
```

---

## Naming Rules

Use:

* English only
* Lowercase
* Hyphens (-)
* BEM (__ and --)

Correct:

```css
.hero-section {}

.hero-section__content {}

.hero-section__title {}

.button--primary {}
```

Avoid:

```css
.section1 {}

.title {}

.box {}

.myButton {}

.bigText {}
```

Class names should describe purpose, not appearance.

---

# Mobile First Approach

The project follows a Mobile First strategy.

Always write styles for mobile devices first.

Example:

```css
.hero-section {
  padding: 2rem 1rem;
}
```

Then progressively enhance the layout for larger screens.

---

## Breakpoints

Tablet:

```css
@media (min-width: 768px) {

}
```

Desktop:

```css
@media (min-width: 1024px) {

}
```

Large Desktop:

```css
@media (min-width: 1440px) {

}
```

---

## Example

```css
.hero-section {
  min-height: 100vh;
}

@media (min-width: 768px) {
  .hero-section {
    padding: 3rem;
  }
}

@media (min-width: 1024px) {
  .hero-section {
    padding: 5rem;
  }
}
```

---

# Team Rules

* Never work directly on `main`
* Always create a feature branch from `dev`
* Keep commits small and meaningful
* Follow BEM naming conventions
* Use Mobile First styling
* Write clean and readable code
* Keep features isolated
* Test your work before opening a Pull Request

---

# Project Goal

The goal of this project is not only to recreate the SpaceX website but also to learn professional team collaboration, Git workflows, code organization and modern frontend development practices.
