---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS
css: unocss
---

# La programmazione

Impariamo a programmare un arduino

---

# Struttura del programma

```c
void setup(){
  // Il codice viene eseguito una sola volta
}

void loop(){
  // Il codice viene eseguito in loop
}
```

```c
void setup(){
  // Il codice viene eseguito una sola volta
  pinMode(1, OUTPUT); // 1 è il pin OUTPUT indica la presenza di un led
}

void loop(){
  digitalWrite(1, HIGH);  // cambia il valore di pin 1 in alto
}
```

---over on the bottom-left corner to see the navigation's controls panel, [learn more](https://sli.dev/guide/navigation.html)

# DigitalWrite

Cambiamo il valore dei pin.

```c
void setup(){
  // Il codice viene eseguito una sola volta
  pinMode(1, OUTPUT); // 1 è il pin OUTPUT indica la presenza di un led
}

void loop(){
  digitalWrite(1, HIGH);  // cambia il valore di pin 1 in alto
}
```

---

# Il delay

Aggiungiamo un ritardo prima di eseguire le istruzioni

```c
void setup(){
  // Il codice viene eseguito una sola volta
  pinMode(1, OUTPUT); // 1 è il pin OUTPUT indica la presenza di un led
}

void loop(){
  delay(1000); // 1000 = 1s Formula: secondi * 1000
  digitalWrite(1, HIGH);  // cambia il valore di pin 1 in alto
}
```

---

# Leggere la pressione del pulsante

Per leggere la pressione di un pulsante usiamo il seguente codice:

```c // Il codice viene eseguito una sola volta
void setup(){
  pinMode(1, OUTPUT); // 1 è il led, OUTPUT indica che c'è collegato un led
  pinMode(2, INPUT_PULLUP); // 2 è il pulsante. INPUT_PULLUP indica la presenza di un pulsante
}

void loop(){
  int stato_pulsante = digitalRead(2);  // digitalRead legge lo stato del pulsante al pin 2
  digitalWrite(1, stato_pulsante);  // cambia il valore di pin 1 in stato_pulsante quindi se premuto diventa acceso e se rilasciato diventa spento
}
```

Provate con due pulsanti 

---

# Il blocco condizionale

Possiamo inoltre usare un blocco condizionale per verificare che il pulsante sia premuto

```c // Il codice viene eseguito una sola volta
#define PREMUTO 1

void setup(){
  pinMode(1, OUTPUT); // 1 è il led, OUTPUT indica che c'è collegato un led
  pinMode(2, INPUT_PULLUP); // 2 è il pulsante. INPUT_PULLUP indica la presenza di un pulsante
}

void loop(){
  int stato_pulsante = digitalRead(2);  // digitalRead legge lo stato del pulsante al pin 2
  if(stato_pulsante == PREMUTO) // if in inglese significa se. In questo caso se stato_pulsante == premuto
    digitalWrite(1, HIGH);  // cambia il valore di pin 1 in stato_pulsante quindi se premuto diventa acceso e se rilasciato diventa spento
  else
    digitalWrite(1, LOW):
}
```


