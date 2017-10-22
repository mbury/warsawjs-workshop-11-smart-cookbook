# Warsawjs Workshop 11

 To repozytorium zawiera kod przygotowany na warsztaty #11 WarsawJS - Zaawansowany React.js

# Plan

**Skonfigurowanie projektu**:
- Stworzenie projektu o nazwie: warsawjs-workshop-11-smart-cookbook
- Podłączenie bibliotek: create react app, redux, redux-logger

**Komponent wyświetlający i pobranie listy przepisów**:
- Zapytanie do serwera przy użyciu: redux-api-middleware
- Zapisanie danych w redux store
- Wyświetlenie listy pobranych przepisów za pomocą semantic-ui lub innego gotowego zestawu komponentów

**Filtrowanie przepisów**:
- Dodanie dropdown
- Wyciągnięcie wszystkich dostępnych składników z listy pobranych przepisów za pomocą selektora
- Dodawanie i usuwanie składników wybranych w dropdown do redux store
- Wyświetlenie tylko przepisów zawierających wybrane składniki za pomocą selektora
- Implementacja memoizacja selectora za pomocą biblioteki reselect

**Normalizacja i middleware**:
- Wyłapanie akcji zwracającej listę przepisów w przygotowanym middleware
- Normalizacja danych zwróconych z api za pomocą normalizr
- Dostosowanie selektorów pobierających przepisy do nowego kształtu redux store
- Podłączenie do redux store każdego przepisu z osobna w celu ograniczenia niepotrzebnych przeładowań komponentów [link]

**Wyświetlanie pojedynczego przepisu**:
- Konfiguracja bibliotek react-router-dom
- Dodanie routingu w którym na stronie głównej wyświetlona będzie lista przepisów oraz nowej strony pojedynczy przepis.

**Pobieranie listy wycen produktów**:
- Konfiguracja redux-saga
- Pobieranie wyceny produktów przepisu dla każdego sklepu w osobnym zapytaniu
- Wyświetlanie sumarycznej ceny produktów
- Implementacja przerywania trwających zapytania po powrocie do listy przepisów

**Inicjalizacja aplikacji z redux-saga**:
- Pobieranie listy przepisów na starcie aplikacji niezależnie od  odwiedzanej podstrony
- Dodanie komponentu wyświetlającego informacje o ładowaniu zanim pobiorą się przepisy z serwera
- Wydzielenie higher order component z opisaną logiką

**Limitowanie wyświetlanej listy przepisów**:
- Dodanie komponentu  function as child dostarczającego logikę przechowywania limt i jego zwiększania i zmniejszania

