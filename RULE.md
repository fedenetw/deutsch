# RULE.md — Regole per i contenuti di Deutsch

Questo file definisce le regole per creare e mantenere i contenuti del sito Deutsch.

L'obiettivo è mantenere tutti i contenuti:
- coerenti tra loro;
- semplici da consultare;
- pedagogicamente utili;
- facilmente ricercabili;
- compatibili con la struttura Astro del progetto.

---

# 1. Principio generale

Ogni contenuto deve avere uno scopo didattico preciso.

Prima di aggiungere qualcosa chiedersi:

> "Questa informazione aiuta davvero a imparare o consultare il tedesco?"

Se la risposta è no, non aggiungerla.

Il sito deve privilegiare:
- chiarezza;
- brevità;
- esempi significativi;
- informazioni utili;
- coerenza.

Evitare:
- informazioni duplicate;
- spiegazioni inutilmente lunghe;
- dettagli linguistici che non servono al livello dello studente;
- campi aggiunti solo "per sicurezza".

---

# 2. Struttura delle cartelle

I contenuti sono organizzati in tre collezioni:

```text
src/content/
├── verben/
├── vokabeln/
└── grammatik/
````

Usare:

```text
verben/
```

per i verbi.

Usare:

```text
vokabeln/
```

per le parole e le espressioni.

Usare:

```text
grammatik/
```

per gli argomenti grammaticali.

Non mescolare i tipi di contenuto.

---

# 3. Nomi dei file

Il nome del file deve essere lo slug principale del contenuto.

Usare esclusivamente:

* minuscole;
* caratteri ASCII quando possibile;
* trattini per separare le parole.

Esempi:

```text
gehen.md
sprechen.md
sich-erinnern.md
der-tisch.md
akkusativ.md
personalpronomen.md
```

Evitare:

```text
Gehen.md
Der Tisch.md
tisch grammatica.md
```

Lo slug deve essere stabile.

Una volta pubblicato un contenuto, non cambiarne inutilmente il nome.

---

# 4. Lingua

I contenuti linguistici devono essere scritti principalmente in tedesco quando il contenuto stesso è un esempio o una definizione.

Le spiegazioni grammaticali possono essere in italiano se questo rende il concetto più chiaro.

Non tradurre automaticamente ogni singola frase se la traduzione non aggiunge valore.

Quando viene fornita una traduzione italiana, deve essere naturale, non necessariamente letterale.

---

# 5. Livelli CEFR

Quando possibile, assegnare un livello:

```yaml
level: A1
```

I valori validi sono:

```text
A1
A2
B1
B2
C1
C2
```

Il livello indica il livello al quale è ragionevole imparare o incontrare il contenuto.

Non usare il livello per indicare quanto è "difficile" una singola frase.

Se il livello non è sufficientemente chiaro, può essere omesso.

---

# 6. Verbi

Ogni verbo deve avere almeno:

```yaml
---
lemma: gehen
translation: andare
type: irregular
---
```

## 6.1 `lemma`

È la forma all'infinito.

Esempio:

```yaml
lemma: gehen
```

Non inserire qui la traduzione.

---

## 6.2 `translation`

Traduzione italiana principale.

Esempio:

```yaml
translation: andare
```

Se il verbo ha più significati importanti, possono essere indicati:

```yaml
translation: "fare, compiere"
```

Evitare liste interminabili di traduzioni.

---

## 6.3 `type`

Valori possibili:

```text
regular
irregular
modal
mixed
```

### `regular`

Verbo regolare.

### `irregular`

Verbo irregolare.

### `modal`

Verbo modale.

Esempi:

```text
können
müssen
dürfen
sollen
wollen
mögen
```

### `mixed`

Usare solo quando il verbo presenta caratteristiche realmente miste e non può essere classificato correttamente come semplicemente regolare o irregolare.

Non usare `mixed` come categoria generica.

---

## 6.4 `auxiliary`

Indica l'ausiliare usato nel Perfekt:

```yaml
auxiliary: haben
```

oppure:

```yaml
auxiliary: sein
```

Inserirlo quando è rilevante.

---

## 6.5 `participle`

Partizip II:

```yaml
participle: gegangen
```

---

## 6.6 `preterite`

Präteritum:

```yaml
preterite: ging
```

Per i verbi irregolari deve essere normalmente presente.

Per i verbi regolari può essere presente quando è utile.

---

## 6.7 `separable`

Indica se il verbo è separabile:

```yaml
separable: true
```

oppure:

```yaml
separable: false
```

Esempio:

```yaml
separable: true
```

per:

```text
aufstehen
```

---

## 6.8 `reflexive`

Indica se il verbo è riflessivo:

```yaml
reflexive: true
```

Esempio:

```text
sich erinnern
```

---

## 6.9 Esempi dei verbi

Ogni verbo dovrebbe avere almeno due esempi significativi.

Quando possibile:

1. un esempio al Präsens;
2. un esempio al Perfekt.

Esempio:

```md
## Beispiele

