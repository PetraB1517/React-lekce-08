# Cvičení 3 - Výběr země

Pokračuj v předchozím cvičení.

1. Přidej do formuláře rozbalovací nabídku `select`, která bude sloužit k výběru země, ze které uživatel pochází.

	```html
	<label>
		Země původu:
		<select>
			<option value="Chorvatsko">Chorvatsko</option>
			<option value="Česká republika">Česká republika</option>
			<option value="Polsko">Polsko</option>
			<option value="Slovenská republika">Slovenská republika</option>
		</select>
	</label>
	```

2. Vytvoř v komponentě stav `country`, který bude sloužit k uložení hodnoty z roletky. Výchozí hodnotu stavu nastav na Česká republika.

3. Pomocí události `onChange` zařiď one-way data binding mezi roletkou a stavem `country`.

4. Zařiď two-way data binding mezi roletkou a stavem country tak, aby nabídka zobrazovala výchozí hodnotu uloženou ve stavu. Můžeš k tomu použít atribut `value` u prvku `<select>`.

5. Zprávu vypisovanou do konzole po úspěšné registraci změňte na
	```
	Registrován nový uživatel jaroslav ze země Polsko
	```

	Ve zprávě zobrazte zemi, kteoru si uživatel při registraci vybral.

