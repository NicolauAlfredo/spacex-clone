
Ciao team 👋

Prima di iniziare a scrivere CSS, dobbiamo seguire tutti la stessa convenzione di naming. Questo ci aiuterà ad evitare conflitti, codice duplicato e problemi durante i merge.

Per questo progetto useremo la metodologia **BEM (Block Element Modifier)**.

## Cos'è BEM?

BEM è una convenzione per nominare le classi CSS in modo chiaro e prevedibile.

Si divide in 3 parti:

### 1. Block

Il Block rappresenta un componente indipendente.

Esempi:

```css
.header {}
.footer {}
.button {}
.hero-section {}
.collections {}
```

Pensate al Block come a un componente completo.

---

### 2. Element

Un Element è una parte del Block.

Sintassi:

```css
.block__element
```

Esempi:

```css
.header__logo {}
.header__nav {}
.header__menu {}

.footer__container {}

.hero-section__content {}
.hero-section__title {}
.hero-section__subtitle {}
```

L'elemento non dovrebbe esistere senza il Block.

Ad esempio:

```css
.header__logo {}
```

ha senso solo all'interno di:

```css
.header {}
```

---

### 3. Modifier

Un Modifier serve per creare una variante.

Sintassi:

```css
.block--modifier
```

oppure

```css
.block__element--modifier
```

Esempi:

```css
.button--primary {}
.button--secondary {}

.hero-section--starship {}
.hero-section--technology {}
```

---

## Esempio reale del nostro progetto

HTML:

```html
<section class="hero-section hero-section--starship">
  
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

## Cosa NON fare

Classi troppo generiche

```css
.title {}
.text {}
.content {}
.box {}
.image {}
```

Quando il progetto cresce, questi nomi diventano impossibili da gestire.

---

Nomi numerati

```css
.section1 {}
.section2 {}
.section3 {}
```

I nomi devono descrivere lo scopo del componente.

---

Mischiare lingue

```css
.titolo {}
.navbar {}
.bottoneGrande {}
```

Usiamo sempre l'inglese.

---

## Convenzioni del team

Tutte le classi devono essere:

* in inglese
* lowercase
* con trattini (`-`)
* con BEM (`__` e `--`)

Esempi corretti:

```css
.header {}
.header__logo {}

.footer {}
.footer__container {}

.hero-section {}
.hero-section__content {}

.button {}
.button--primary {}
```

---

## Mobile First

Tutti gli stili devono partire da mobile.

Esempio:

```css
.hero-section {
  padding: 2rem 1rem;
}
```

Poi aggiungiamo i breakpoint:

```css
@media (min-width: 768px) {
}

@media (min-width: 1024px) {
}

@media (min-width: 1440px) {
}
```

---

## Obiettivo

L'obiettivo non è solo far funzionare il sito, ma imparare a lavorare come un vero team di sviluppo.

Seguendo la stessa convenzione avremo:

- codice più leggibile

- meno conflitti Git

- componenti riutilizzabili

- struttura pronta per una futura migrazione a React

Grazie a tutti
