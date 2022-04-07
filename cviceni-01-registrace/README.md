# Cvičení 1 - Registrace

1. Založ si novou React aplikaci dle klasického postupu pomocí `create-czechitas-app`.

2. Vytvoř komponentu `Registrace` s jednoduchým textovým políčkem dle následujícího vzoru.

	```jsx
	const Registrace = () => {
		const handleSubmit = (event) => {
			event.preventDefault();
		};

		return (
			<form onSubmit={handleSubmit}>
				<label>
					Uživatelské jméno:
					<input type="text" />
				</label>
				<button type="submit">Registrovat</button>
			</form>
		);
	};
	```

3. Na textové pole přidej událost `onChange`. V reakci na událost do konzole vypište obsah políčka pomocí vlastnosti target.value. Vyzkoušej, že když do políčka píšeš, v konzoli vidíte každou změnu jeho hodnoty.

4. Uvnitř komponenty `Registrace` vytvoř stav `userName` s výchozí hodnotou prázdný řetězec. Vytvořte obousměrný (two-way) data binding mezi textovým políčkem a stavem `userName`.

5. V reakci na událost `onSubmit` do konzole vypište jméno uživatele uložené ve stavu `userName`.

6. Na stránku vložte div se zprávou
	```
	Uživatelské jméno je povinný údaj
	```

	Tato zpráva se bude zobrazovat nad formulářem pouze pokud je ve stavu `userName` prázdný řetězec. Můžeš v komponentě použít buď podmíněné zobrazení HTML nebo na div podle stavu přidávat CSS styl `display: none;` (nebo ještě lépe, vytvoř si CSS třídu a místo toho přidávej na div tuto třídu).

7. Vzpomeň si, že formulářové prvky mají vlastnost `disabled` a zařiď, aby registrační tlačítko bylo dostupné pouze v případě, že ve stavu `userName` není prázdný řetězec.
