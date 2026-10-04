# AEIWelcome — Installation Android (hors Play Store)

Version : **2.0.0** · Fichier : `AEIWelcome-2.0.0.apk` (~30 Mo)
Signé avec la clé officielle AEIWelcome (schéma v2). Compatible **Android 7.0+ (64 bits)**.

---

## Pour tes utilisateurs (à mettre sur la page de téléchargement)

**Installer AEIWelcome sur Android :**

1. Depuis ton téléphone, appuie sur le bouton **« Télécharger pour Android »**. Le fichier `AEIWelcome-2.0.0.apk` se télécharge.
2. Ouvre le fichier téléchargé (depuis la notification ou le dossier *Téléchargements*).
3. Android affiche un message du type *« Pour ta sécurité, ton téléphone n'est pas autorisé à installer des applis de cette source »*. C'est normal pour une appli hors Play Store. Appuie sur **Paramètres** puis active **« Autoriser depuis cette source »** pour ton navigateur.
4. Reviens en arrière et appuie sur **Installer**.
5. À la première ouverture, garde une **connexion internet** : l'appli télécharge une seule fois la carte hors-ligne (~14 Mo). Ensuite elle fonctionne sans connexion.

> Compatible avec les téléphones Android 7.0 ou plus récents (la quasi-totalité des appareils actuels).

---

## Pour l'hébergement du fichier (côté site web)

- **Héberge le `.apk` en HTTPS** (obligatoire, sinon la plupart des navigateurs bloquent le téléchargement).
- **Type MIME** : sers le fichier avec `application/vnd.android.package-archive`. Sinon certains navigateurs l'ouvrent comme du texte au lieu de le télécharger.
  - Apache (`.htaccess`) : `AddType application/vnd.android.package-archive .apk`
  - Nginx : `types { application/vnd.android.package-archive apk; }`
  - La plupart des hébergeurs le font déjà automatiquement.
- **Lien direct** bien visible : « Télécharger pour Android (.apk) ».
- Affiche le **numéro de version (2.0.0)** et la date à côté du lien, pour que les gens sachent quand une mise à jour existe.
- À chaque nouvelle version : remplace le fichier et incrémente le numéro (`AEIWelcome-2.1.0.apk`, etc.).

---

## Sécurité et confiance

- Recommande aux utilisateurs de **ne télécharger l'APK que depuis ton site officiel** (jamais depuis un lien tiers).
- L'avertissement « source inconnue » est normal tant que l'appli n'est pas sur le Play Store ; il disparaîtra pour ceux qui l'installeront plus tard via le Play Store.

## Important — passage au Play Store plus tard

Cet APK est signé avec **ta** clé. Quand l'appli sera publiée sur le Play Store, Google la re-signe avec **sa** clé : la signature sera donc différente. Concrètement, un utilisateur ayant installé l'APK du site devra **désinstaller puis réinstaller** depuis le Play Store pour basculer sur la version officielle. C'est acceptable pour une distribution web temporaire, le temps que Google valide.
