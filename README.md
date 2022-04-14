# React - lekce 8

Tento repozitář obsahuje podklady a cvičení pro 8. lekci kurzu React od Czechitas.

V této lekci:
- [Formuláře a obousměrný data binding](#formuláře-a-obousměrný-data-binding)
- [Cvičení na formuláře](#cvičení-na-formuláře)

---

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
