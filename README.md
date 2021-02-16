# Makers Notes Challenge

This repository supports [Makers](https://makers.tech/) Week 7 group challenge 'notes'.

1. **Installation:**

This project requires [Node](https://github.com/makersacademy/course/blob/master/pills/node.md), [Node Package Manager](https://github.com/makersacademy/course/blob/master/pills/npm.md) and [HTTP_Server](https://github.com/makersacademy/course/blob/master/pills/http_server.md). To configure the development environment, run the following commands:

```
brew install node
npm init
npm install http-server --save
```

2. **Licensing:** This project is licensed under the [GNU GPL v.3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).
3. **Authors:** This repository is a joint project between its collaborators; @KarstenFinlay, @JoshSinyor, @JosephSpraggon, and @bullhornfixie. With thanks to [Tobias Ahlin](https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/) and [Pepsi MAX](https://pepsi.co.uk/products/pepsi-max).

---

## Table of Contents

#### 1. Creating Testing Framework
- [ ] Creating First Test

#### 2. Parsing User Stories
- [ ] User Story 01
- [ ] User Story 02
- [ ] User Story 03
- [ ] User Story 04
- [ ] User Story 05

---

## 1. Creating Testing Framework

We are instructed to create a testing framework that does not rely on any libraries (except HTTP_Server). To do so, we constructed a basic testing framework out of pure JavaScript.

## 2. Parsing User Stories

### Headline Specifications

Actions are *italic*. Nouns are **bold**. Attributes of nouns are **_bold italics_**.

##### User Story 01

&nbsp;&nbsp;&nbsp;As a programmer,<br>
&nbsp;&nbsp;&nbsp;I can *see a list* of my **notes**, where each **note** is *abbreviated to the first 20 characters*,<br>
&nbsp;&nbsp;&nbsp;So I can find the one I want.

##### User Story 02

&nbsp;&nbsp;&nbsp;As a programmer,<br>
&nbsp;&nbsp;&nbsp;I can create a **new note**,<br>
&nbsp;&nbsp;&nbsp;So I can record something I need to remember.

##### User Story 03

&nbsp;&nbsp;&nbsp;As a programmer,<br>
&nbsp;&nbsp;&nbsp;I can *see the full text of an individual note* on its **own page**,<br>
&nbsp;&nbsp;&nbsp;So I can see all the information in the note.

##### User Story 04

&nbsp;&nbsp;&nbsp;As a programmer,<br>
&nbsp;&nbsp;&nbsp;I can *use shortcodes* like `:fire:` that get converted into **emojis** like 🔥,<br>
&nbsp;&nbsp;&nbsp;So I can record notes with fun little pictures.

##### User Story 05

&nbsp;&nbsp;&nbsp;As a programmer,<br>
&nbsp;&nbsp;&nbsp;I can refresh the page and still see my notes,<br>
&nbsp;&nbsp;&nbsp;So I can remember what I took down.

## Domain Modelling

Class: Notes
