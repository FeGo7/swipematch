# Agreesy – Einigen ohne Diskussion (`agreesy.com`)

[![Live Web App](https://img.shields.io/badge/Live_App-agreesy.com-E05A3A?style=for-the-badge)](https://agreesy.com)
[![Architecture](https://img.shields.io/badge/Backend-0_Bytes_(URL_Hash_Sync)-0071E3?style=for-the-badge)](https://agreesy.com)
[![Privacy](https://img.shields.io/badge/Privacy-No_Cookies_%7C_No_Login-16A34A?style=for-the-badge)](https://agreesy.com)

**Agreesy** ([https://agreesy.com](https://agreesy.com)) löst die tägliche Diskussion zu zweit in 30 Sekunden: *„Was essen wir heute Abend?“*, *„Welchen Film schauen wir?“* oder *„Wer übernimmt welche Aufgabe im Haushalt?“*

Jeder wählt verdeckt auf seinem Smartphone aus 8 Vorschlägen. Am Ende zählt nur, was beide wollen – komplett ohne Benutzerkonto, ohne App-Store-Download und ohne Datenbank.

---

## ✨ Features

- **🍽️ Hunger & Essen / 🎬 Film & Couch / 🧭 Unternehmungen (Konsens-Modus):**
  Person 1 wischt in 30 Sekunden durch 8 zufällig gezogene Karten und teilt den generierten Einladungslink per WhatsApp. Sobald Person 2 denselben Favoriten nach rechts wischt, stoppt die Runde sofort beim ersten gemeinsamen Treffer (*Sudden-Death-Match*).
- **✅ Aufgaben fair aufteilen (Anti-Match & Fair-Split):**
  Freiwillig übernommene Aufgaben werden sofort zugeteilt. Aufgaben, die beide ablehnen (*Anti-Matches*), werden per 1-Klick-Zufallsverteilung fair zwischen beiden Personen ausgelost.
- **➕ Eigene Abstimmung (Custom Polls):**
  Eigene Restaurants, Filme oder Urlaubsziele eintragen – die Optionen werden UTF-8-Base64-komprimiert direkt im Link übertragen.
- **🔒 0-Byte Backend Architektur:**
  Es gibt keinen Server, der persönliche Entscheidungen speichert. Der gesamte Spielstand (`#m=...` bzw. `#c=...`) steckt im URL-Fragment (Hash), das den Browser technisch nie in Richtung eines Servers verlässt.

---

## 🚀 Live ausprobieren

👉 **[https://agreesy.com](https://agreesy.com)**
