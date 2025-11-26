# Task Tracker CLI

[Progetto Originale](https://roadmap.sh/projects/task-tracker)

Task tracker è un progetto utilizzato per tracciare e gestire le tue attività. In questo progetto, costruirai una semplice interfaccia a riga di comando (CLI) per tenere traccia di ciò che devi fare, ciò che hai fatto e ciò su cui stai attualmente lavorando. Questo progetto ti aiuterà a esercitare le tue competenze di programmazione, incluso il lavoro con il filesystem, la gestione degli input dell'utente e la costruzione di una semplice applicazione CLI.

## Requisiti

L'applicazione deve essere eseguita dalla riga di comando, accettare azioni e input dell'utente come argomenti e memorizzare le attività in un file JSON. L'utente deve essere in grado di:

- Aggiungere, aggiornare ed eliminare attività
- Contrassegnare un'attività come in corso o completata
- Elencare tutte le attività
- Elencare tutte le attività completate
- Elencare tutte le attività non completate
- Elencare tutte le attività in corso

Ecco alcuni vincoli per guidare l'implementazione:

- Puoi utilizzare qualsiasi linguaggio di programmazione per costruire questo progetto.
- Utilizza argomenti posizionali nella riga di comando per accettare gli input dell'utente.
- Utilizza un file JSON per memorizzare le attività nella directory corrente.
- Il file JSON deve essere creato se non esiste.
- Utilizza il modulo nativo del file system del tuo linguaggio di programmazione per interagire con il file JSON.
- Non utilizzare librerie o framework esterni per costruire questo progetto.
- Assicurati di gestire errori e casi limite in modo appropriato.

## Esempio

L'elenco dei comandi e il loro utilizzo è riportato di seguito:

```bash
# Aggiunta di una nuova attività
task-cli add "Comprare la spesa"
# Output: Attività aggiunta con successo (ID: 1)

# Aggiornamento ed eliminazione di attività
task-cli update 1 "Comprare la spesa e cucinare la cena"
task-cli delete 1

# Contrassegnare un'attività come in corso o completata
task-cli mark-in-progress 1
task-cli mark-done 1

# Elencare tutte le attività
task-cli list

# Elencare le attività per stato
task-cli list done
task-cli list todo
task-cli list in-progress
```

## Proprietà delle Attività

Ogni attività deve avere le seguenti proprietà:

- **id**: Un identificatore univoco per l'attività
- **description**: Una breve descrizione dell'attività
- **status**: Lo stato dell'attività (todo, in-progress, done)
- **createdAt**: La data e l'ora in cui l'attività è stata creata
- **updatedAt**: La data e l'ora in cui l'attività è stata aggiornata l'ultima volta
