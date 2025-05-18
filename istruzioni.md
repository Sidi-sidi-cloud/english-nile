# Istruzioni per l'integrazione della Landing Page "English on the Nile"

## Contenuto del pacchetto

Il pacchetto `english_on_the_nile.zip` contiene tutti i file necessari per la landing page:

- `index.html`: La struttura HTML principale della landing page
- `css/styles.css`: Tutti gli stili CSS per il design e la responsività
- `js/script.js`: Gli script JavaScript per le animazioni e l'interattività
- `assets/images/`: Tutte le immagini utilizzate nella landing page

## Istruzioni per l'integrazione nel sito principale

Per integrare questa landing page nel sito https://www.egyniletravel.com/, segui questi passaggi:

1. **Caricamento dei file**:
   - Estrai il contenuto del file ZIP
   - Carica tutti i file e le cartelle sul server web, mantenendo la stessa struttura di directory

2. **Opzioni di integrazione**:
   - **Opzione A - Come pagina separata**: 
     - Carica i file in una sottodirectory del sito (es. `/english-course/`)
     - Accedi alla pagina tramite https://www.egyniletravel.com/english-course/
   
   - **Opzione B - Come sezione del sito principale**:
     - Incorpora il contenuto HTML nella struttura del sito esistente
     - Assicurati di includere anche i file CSS e JS specifici

3. **Verifica della responsività**:
   - La landing page è completamente responsiva e si adatta a tutti i dispositivi
   - Verifica la visualizzazione su desktop, tablet e smartphone

## Note tecniche

- La landing page utilizza font di Google (Playfair Display e Roboto) e Font Awesome per le icone
- Tutti gli elementi interattivi sono gestiti tramite JavaScript puro, senza dipendenze esterne
- Il design è ispirato all'Egitto con colori dorati e blu che richiamano il Nilo

## Personalizzazioni future

Se desideri apportare modifiche in futuro:

- Per cambiare le immagini, sostituisci i file nella cartella `assets/images/`
- Per modificare i colori principali, cerca le variabili CSS (`:root`) all'inizio del file `styles.css`
- Per aggiungere funzionalità al pulsante di prenotazione, modifica il link nel file HTML

Per qualsiasi assistenza o modifiche aggiuntive, non esitare a contattarci.
