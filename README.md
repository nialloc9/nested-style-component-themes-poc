# Proof of concept for css in js

<p float="left">
    <img src="https://raw.githubusercontent.com/nialloc9/nested-style-component-themes-poc/master/screenshots/themes.png" alt='3 differant themes' width="400" margin="50">
</p>


### Prerequisites

- install node: <a href="https://nodejs.org/en/download">https://nodejs.org/en/download</a>

## Install

```sh

    git clone git@github.com:nialloc9/nested-style-component-themes-poc.git

    cd nested-style-component-themes-poc

    npm install
```

### Run

```sh
    npm start
```

### Questions to answer?

- How does the <a href="https://www.styled-components.com/">styled-components</a> library handle nestd themes?

### Answers

- Themes can be nested.

- In the event the provider does not have a value specified in it's theme it will reach for the parent provider to see if it has a value specified. It will keep going up the tree until it finds a provider that has the value specified.

- The nearest provider value will override their corresponding parent theme values.

- If no value is found undefined will be used.