> Ich gehe jeden Tag zur Schule.

Vado a scuola ogni giorno.

> Ich bin gestern nach Hause gegangen.

Ieri sono andato a casa.
```

Gli esempi devono mostrare il verbo nel suo uso reale.

Evitare frasi artificiali create solo per mostrare una forma grammaticale.

---

# 7. Coniugazione dei verbi

Per i verbi irregolari è consigliabile mostrare la coniugazione.

Per i verbi regolari può essere omessa se la coniugazione segue semplicemente il modello regolare e non aggiunge valore.

Quando viene mostrata, deve essere coerente.

Per il Präsens usare:

```text
ich
du
er/sie/es
wir
ihr
sie/Sie
```

Non mostrare necessariamente tutte le forme nei contenuti Markdown se il componente Astro può generarle automaticamente.

La logica di presentazione deve rimanere nei componenti, non nei file `.md`.

---

# 8. Vocaboli

Ogni vocabolo deve avere almeno:

```yaml
---
word: Tisch
translation: tavolo
type: noun
---
```

---

## 8.1 `word`

Inserire la forma tedesca della parola.

Per i sostantivi non inserire automaticamente l'articolo dentro `word`.

Corretto:

```yaml
word: Tisch
article: der
```

Non:

```yaml
word: der Tisch
article: der
```

Questo permette al sito di gestire correttamente colori e visualizzazione.

---

## 8.2 `translation`

Traduzione italiana principale.

---

## 8.3 `type`

Valori disponibili:

```text
noun
verb
adjective
adverb
preposition
conjunction
pronoun
other
```

Usare la categoria grammaticale più precisa disponibile.

---

## 8.4 Articoli

Per i sostantivi:

```yaml
article: der
```

oppure:

```yaml
article: die
```

oppure:

```yaml
article: das
```

L'articolo deve essere sempre presente quando il vocabolo è un sostantivo con articolo determinativo.

Il genere grammaticale deve essere rappresentato dal campo `article`, non scritto manualmente dentro il nome.

---

# 9. Colori degli articoli

I colori degli articoli sono parte della strategia didattica.

Il sito usa una codifica coerente:

```text
der → colore maschile
die → colore femminile
das → colore neutro
```

Il plurale mantiene il colore di `die`.

Questo è intenzionale.

Non utilizzare colori diversi per il plurale.

Il colore non deve essere l'unico modo con cui viene comunicata l'informazione: il testo dell'articolo deve sempre essere visibile.

---

# 10. Plurale

Per i sostantivi inserire il plurale quando è conosciuto e utile:

```yaml
plural: Tische
```

Non inserire:

```yaml
plural: die Tische
```

L'articolo plurale viene gestito dall'interfaccia.

Se il plurale è invariato:

```yaml
plural: Auto
```

Se il vocabolo normalmente non ha un plurale significativo, può essere omesso.

---

# 11. Categoria dei vocaboli

`category` serve per organizzare semanticamente il vocabolario.

Esempi:

```yaml
category: Schule
```

```yaml
category: Familie
```

```yaml
category: Essen
```

```yaml
category: Reisen
```

Usare categorie semplici e riutilizzabili.

Non creare categorie quasi identiche:

```text
Schule
Schulalltag
Schulleben
Schulunterricht
```

senza una reale necessità.

Meglio una categoria comune e coerente.

---

# 12. Esempi dei vocaboli

Un vocabolo dovrebbe avere almeno un esempio quando l'uso della parola non è ovvio.

Per parole semplici e trasparenti può essere sufficiente un esempio.

Per parole con:

* più significati;
* costruzioni particolari;
* preposizioni obbligatorie;
* usi idiomatici;

sono preferibili più esempi.

Gli esempi devono mostrare l'uso naturale della parola.

---

# 13. Grammatica

La grammatica non deve essere trattata come un semplice elenco di regole.

Ogni pagina deve rispondere a una domanda concreta dello studente.

Esempi:

```text
Che cos'è l'Akkusativ?
Quando uso den invece di der?
Come funzionano le preposizioni mit e nach?
Come si forma il Perfekt?
```

---

# 14. Frontmatter della grammatica

Ogni argomento deve contenere:

```yaml
---
title: Akkusativ
category: Fälle
level: A2
order: 10
---
```

---

## 14.1 `title`

Titolo visualizzato della pagina.

Non ripeterlo manualmente nel Markdown se il layout lo genera già.

Evitare quindi:

```md
# Akkusativ
```

se `GrammarLayout.astro` genera già il titolo.

Questo evita titoli duplicati.

---

## 14.2 `category`

Categoria grammaticale.

Esempi:

```text
Fälle
Artikel
Präpositionen
Adjektive
Verben
Satzbau
Pronomen
```

Usare categorie stabili e riutilizzabili.

---

## 14.3 `order`

Numero utilizzato per ordinare gli argomenti all'interno di una categoria.

Esempio:

```yaml
order: 10
```

Poi:

```yaml
order: 20
```

Lasciare intervalli tra i numeri.

Questo permette di inserire successivamente un argomento tra due esistenti senza rinumerare tutto.

Esempio:

```text
10
20
30
```

Se serve inserire qualcosa tra 10 e 20:

```text
15
```

---

# 15. Struttura delle pagine grammaticali

Una pagina grammaticale dovrebbe seguire, quando appropriato, questa struttura:

```md
## Was ist das?

