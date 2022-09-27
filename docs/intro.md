---
sidebar_position: 1
---

# Tutorial Intro

Lasst und **Docusaurus in weniger als 5 Minuten** entdecken.

## Erste Schritte

Starte mit **erstelle eine neue Seite**.

Oder **teste Docusaurus direkt** mit **[docusaurus.new](https://docusaurus.new)**.

### Was brauchst du alles

- [Node.js](https://nodejs.org/en/download/) v16.14+:
    - Bei der Installation von Node. js sollten Sie alle Kontrollkästchen im Zusammenhang mit Abhängigkeiten aktivieren.

## Generiere eine neue Seite

Um eine neue Docusaurus Seite zu generieren, benutze das **classic** Template.

Das **classic** Template wird automatisch zu deinem Projekte hinzugefügt werden, nachdem du den Command ausgeführt hast:

```shell
npm init docusaurus@latest my-website classic
```

Sie können diesen Befehl in Eingabeaufforderung, Powershell, Terminal oder ein anderes integriertes Terminal Ihres Codes
eingeben.

Der Command installiert auch alle notwendigen Abhängigkeiten, die Sie zum Ausführen von Docusaurus benötigen.

## Starte deine Seite

Ausführen des Development-Servers:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site,
you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to
view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
