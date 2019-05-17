# resume

[resume.kradalby.no](https://resume.kradalby.no/)

[PDF](https://resume.kradalby.no/resume.pdf)

This is my current resume and it is made with Elm and [Elm CSS](https://github.com/rtfeldman/elm-css). It is built in docker, generating static HTML and CSS and a PDF.

This project is a result of trying to learn Elm CSS and revamping my resume :resume:

## Building
Build locally:

    make install
    make build

Build Docker container:

    docker build -t <TAG> .

## Development
Run dev server

    make install
    make dev


## Lint

    make lint