Spiegazione semplice del concetto.

## Regel

Regola principale.

## Beispiele

Esempi.

## Besonderheiten

Eccezioni o casi particolari.

## Häufige Fehler

Errori comuni.

## Merken

Una breve sintesi da ricordare.
```

Non tutte le sezioni sono obbligatorie.

Non aggiungere sezioni vuote.

---

# 16. Tabelle

Le tabelle devono essere utilizzate quando facilitano realmente il confronto.

Sono particolarmente utili per:

* declinazioni;
* articoli;
* pronomi;
* coniugazioni;
* confronti tra forme.

Non usare una tabella semplicemente perché "sembra ordinata".

Su mobile deve essere comunque leggibile.

---

# 17. Esempi grammaticali

Gli esempi devono essere concreti.

Preferire:

```md
> Ich sehe den Mann.
```

a frasi artificiali create solamente per contenere una forma.

Quando una frase è utile per capire la regola, può essere accompagnata dalla traduzione italiana.

---

# 18. Coerenza degli esempi

Gli esempi devono usare, quando possibile, vocabolario già presente nel sito.

Questo crea collegamenti naturali tra grammatica e vocabolario.

Tuttavia non bisogna forzare l'uso di parole già presenti se questo rende la frase innaturale.

---

# 19. Informazioni duplicate

Non duplicare informazioni che il sito può generare automaticamente.

Esempio:

Se il componente mostra:

```text
der Tisch
```

non scrivere manualmente anche:

```md
Der Tisch
```

come titolo della scheda.

Analogamente, non duplicare nel Markdown informazioni già presenti nel frontmatter e visualizzate automaticamente dai componenti.

---

# 20. Markdown vs componenti Astro

I file `.md` devono contenere principalmente **contenuto didattico e dati**.

I file Astro devono contenere:

* layout;
* struttura dell'interfaccia;
* logica di visualizzazione;
* filtri;
* ricerca;
* componenti riutilizzabili.

Non inserire HTML complesso nei file Markdown quando può essere gestito da un componente.

Principio:

> Markdown = contenuto.
>
> Astro = presentazione e comportamento.

---

# 21. Non aggiungere campi senza necessità

Prima di aggiungere un nuovo campo allo schema chiedersi:

1. Serve realmente?
2. Verrà utilizzato dall'interfaccia?
3. Verrà utilizzato dalla ricerca?
4. Migliora l'apprendimento?
5. Può essere rappresentato da un campo già esistente?

Se la risposta è no, non aggiungerlo.

---

# 22. Qualità linguistica

Ogni contenuto deve essere controllato per:

* ortografia;
* grammatica;
* genere;
* plurale;
* traduzione;
* uso del verbo;
* esempi;
* livello CEFR.

In caso di dubbio su una forma linguistica, verificare prima di inserirla.

Non affidarsi alla memoria quando l'informazione è incerta.

---

# 23. Priorità didattica

Quando bisogna scegliere tra:

```text
più informazioni
```

e:

```text
informazioni più chiare
```

preferire la seconda.

Il sito non deve diventare un dizionario completo.

Deve essere uno strumento personale per imparare e ripassare il tedesco.

---

# 24. Prima di creare molti contenuti

Prima di aggiungere decine o centinaia di schede:

1. creare una scheda di esempio;
2. verificare come viene visualizzata;
3. verificare filtri e ricerca;
4. verificare mobile;
5. verificare la coerenza con le altre schede;
6. solo dopo procedere alla produzione massiva.

Non produrre grandi quantità di contenuti prima che la struttura sia stabile.

---

# 25. Checklist per un nuovo verbo

Prima di considerare completo un verbo:

* [ ] file nella cartella `verben/`
* [ ] nome file corretto
* [ ] `lemma`
* [ ] `translation`
* [ ] `type`
* [ ] `level`, se noto
* [ ] `auxiliary`, se pertinente
* [ ] `participle`, se pertinente
* [ ] `preterite`, se pertinente
* [ ] `separable`
* [ ] `reflexive`
* [ ] almeno 2 esempi quando possibile
* [ ] esempi naturali
* [ ] coniugazione verificata se necessaria
* [ ] contenuto visualizzato correttamente

---

# 26. Checklist per un nuovo vocabolo

* [ ] file nella cartella `vokabeln/`
* [ ] nome file corretto
* [ ] `word`
* [ ] `translation`
* [ ] `type`
* [ ] articolo, se sostantivo
* [ ] plurale, se pertinente
* [ ] categoria, se utile
* [ ] livello, se noto
* [ ] almeno un esempio quando utile
* [ ] genere verificato
* [ ] plurale verificato
* [ ] contenuto visualizzato correttamente

---

# 27. Checklist per un nuovo argomento grammaticale

* [ ] file nella cartella `grammatik/`
* [ ] nome file corretto
* [ ] `title`
* [ ] `category`
* [ ] `level`, se noto
* [ ] `order`
* [ ] spiegazione chiara
* [ ] regola
* [ ] esempi
* [ ] eccezioni, se pertinenti
* [ ] errori comuni, se pertinenti
* [ ] sintesi finale, se utile
* [ ] nessun titolo duplicato
* [ ] contenuto visualizzato correttamente

---

# 28. Regola finale

Quando si aggiunge qualcosa al sito, seguire questo ordine:

1. **Rimuovere il superfluo.**
2. **Definire l'informazione necessaria.**
3. **Strutturarla in modo coerente.**
4. **Verificare che sia pedagogicamente utile.**
5. **Solo dopo ottimizzare presentazione e tecnologia.**

Non aggiungere complessità prima che sia necessaria.