# React - lekce 8

Tento repozitář obsahuje podklady a cvičení pro 8. lekci kurzu React od Czechitas.

V této lekci:
- [Formuláře a obousměrný data binding](#formuláře-a-obousměrný-data-binding)
- [Cvičení na formuláře](#cvičení-na-formuláře)
- [Efekty](#efekty)
- [Efekty a volání API](#efekty-a-volání-api)
- [Cvičení na efekty a volání API](#cvičení-na-efekty-a-volání-api)


## Formuláře a obousměrný data binding

Formulářové prvky (textová pole, zaškrtávací políčka, rozbalovací roletky, apod.) jsou jedním z hlavních způsobů, jak v aplikacích získávat vstup od uživatele. V čistém JavaScriptu jsme hodnotu z formulářového prvku získavali tak, že jsme prvek našli pomocí `querySelector` a jeho hodnotu získali z vlastnosti `value`. Třeba takto:

```js
const inputElm = document.querySelector('input');
const value = inputElm.value;
```

### onChange

Už v minulé lekci jsme si ale říkali, že v Reactu `querySelector` nepoužíváme. Můžeme ale na formulářový prvek přidat událost `onChange`. Ta nastane ve chvíli, kdy se změní obsha prvku (v textovém poli se změní text, v roletce se vybere položka, zaškrtne se políčko, apod.).

Funkce, která bude na událost reagovat může jako parametr přijímat `event object`, který v sobě obsahuje vlastnost `target`. Tato vlastnost ukazuje na prvek, který událost vyvolal (např. políčko formuláře) a my můžeme přes jeho vlastnost `value` zjistit jeho hodnotu.

Představme si například komponentu, kde bude uživatel zadávat svůj věk:

```jsx
const AgeField = () => {
  const [age, setAge] = useState(null);

  return (
    <label>
      Zadej svůj věk:
      <input type="text" onChange={(event) => setAge(event.target.value)} />
    </label>
  );
};
```

Tímto postupem se snažíme provázat hodnotu v políčku s hodnotou stavu. Kdykoliv dojde ke změně hodnoty v políčku, změníme hodnotu stavu `age`. Tomuto provázání se obvykle říká **data binding**.

Náš data binding zatím funguje pouze jedním směrem: *změna políčka → změna stavu*. Když z nějakého důvodu dojde jinde ke změně stavu `age`, nová hodnota stavu se do našeho políčka nepromítne.

### Obousměrný data binding

V ukázce nahoře vidíme tzn. jednosměrný (one-way) data binding. V praxi skoro vždy chceme tzv. obousměrný (two-way) data binding. Když se změní stav, dojde ke změně hodnoty v poli. A když se změní hodnota v poli, dojde ke změně stavu na stejnou hodnotu.

To zařídíme jednoduše tak, že atribut `value` u formulářového pole nastavíme na hodnotu stavu.

```jsx
const AgeField = () => {
  const [age, setAge] = useState(null);

  return (
    <label>
      Zadej svůj věk:
      <input type="text" value={age} onChange={(event) => setAge(event.target.value)} />
    </label>
  );
};
```

## Cvičení na formuláře

- [Cvičení 1 - Registrace](./cviceni-01-registrace/README.md)
- [Cvičení 2 - Výběr země](./cviceni-02-vyber-zeme/README.md)
- [Cvičení 3 - Podmínky registrace](./cviceni-03-podminky-registrace/README.md)

---

## Efekty

V mírně komplikovanějších React aplikacích brzy narazíme na potřebu zareagovat na určité situace, které nastávají během vykreslování (renderování) komponenty. Budeme chtít například spustit nějaký kód ve chvíli, kdy se komponenta poprvé objeví na stránce. Čas od času také budeme chtít v komponentě provést něco ve chvíli, kdy se změní hodnota v props nebo ve stavu. K tomuto nám v Reactu slouží takzvané efekty.

Efekty jsou v podstatě velmi podobné událostem. Ve chvíli, kdy uvnitř komponenty něco nastane, budeme chtít yavolat naši funkci. Jako příklad si vyrobíme jednoduchou aplikaci, která řiká, kdo má zrovna svátek.

```jsx
const Svatek = () => {
  return (
    <>
      <h1>Svátky</h1>
      <div className="nameday">Svátek má Alena</div>
    </>
  );
};
```

My budeme chtít, aby ve chvíli, kdy se naše komponenta objeví na stránce, se spustil kód, který např. z nějakého serveru zjistí, kdo má dnes svátek.

Použijeme funkci Reactu nazvanou `ùseEffect`, do které jako parametr předáme funkci, která se má spustit. Jako druhý parametr prozatím uvedeme prázdné pole `[]`. Nesmíme zapomenout funkci `useEffect` naimportovat.


```jsx
import React, { useEffect } from 'react';

const Svatek = () => {

	useEffect(
		() => console.log('jsem tady'),
		[]
	);

  return (
    <>
      <h1>Svátky</h1>
      <div className="nameday">Svátek má Alena</div>
    </>
  );
};
```
Funkce `useEffect` má dva parametry. Prvním je funkce, která se má zavolat a druhý parametr říká, za jakých okolností se má naše funkce volat. Prázdné pole `[]` znamená, že se efekt spustí pouze ve chvíli, kdy se komponenta **poprvé objeví na stránce**.

## Efekty a volání API

Pokud chceme v naší aplikaci zobrazovat data z nějakého API, musíme si tato data stáhnout pomocí standardní javascriptové funkce `fetch`. Tuto funkci je nejlepší zavolat právě ve chvíli, kdy se naše komponenta poprvé objeví na stránce.

Naše poslední aplikace zatím zobrazovala, že svátek má Alena. To je však pravda pouze jeden den v roce. Pojďme aplikace vylepšit tak, aby si stáhla aktuální jméno ze serverového API.

```jsx
import React, { useState, useEffect } from 'react';

const Svatek = () => {
  const [name, setName] = useState('');

  useEffect(
		() => {
    	fetch('https://svatky.adresa.info/json')
			.then((response) => response.json())
			.then((json) => setName(json[0].name))
		},
		[]
	);

  return (
    <>
      <h1>Svátky</h1>
      <div className="nameday">Svátek má {name}</div>
    </>
  );
};
```

Na dokumentaci použitého API se můžeš podívat [tady](https://svatky.adresa.info/).

V tomto případě jsme si do stavu ukládali pouze obyčejný řetězec se jménem. Naše data však budou často zobrazovat seznamy, takže budeme chtít mít ve stavu uložené nějaké pole.

Např. seznam časových zón, získaných z následující adresy:
```
https://worldtimeapi.org/api/timezone
```

## Cvičení na efekty a volání API

- [Cvičení 4 - Světový čas](./cviceni-04-svetovy-cas/README.md)
