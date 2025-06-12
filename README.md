# Arc 0.1

**Arc 0.1** est un chatbot minimaliste en JavaScript pur. Simple, rapide à modifier, et conçu pour servir de base à un bot perso sans backend ni dépendances.

---

## 🌐 Démo améliorée

Tu veux voir ce que ça peut donner en version avancée ?  
Teste **W4Bot** ici 👉 [https://w4bot.netlify.app](https://w4bot.netlify.app)

---

## 📁 Fichiers inclus

### `index.html`
Structure de la page :
- Un titre
- Une zone d’affichage des messages (`#arc-output`)
- Un champ de saisie (`#arc-input`)

### `script.js`
Le moteur du bot :
- Analyse des mots-clés dans le message utilisateur
- Réponse associée (si connue), sinon message par défaut

Tu peux personnaliser les mots-clés et les réponses très facilement dans le fichier.

---

## 🚀 Utilisation

1. Clone ou télécharge le projet :
   ```bash
   git clone https://github.com/ton-pseudo/arc.git
   cd arc

    Ouvre le fichier index.html dans ton navigateur.

Aucune installation, tout est en local.
🔧 Modifier le bot

Tu veux ajouter ou modifier les réponses ?
Va dans script.js et ajoute une condition :

if (message.includes("ton mot")) {
  afficherMessage("Réponse personnalisée !");
}

❌ Conditions d’utilisation

🛑 Tu peux modifier ce projet pour usage personnel uniquement.
❌ Tu n’as pas le droit de le publier, de le redistribuer, ni de le montrer en public.
📩 Si tu veux proposer une amélioration, envoie-la moi par mail : enzoizinga23@gmail.com

Merci de respecter mon travail 🙏
👤 Auteur

Développé par Enzo Izinga
Pour découvrir un bot plus poussé : https://w4bot.netlify.app
